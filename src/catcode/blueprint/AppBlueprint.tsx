

import React, { ReactElement } from "react";
import {createExtensionBluePrint, createExtensionDataRef, createExtensionInputNode, rootComponentRef } from "@plugger/extension"
import { appLayoutRef } from './AppLayoutBlueprint'
import { AppRouter, RouteResolver, RouteResolverProvider } from "@plugger/routing";
import { routeResolverDataRef } from "./RoutesBlueprint";
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom'

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
    provider: ({input, config}) => {
        const AppRoot = () => {
            const App = input.app;
              
            return (
                <BrowserRouter>
                <RouteResolverProvider resolver={input.routeResolver}>
                <App/>    
                </RouteResolverProvider>
                </BrowserRouter>
        ) }  
        return [
        rootComponentRef.with(AppRoot), 
    ]}

})

/**
                 <nav>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                </nav>
                <Routes>
                  <Route path="/" element={<div>Home Page</div>} />
                  <Route path="/about" element={<div>About Page</div>} />
                </Routes>
 */


export {
    AppBlueprint
}