

import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import {createExtensionBluePrint, createExtensionInputNode, rootComponentRef } from "@plugger/extension"
import { appLayoutRef } from './AppLayoutBlueprint'
import { AppRouter} from "@plugger/routing";
import { routeResolverDataRef } from "./RoutesBlueprint";
import { themeRef } from "./ThemeBlueprint";

createTheme


const AppBlueprint = createExtensionBluePrint({
    kind: 'app',
    namespace: 'app',
    name: 'app',
    attachToo: {namespace: 'root', name: 'app', kind: 'component'}, 
    output: [rootComponentRef],
    input: {
        app: createExtensionInputNode({ref: appLayoutRef}),
        routeResolver: createExtensionInputNode({ref: routeResolverDataRef}), 
        theme: createExtensionInputNode({ref: themeRef})
    },
    provider: ({input, config}) => {
        const AppRoot = () => {
            const App = input.app;

            const theme = input?.theme || createTheme();
              
            return (
                <ThemeProvider theme={theme}>
                    <AppRouter resolver={input.routeResolver}>
                        <App/>    
                    </AppRouter>
                </ThemeProvider>
        ) }  
        return [
        rootComponentRef.with(AppRoot), 
    ]}

})

/**
                <AppRouter resolver={input.routeResolver}>
                    <App/>    
                </AppRouter>
 */



export {
    AppBlueprint
}