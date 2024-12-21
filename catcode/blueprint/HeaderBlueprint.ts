

import { ReactElement } from "react";
import { ExtensionKind, coreDataRef, createExtensionBluePrint, createExtensionDataRef, createExtensionInputNode } from "../extension"
import { coreRouteRef } from "../extension/CoreExtensionData";
import { coreNavbarItemRef } from "./NavbarItemBlueprint";

const coreHeaderRef = createExtensionDataRef();


const HeaderBlueprint = createExtensionBluePrint({
    namespace: 'app',
    name: 'header',
    kind: ExtensionKind.Component,
    attachToo: {namespace: 'app', name: 'layout', kind: ExtensionKind.Component}, 
    output: [coreHeaderRef],
})


export {
    HeaderBlueprint, 
    coreHeaderRef
}