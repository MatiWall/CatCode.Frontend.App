import React, { ReactElement } from "react";
import { coreDataRef, createExtensionBluePrint, createExtensionDataRef, createExtensionInputNode } from "@plugger/extension"
import { coreNavbarRef } from "./NavbarBlueprint";
import { coreHeaderRef } from "./HeaderBlueprint";
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';

const appLayoutRef = createExtensionDataRef();

const navbarRef = createExtensionDataRef();
const headerRef = createExtensionDataRef();
const footerRef = createExtensionDataRef();
const contentRef = createExtensionDataRef();




const AppLayoutBlueprint = createExtensionBluePrint({
    namespace: 'app',
    name: 'app',
    kind: 'layout',
    attachToo: {namespace: 'app', name: 'app', kind: 'app'}, 
    output: [appLayoutRef],
    input: {
        navbar: createExtensionInputNode({ref: navbarRef}),
        header: createExtensionInputNode({ref: headerRef}),
        content: createExtensionInputNode({ref: contentRef}),
        footer: createExtensionInputNode({ref: footerRef})
    },
    provider: ({input, config}) => {
       return [
        appLayoutRef.with((
            <Box sx={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
            {/* Side Navbar (Drawer) */}
            <Drawer
                sx={{
                width: '240px',
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: '240px',
                    boxSizing: 'border-box',
                },
                }}
                variant="permanent"
                anchor="left"
            >
                {input.navbar || <Typography variant="body1" align="center">Sidebar</Typography>}
            </Drawer>

            <Box sx={{ 
                flexGrow: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                width: 'calc(100vw - 240px)', 
                marginLeft: '240px' 
                }}>
                <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    bgcolor: 'background.default',
                    display: 'flex',
                    flexDirection: 'column',
                }}
                >
                {/* Header */}
                <Box sx={{ width: '100%', position: 'sticky', top: 0, zIndex: 1 }}>
                    {input.header || <Typography variant="h6" align="center">Header</Typography>}
                </Box>

                {/* Main Content Area */}
                <Box sx={{ flexGrow: 1, mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {input.content || <Typography variant="body1" align="center" sx={{ border: '1px solid' }}>Main content</Typography>}
                </Box>
                </Box>

                {/* Footer */}
                <Box
                component="footer"
                sx={{
                    bgcolor: 'background.paper',
                    py: 2,
                    textAlign: 'center',
                }}
                >
                {input.footer || <Typography variant="body2">Footer</Typography>}
                </Box>
            </Box>
            </Box>

          ))
       ] 
    }
})


export {
    AppLayoutBlueprint, 
    appLayoutRef,
    navbarRef,
    headerRef,
    footerRef,
    contentRef
}