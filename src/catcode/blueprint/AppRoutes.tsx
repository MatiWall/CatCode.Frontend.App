import React from 'react'
import { createExtensionBluePrint, createExtensionInputNode } from "@plugger/extension";
import { contentRef } from "./AppLayoutBlueprint";
import { RoutesBuilder, createRoutableComponent } from "@plugger/routing";
import { pageMountPointDataRef, pageDataRef} from "./PageBlueprint";

const AppRoutesBlueprint = createExtensionBluePrint({
    kind: 'routes',
    namespace: 'app',
    name: 'app',
    attachToo: {namespace: 'app', name: 'app', kind: 'layout'}, 
    output: [contentRef],
    input: {
        mountPoints: createExtensionInputNode({ref: pageMountPointDataRef, allowMultiple: true}),
        pages: createExtensionInputNode({ref: pageDataRef, allowMultiple: true})
    },
    provider: ({input, config}) => {
        
        const { mountPoints, pages } = input;

        if (mountPoints.length !== pages.length) {
            throw new Error('Number of mount points does not match number of pages');
        }

        const routableComponents = pages.map((page, index) =>
            createRoutableComponent({
                mountPoint: mountPoints[index],
                component: page
            })
    );

        const AppRoutes = () => {
            
            return <RoutesBuilder routeBinds={routableComponents}/>
        }
        
        return [
            contentRef.with(AppRoutes)
    ]
}
});


export {
    AppRoutesBlueprint
}