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
    path: '/',
    routeRef: testPageRouteRef
  }  
})




const TestPage2 = () => {
    return <div>test page 2</div>
}

const testPageRouteRef2 = createRouteRef();

const testPage2 = PageBlueprint.make({
    namespace: 'test', 
    name: 'page',
    kind: 'test2',
    params: {
        page: TestPage2,
        routeRef: testPageRouteRef2

    }
})

const testNavbarItem2 = NavbarItemBlueprint.make({
    namespace: 'app',
    name: 'routing',
    kind: 'route2',
    params: {
        title: 'Test Page',
        routeRef: testPageRouteRef2
    }
})

const testRouteBind2 = RouteBindBluePrint.make({
    kind: 'bind2',
    namespace: 'app',
    name: 'routing',
  params: {
    path: '/test2',
    routeRef: testPageRouteRef2
  }  
})



export {
    testPage,
    testNavbarItem,
    testRouteBind,


    testPage2,
    testNavbarItem2,
    testRouteBind2
}