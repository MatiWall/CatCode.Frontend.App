import React, { ReactElement } from "react";
import {createExtensionBluePrint, createExtensionDataRef, createExtensionInputNode } from "@plugger/extension"
import { navbarRef } from "../AppLayoutBlueprint";
import { 
    Box, 
    CssBaseline, 
    Toolbar,
    Divider, 
    Typography,
    useTheme,
    List
} from "@mui/material";
import { navbarItemRef } from "./NavbarItemBlueprint";
import { z } from 'zod';

const navbarToolDataRef = createExtensionDataRef();
const navbarTitleRef =  createExtensionDataRef();



const NavbarBlueprint = createExtensionBluePrint({
    namespace: 'app',
    name: 'navbar',
    kind: 'navbar',
    attachToo: {namespace: 'app', name: 'app', kind: 'layout'}, 
    output: [navbarRef],
    configSchema: z.object({
        itemsTopPadding: z.number().default(2)
    }),
    input: {
        routeItems: createExtensionInputNode({ref: navbarItemRef, allowMultiple: true}), 
        tools: createExtensionInputNode({ref: navbarToolDataRef, allowMultiple: true}),
        title: createExtensionInputNode({ref: navbarTitleRef})
    },
    provider: ({input, config}) =>{
        const TitleComponent = input?.title;
        const titleMsg = 'Add Title';
        
        const Navbar = () => {
            const theme = useTheme();
            return (
            <Box sx={{
                height: '100vh', 
                display: 'flex', 
                flexDirection: 'column',
                backgroundColor: theme.palette.primary.dark,
                color: theme.palette.primary.contrastText
                }}>
            <CssBaseline/>
            <Box sx={{p: 1, flexGrow: 1}}>
                <Toolbar>
                    { TitleComponent ? <TitleComponent/> : titleMsg }
                </Toolbar>
                <Divider/>
                <Toolbar sx={{p: 1, flexGrow: 1}}>
                    <List sx={{display: 'flex', flexDirection: 'column', marginTop: config.itemsTopPadding}}>
                        {input.routeItems.map((Item, idx) => <Item key={idx} />) || 'Navbar'}
                    </List>
                </Toolbar>
            </Box>
            <Divider/>
            <Toolbar sx={{p: 1}}>
                {input.tools.map((Tool, key) => <Tool key={key}></Tool>)}
            </Toolbar>
          </Box>
        )}
            
        return [
            navbarRef.with(Navbar)
        ]
    }
})


export {
    NavbarBlueprint,
    navbarTitleRef,
    navbarToolDataRef
}