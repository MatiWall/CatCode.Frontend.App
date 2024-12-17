import { ReactElement } from "react";
import { ExtensionKind, coreDataRef, createExtensionBluePrint, createExtensionDataRef, createExtensionInputNode } from "../extension"
import { coreRouteRef } from "../extension/CoreExtensionData";
import { coreNavbarRef } from "./NavbarBlueprint";
import { coreHeaderRef } from "./HeaderBlueprint";

const appLayoutRef = createExtensionDataRef();


const AppLayoutBlueprint = createExtensionBluePrint({
    namespace: 'app',
    name: 'layout',
    kind: ExtensionKind.Component,
    attachToo: {namespace: 'app', name: 'app', kind: ExtensionKind.Component}, 
    output: [appLayoutRef],
    input: {
        navbar: createExtensionInputNode({ref: coreNavbarRef}),
        header: createExtensionInputNode({ref: coreHeaderRef}),
        content: createExtensionInputNode({ref: coreDataRef.coreRoutesRef})
    }

})


export {
    AppLayoutBlueprint, 
    appLayoutRef
}