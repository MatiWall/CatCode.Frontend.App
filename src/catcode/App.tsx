import { createApp } from "@plugger/frontend-app";
import {
    RootExtensionBluePrint, rootComponentRef,
} from "@plugger/frontend-extension";
import { EnvConfigLoader } from '@plugger/configuration-loader'
import {
    AppBlueprint,
    AppLayoutBlueprint,
    HeaderBlueprint,
    NavbarBlueprint,
    FooterBlueprint,
    RouteResolverBlueprint,
    AppRoutesBlueprint,
    NavbarTitleBlueprint,
    NavbarToolBlueprint,
    HeaderIconBlueprint
} from '@plugger/frontend-blueprints'
import { AppRouter, RouteResolverProvider } from '@plugger/frontend-routing'
import { BrowserRouter, useInRouterContext, Link } from 'react-router-dom'
import {
    plugin, testPage,
    testNavbarItem,
    testRouteBind,
    plugin2
} from './page'

import { ThemeProvider, createTheme } from "@mui/material";
/*
        testNavbarItem,
        testRouteBind,
        testPage,
        
        testNavbarItem2, 
        testPage2, 
        testRouteBind2 
  */

const app = createApp({
    rootExtensions: [
        RootExtensionBluePrint.make(),
        AppBlueprint.make({
            provider: ({ input, config }) => {
                const AppRoot = () => {
                    const App = input.app;

                    const theme = input?.theme || createTheme();

                    const Test = () => {
                        console.log(useInRouterContext())

                        return <Link to={'/'}></Link>
                    }

                    return (

                        <ThemeProvider theme={theme}>
                                <AppRouter resolver={input.routeResolver}>
                                    <App />
                                </AppRouter>
                        </ThemeProvider>


                    )
                }
                return [
                    rootComponentRef.with(AppRoot)
                ]
            }
        }),
        AppLayoutBlueprint.make(),
        HeaderBlueprint.make(),
        NavbarBlueprint.make(),
        FooterBlueprint.make(),
        RouteResolverBlueprint.make(),
        AppRoutesBlueprint.make(),
        NavbarTitleBlueprint.make({}),
        NavbarToolBlueprint.make({ kind: 'default' }),
        HeaderIconBlueprint.make()

    ],
    plugins: [
        plugin,
        plugin2
    ],
    configLoader: new EnvConfigLoader('APP_CONFIG')
});

const Root = app.createRoot();
export default Root