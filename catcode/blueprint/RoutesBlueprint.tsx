import React from 'react'
import { ExtensionKind, coreDataRef, createExtensionBluePrint, createExtensionInputNode } from "../extension"

import {AppRouter, Routes, createRoutableComponent} from '@catcode/core-routing'




const RoutesBlueprint = createExtensionBluePrint({
    kind: ExtensionKind.Routing,
    namespace: 'app',
    name: 'routing',
    attachToo: {namespace: 'root', name: 'app', kind: ExtensionKind.Component}, 
    output: [
        coreDataRef.coreRoutesRef
    ],
    input: {
        path: createExtensionInputNode({ref: coreDataRef.coreRoutePath, allowMultiple: true}),
        routeRef: createExtensionInputNode({ref:coreDataRef.coreRouteRef, allowMultiple: true}),
        component: createExtensionInputNode({ref: coreDataRef.corePageRef, allowMultiple: true})
    },

    provider: ({input, config}) => {
        const paths = input.path

        const routableComponents = [];
        for (let i=0; i <  paths.length; i++){
            routableComponents.push(
                createRoutableComponent({
                    mountPoint: input.routeRef[i],
                    path: input.path[i],
                    component: input.component[i]
                })
                )
        }

        return [
            coreDataRef.coreRoutesRef.with(<Routes routeBinds={routableComponents}/>)
        ]
    }

})

export {
    RoutesBlueprint
}