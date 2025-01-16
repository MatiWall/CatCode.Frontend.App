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

        const Navbar = () => (
            <Box>
            <CssBaseline/>
            <Toolbar></Toolbar>
            <Divider/>
                <Toolbar sx={{p: 1}}>
                <Typography>
                    {input.routeItems.map(Item => <Item/>) || 'Navbar'}
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

        return [
            navbarRef.with(Navbar)
        ]
    }
})


export {
    NavbarBlueprint
}