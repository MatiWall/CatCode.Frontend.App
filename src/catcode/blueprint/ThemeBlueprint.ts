import { createTheme } from "@mui/material";

import {createExtensionBluePrint, createExtensionDataRef } from "@plugger/extension"

const themeRef = createExtensionDataRef();

const pluggerTheme = createTheme({
    
});

const ThemeBlueprint = createExtensionBluePrint({
    namespace: 'app',
    name: 'app',
    kind: 'theme',
    attachToo: {namespace: 'app', name: 'app', kind: 'app'}, 
    output: [themeRef],
    provider: ({input, config, params}) =>{
        
        const theme = params?.theme || pluggerTheme;
        
        return [
            themeRef.with(theme)
        ]
    }
})


export {
    ThemeBlueprint, 
    themeRef
}