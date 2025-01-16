import {createExtensionBluePrint, createExtensionDataRef, createExtensionInputNode } from "@plugger/extension"



const pageDataRef = createExtensionDataRef();
const pageMountPointDataRef = createExtensionDataRef();

const PageBlueprint = createExtensionBluePrint({
    kind: 'page',
    attachToo: {namespace: 'app', name: 'app', kind: 'routes'}, 
    output: [
        pageDataRef,
        pageMountPointDataRef
    ],
    provider: ({input, config, params}) => [
        pageDataRef.with(params?.page), 
        pageMountPointDataRef.with(params?.routeRef),
    ]

})


export {
    PageBlueprint,
    pageDataRef,
    pageMountPointDataRef
}