import { ExtensionKind, coreDataRef, createExtensionBluePrint, createExtensionDataRef, createExtensionInputNode } from "../extension"

const coreThemeRef = createExtensionDataRef();


const ThemeBlueprint = createExtensionBluePrint({
    namespace: 'app',
    name: 'navbar',
    kind: ExtensionKind.Component,
    attachToo: {namespace: 'app', name: 'app', kind: ExtensionKind.Component}, 
    output: [coreThemeRef],
})


export {
    ThemeBlueprint, 
    coreThemeRef
}