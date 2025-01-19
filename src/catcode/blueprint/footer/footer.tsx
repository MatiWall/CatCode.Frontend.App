

import React from "react";
import {createExtensionBluePrint, createExtensionDataRef, createExtensionInputNode } from "@plugger/extension"
import { z } from 'zod'
import {
    Box,
    Divider
} from '@mui/material'
import { footerRef } from "../AppLayoutBlueprint";


const FooterBlueprint = createExtensionBluePrint({
    namespace: 'app',
    name: 'layout',
    kind: 'footer',
    attachToo: {namespace: 'app', name: 'app', kind: 'layout'}, 
    output: [footerRef],
    configSchema: z.object({
      
    }),
    provider: ({input, config, params}) => {

      const AppFooter = () => {

        return (
            <Box sx={{ }}>
                 <Divider/>
                Application setup using plugger
            </Box>
          );
        }


        
        const Footer = params?.header || AppFooter;
        return [
            footerRef.with(Footer)
        ]
    }
})


export {
    FooterBlueprint
}