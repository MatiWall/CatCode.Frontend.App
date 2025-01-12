

import React, { ReactElement } from "react";
import {createExtensionBluePrint, createExtensionDataRef, createExtensionInputNode, rootComponentRef } from "@plugger/extension"
import { appLayoutRef } from './AppLayoutBlueprint'
import { AppRouter, RouteResolver } from "@plugger/routing";
import { routeResolverDataRef } from "./RoutesBlueprint";


const AppBlueprint = createExtensionBluePrint({
    kind: 'app',
    namespace: 'app',
    name: 'app',
    attachToo: {namespace: 'root', name: 'app', kind: 'component'}, 
    output: [rootComponentRef],
    input: {
        app: createExtensionInputNode({ref: appLayoutRef}),
        routeResolver: createExtensionInputNode({ref: routeResolverDataRef})
    },
    provider: ({input, config}) => [
        rootComponentRef.with<ReactElement>(
            <AppRouter resolver={input.routeResolver}>
                {input.app}
            </AppRouter>
            ), 
    ]

})


export {
    AppBlueprint
}