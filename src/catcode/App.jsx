import { createApp } from "@plugger/app";
import { 
    rootExtensionBluePrint,
    createExtension, 
    rootComponentRef, 
    createExtensionDataRef, 
    createExtensionInputNode,
    createPlugin
} from "@plugger/extension";
import { EnvConfigLoader } from '@plugger/configuration-loader'

import {z} from 'zod';
import { AppBlueprint } from "./blueprint/AppBlueprint";
import { AppLayoutBlueprint } from "./blueprint/AppLayoutBlueprint";
import { NavbarBlueprint } from "./blueprint/NavbarBlueprint";
import { RouteResolverBlueprint } from "./blueprint/RoutesBlueprint";
import {testNavbarItem, testRouteBind, testPage, testNavbarItem2, testPage2, testRouteBind2 } from "./page";
import { AppRoutesBlueprint } from "./blueprint/AppRoutes";



const app = createApp({
    rootExtensions: [
        rootExtensionBluePrint.make(),
        AppBlueprint.make(),
        AppLayoutBlueprint.make(),
        NavbarBlueprint.make(),
        RouteResolverBlueprint.make(),
        AppRoutesBlueprint.make(),

        testNavbarItem,
        testRouteBind,
        testPage,
        testNavbarItem2, testPage2, testRouteBind2 
    ],
    plugins: [
        //testPlugin
    ],
    configLoader: new EnvConfigLoader('APP_CONFIG')
});

const Root = app.createRoot();
export default Root