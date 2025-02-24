import React, {useEffect} from "react";
import { createPlugin } from "@plugger/frontend-extension";
import { NavbarItemBlueprint, PageBlueprint, RouteBindBluePrint, navbarItemRef, } from "@plugger/frontend-blueprints";
import { createRouteRef , useRouteRef} from "@plugger/frontend-routing";

import { GitHub } from '@mui/icons-material';
//import {Rancher, ArgoCD} from '@plugger/frontend-components'
import {
    LinkBar
} from '@plugger/frontend-components'


const links = [
    { icon: <GitHub />, url: 'https://github.com', title: 'GitHub' },
    { icon: <GitHub />, url: 'https://argocd.mw.local', title: 'ArgoCD'}
]

const TestPage2 = () => {
return <>
<LinkBar links={links}/>

</>
}

const homePageRouteRef = createRouteRef();

const test2Page = PageBlueprint.make({
namespace: 'test', 
name: 'page',
kind: 'test2',
params: {
    page: TestPage2,
    routeRef: homePageRouteRef

}
})

const test2NavbarItem = NavbarItemBlueprint.make({
    namespace: 'navbar', 
    name: 'item',
    kind: 'route2',
params: {
    title: 'Home',
    routeRef: homePageRouteRef
}
})

const test2RouteBind = RouteBindBluePrint.make({
    namespace: 'navbar', 
    name: 'item2',
    kind: 'bind',
params: {
path: '/',
routeRef: homePageRouteRef
}  
})

const homePlugin = createPlugin({
id: 'home-page',
extensions: [
    test2Page,
    test2NavbarItem, 
    test2RouteBind
]
})

export {
    homePlugin
    
}