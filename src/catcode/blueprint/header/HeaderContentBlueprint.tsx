import React from 'react'
import { createExtensionBluePrint, createExtensionDataRef } from "@plugger/extension";



const headerContentRef = createExtensionDataRef();


const HeaderContentBlueprint = createExtensionBluePrint({
    namespace: 'app',
    name: 'header',
    kind: 'content',
    attachToo: {namespace: 'app', name: 'layout', kind: 'header'},
    output: [headerContentRef],
    provider: ({input, config, params}) =>{

        const DefaultContent = () => <div>content</div>

        const Content = params?.content || DefaultContent

        return [
            headerContentRef.with(Content)
        ]
    }
})


export {
    headerContentRef,
    HeaderContentBlueprint
}