import React, {useEffect} from "react";
import { createPlugin } from "@plugger/frontend-extension";
import { NavbarItemBlueprint, PageBlueprint, RouteBindBluePrint, navbarItemRef, } from "@plugger/frontend-blueprints";
import { createRouteRef , useRouteRef} from "@plugger/frontend-routing";
import {Link, BrowserRouter} from 'react-router-dom';
import { ListItem, ListItemText, ListItemButton, ListItemIcon } from "@mui/material";
import {SideBarNavItem} from '@plugger/frontend-components'

const TestPage = () => {
    return <>
    <div>test</div>

    <Link to={'/'}>test page</Link>
    
    </>
}

const testPageRouteRef = createRouteRef();

const testPage = PageBlueprint.make({
    namespace: 'test', 
    name: 'page',
    kind: 'test',
    params: {
        page: TestPage,
        routeRef: testPageRouteRef

    }
})



const testNavbarItem = NavbarItemBlueprint.make({
    params: {
        title: 'Test Page',
        routeRef: testPageRouteRef
    }, 
    provider: ({ input, config, params }) => {

        const routeRef = params?.routeRef;
        const Icon = params?.icon;
        const title = params?.title;

        const Item = () => {

            const routeGenerator = useRouteRef(routeRef);
            if (!routeGenerator) {
                return <span>Invalid Route</span>;
            }
            return <SideBarNavItem icon={Icon} path={routeGenerator()} text={title} ></SideBarNavItem>
        };

        return [
            navbarItemRef.with(Item)
        ];
    }
})

const testRouteBind = RouteBindBluePrint.make({
  params: {
    path: '/',
    routeRef: testPageRouteRef
  }  
})

const plugin = createPlugin({
    id: 'test',
    extensions: [
        testPage,
        testNavbarItem, 
        testRouteBind
    ]
})




const TestPage2 = () => {
return <>
<div>test2</div>

</>
}

const test2PageRouteRef = createRouteRef();

const test2Page = PageBlueprint.make({
namespace: 'test', 
name: 'page',
kind: 'test2',
params: {
    page: TestPage2,
    routeRef: test2PageRouteRef

}
})

const test2NavbarItem = NavbarItemBlueprint.make({
    namespace: 'navbar', 
    name: 'item',
    kind: 'route2',
params: {
    title: 'Test Page 2',
    routeRef: test2PageRouteRef
}
})

const test2RouteBind = RouteBindBluePrint.make({
    namespace: 'navbar', 
    name: 'item2',
    kind: 'bind',
params: {
path: '/test2',
routeRef: test2PageRouteRef
}  
})

const plugin2 = createPlugin({
id: 'test2',
extensions: [
    test2Page,
    test2NavbarItem, 
    test2RouteBind
]
})

export {
    plugin,
    testPage,
    testNavbarItem,
    testRouteBind,

    plugin2
    
}