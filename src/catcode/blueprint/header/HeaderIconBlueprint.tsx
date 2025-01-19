import React from 'react'
import { createExtensionBluePrint, createExtensionDataRef } from "@plugger/extension";



const headerIconRef = createExtensionDataRef();


const HeaderIconBlueprint = createExtensionBluePrint({
    namespace: 'app',
    name: 'header',
    kind: 'icon',
    attachToo: {namespace: 'app', name: 'layout', kind: 'header'},
    output: [headerIconRef],
    provider: ({input, config, params}) =>{

        const DefaultIcon = () => <div>Plugger</div>

        const Icon = params?.icon || DefaultIcon

        return [
            headerIconRef.with(Icon)
        ]
    }
})


export {
    headerIconRef,
    HeaderIconBlueprint
}