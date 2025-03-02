import { createApp } from "@plugger/frontend-app";
import {
    RootExtensionBluePrint,
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
import { catalogPlugin } from "@plugger/frontend-plugin-catalog";


import {homePlugin} from './pages'

const app = createApp({
    rootExtensions: [
        RootExtensionBluePrint.make(),
        AppBlueprint.make(),
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
        homePlugin,
        catalogPlugin
    ],
    configLoader: new EnvConfigLoader('APP_CONFIG')
});

const Root = app.createRoot();
export default Root