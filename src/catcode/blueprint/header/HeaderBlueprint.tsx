

import React from "react";
import {createExtensionBluePrint, createExtensionDataRef, createExtensionInputNode } from "@plugger/extension"
import { headerRef } from "../AppLayoutBlueprint";
import { z } from 'zod'
import {
    Box, 
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
} from '@mui/material'

import { headerIconRef } from "./HeaderIconBlueprint";
import { headerContentRef } from "./HeaderContentBlueprint";

headerContentRef


const HeaderBlueprint = createExtensionBluePrint({
    namespace: 'app',
    name: 'layout',
    kind: 'header',
    attachToo: {namespace: 'app', name: 'app', kind: 'layout'}, 
    output: [headerRef],
    input: {
      icon: createExtensionInputNode({ref: headerIconRef}),
      content: createExtensionInputNode({ref: headerContentRef})
    },
    configSchema: z.object({
      
    }),
    provider: ({input, config, params}) => {

      const AppHeader = () => {
        const Icon = input.icon;
        const Content = input.content;


        return (
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    { Icon ? <Icon></Icon> : 'Icon'}
                  </Typography>
                  <Box>
                    {Content ? <Content/> : 'Add content using headerContentRef attached to app, layout, header'}
                  </Box>
                </Toolbar>
              </AppBar>
            </Box>
          );
        }


        
        const Header = params?.header || AppHeader;
        return [
            headerRef.with(Header)
        ]
    }
})


export {
    HeaderBlueprint
}