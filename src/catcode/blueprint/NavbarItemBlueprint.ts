import { ExtensionKind, coreDataRef, createExtensionBluePrint, createExtensionDataRef, createExtensionInputNode } from "../extension"

const coreNavbarItemRef = createExtensionDataRef();


const NavbarItemBlueprint = createExtensionBluePrint({
    namespace: 'app',
    name: 'navbar',
    kind: ExtensionKind.Component,
    attachToo: {namespace: 'app', name: 'app', kind: ExtensionKind.Component}, 
    output: [coreNavbarItemRef],
})


export {
    NavbarItemBlueprint, 
    coreNavbarItemRef
}