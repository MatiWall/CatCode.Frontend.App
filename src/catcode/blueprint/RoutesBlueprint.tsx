import React from 'react'
import { createExtensionBluePrint, createExtensionInputNode, createExtensionDataRef } from "@plugger/extension"

import {AppRouter, RouteResolver, Routes, createRoutableComponent, createRouteResolver} from '@plugger/routing'


const routeResolverDataRef = createExtensionDataRef();

const mountPointDataRef = createExtensionDataRef();
const mountPathDataRef = createExtensionDataRef();

const RouteResolverBlueprint = createExtensionBluePrint({
    kind: 'resolver',
    namespace: 'app',
    name: 'routing',
    attachToo: {namespace: 'app', name: 'app', kind: 'app'}, 
    output: [
        routeResolverDataRef
    ],
    input: {
        path: createExtensionInputNode({ref: mountPathDataRef, allowMultiple: true}),
        routeRef: createExtensionInputNode({ref: mountPointDataRef, allowMultiple: true}),
    },

    provider: ({input, config}) => {
        const paths = input.path;
        const routeRefs = input.routeRef;

        const routeResolver = createRouteResolver(); // Setting up global route resolver ensuring routes can be resolved at any point in the app.
        
        if (paths.length !== routeRefs.length){
            throw new Error('Number of paths and route refs are not equal.')
        }

        for (let i=0; i < paths.length; i++){
            routeResolver.addRoute(paths[i], routeRefs[i]);
        }



        return [
            routeResolverDataRef.with<RouteResolver>(routeResolver)
        ]
    }

})


const RouteBindBluePrint = createExtensionBluePrint({
    kind: 'bind',
    namespace: 'app',
    name: 'routing',
    attachToo: {namespace: 'app', name: 'routing', kind: 'resolver'}, 
    output: [
        mountPointDataRef,
        mountPathDataRef
    ],

    provider: ({input, config, params}) => {
        return [
            mountPathDataRef.with(params?.path),
            mountPointDataRef.with(params?.routeRef)
        ]
    }

})

export {
    RouteResolverBlueprint,
    routeResolverDataRef,

    RouteBindBluePrint
}