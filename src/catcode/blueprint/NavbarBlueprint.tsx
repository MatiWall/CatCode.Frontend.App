import React, { ReactElement } from "react";
import {createExtensionBluePrint, createExtensionDataRef, createExtensionInputNode } from "@plugger/extension"
import { navbarRef } from "./AppLayoutBlueprint";
navbarItemRef
import { 
    Box, 
    CssBaseline, 
    Toolbar,
    Divider, 
    Typography
} from "@mui/material";
import { navbarItemRef } from "./NavbarItemBlueprint";


const routeDataRef = createExtensionDataRef();
const routeItemRef = createExtensionDataRef();
const pageDataRef = createExtensionDataRef();

const toolDataRef = createExtensionDataRef();

const NavbarBlueprint = createExtensionBluePrint({
    namespace: 'app',
    name: 'navbar',
    kind: 'navbar',
    attachToo: {namespace: 'app', name: 'app', kind: 'layout'}, 
    output: [navbarRef],
    input: {
        routeItems: createExtensionInputNode({ref: navbarItemRef, allowMultiple: true}), 
        tools: createExtensionInputNode({ref: toolDataRef, allowMultiple: true})
    },
    provider: ({input, config}) =>{
        return [
            navbarRef.with(
              <Box>
                <CssBaseline/>
                <Toolbar></Toolbar>
                <Divider/>
                    <Toolbar sx={{p: 1}}>
                    <Typography>
                        {'Navbar' || input.routeItems}
                    </Typography>
                    </Toolbar>
                <Divider/>
                <Toolbar sx={{p: 1}}>
                    <Typography>
                        Tools
                    </Typography>
                    {input.tools}
                </Toolbar>
              </Box>
            )
        ]
    }
})


export {
    NavbarBlueprint
}