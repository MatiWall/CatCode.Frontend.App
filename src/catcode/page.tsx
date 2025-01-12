import React from "react";
import { createPlugin } from "@plugger/extension";
import { NavbarItemBlueprint, PageBlueprint, RouteBindBluePrint, } from "./blueprint";
import { createRouteRef } from "@plugger/routing";



const TestPage = () => {
    return <div>test page</div>
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
    }
})

const testRouteBind = RouteBindBluePrint.make({
  params: {
    path: 'test',
    routeRef: testPageRouteRef
  }  
})



const testPlugin = createPlugin({
    id: 'test',
    extensions: [
        testPage,
        testNavbarItem,
        testRouteBind
    ]
})


export {
    testPlugin,
    
    testPage,
    testNavbarItem,
    testRouteBind
}