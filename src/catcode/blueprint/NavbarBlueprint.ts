import { ReactElement } from "react";
import { ExtensionKind, coreDataRef, createExtensionBluePrint, createExtensionDataRef, createExtensionInputNode } from "../extension"
import { coreRouteRef } from "../extension/CoreExtensionData";
import { coreNavbarItemRef } from "./NavbarItemBlueprint";

const coreNavbarRef = createExtensionDataRef();


const NavbarBlueprint = createExtensionBluePrint({
    namespace: 'app',
    name: 'navbar',
    kind: ExtensionKind.Component,
    attachToo: {namespace: 'app', name: 'app', kind: ExtensionKind.Component}, 
    output: [coreNavbarRef],
    input: {
        navbarItems: createExtensionInputNode({ref: coreNavbarItemRef, allowMultiple: true})
    }
})


export {
    NavbarBlueprint, 
    coreNavbarRef
}