import React from 'react'
import {Link} from 'react-router-dom'

import {coreDataRef, createExtensionBluePrint, createExtensionDataRef, createExtensionInputNode } from "@plugger/extension"
import { useRouteRef } from '@plugger/routing';

const navbarItemRef = createExtensionDataRef();


const NavbarItemBlueprint = createExtensionBluePrint({
    namespace: 'app',
    name: 'routing',
    kind: 'route',
    attachToo: { namespace: 'app', name: 'navbar', kind: 'navbar' },
    output: [navbarItemRef],
    provider: ({ input, config, params }) => {



        const Item = () => {
            const routeGenerator = useRouteRef(params?.routeRef);
            if (!routeGenerator) {
                return <span>Invalid Route</span>;
            }
            
            return (
                <Link to={routeGenerator()}>{params?.title || 'Unnamed Link'}</Link>
            );
        };

        return [
            navbarItemRef.with(Item)
        ];
    }
});

export {
    NavbarItemBlueprint, 
    navbarItemRef
}