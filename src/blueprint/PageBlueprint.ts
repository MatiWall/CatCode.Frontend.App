import { ExtensionKind, coreDataRef, createExtensionBluePrint, createExtensionInputNode } from "../extension"
import { coreRouteRef } from "../extension/CoreExtensionData"



const PageBlueprint = createExtensionBluePrint({
    kind: ExtensionKind.Component,
    attachToo: {namespace: 'app', name: 'routing', kind: ExtensionKind.Routing}, 
    output: [
        coreDataRef.corePageRef,
        coreDataRef.coreRoutePath,
        coreDataRef.coreRouteRef
    ],
    provider: ({input, config, params}) => [
        coreDataRef.coreRoutePath.with(params?.route), 
        coreRouteRef.with(params?.routeRef),
        coreDataRef.corePageRef.with(params?.page)
    ]

})


export {
    PageBlueprint
}