import React, {useEffect} from "react";
import { createPlugin } from "@plugger/frontend-extension";
import { NavbarItemBlueprint, PageBlueprint, RouteBindBluePrint, navbarItemRef, } from "@plugger/frontend-blueprints";
import { createRouteRef , useRouteRef} from "@plugger/frontend-routing";

import { GitHub } from '@mui/icons-material';
//import {Rancher, ArgoCD} from '@plugger/frontend-components'
import {
    LinkBar,
    ArgoIcon,
    RancherIcon,
    GrafanaIcon,
    GitHubIcon,
    LinkItem
} from '@plugger/frontend-components'


const links = [
    { icon: <GitHubIcon />, url: 'https://github.com', title: 'GitHub' },
    { icon: <ArgoIcon />, url: 'https://argocd.mw.local', title: 'ArgoCD'},
    { icon: <ArgoIcon />, url: 'http://argo-workflow.mw.local', title: 'ArgoWorkFlow'},
    { icon: <RancherIcon />, url: 'https://rancher.mw.local', title: 'Rancher'},
    { icon: <GrafanaIcon />, url: 'http://grafana.mw.local', title: 'Grafana'}
]

const TestPage2 = () => {



return <>
<LinkBar>
    {links.map(link => <LinkItem sx={{width: '5rem', height: '5rem'}} url={link.url} title={link.title} icon={link.icon}/>)}
    </LinkBar>
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
    kind: 'bind2',
params: {
path: '/test',
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