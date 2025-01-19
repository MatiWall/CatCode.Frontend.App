import React from 'react'
import { Link } from 'react-router-dom'

import {coreDataRef, createExtensionBluePrint, createExtensionDataRef, createExtensionInputNode } from "@plugger/extension"
import { useRouteRef } from '@plugger/routing';
import { useTheme } from '@emotion/react';
import { ListItem, ListItemText } from '@mui/material'
const navbarItemRef = createExtensionDataRef();

const NavbarItemBlueprint = createExtensionBluePrint({
    namespace: 'app',
    name: 'routing',
    kind: 'route',
    attachToo: { namespace: 'app', name: 'navbar', kind: 'navbar' },
    output: [navbarItemRef],
    provider: ({ input, config, params }) => {



        const Item = () => {
            const routeGenerator = useRouteRef(params?.routeRef);
            if (!routeGenerator) {
                return <span>Invalid Route</span>;
            }
            
            const theme = useTheme();
            
            return (
                <ListItem 
                    sx={{
                        color: theme.palette.primary.contrastText,
                        "&:hover": {
                            color: "inherit", // Disable color change on hover
                            
                            fontWeight: "bold"
                        },
    
                    }}
                    component={Link}
                    to={routeGenerator()}

                    >
                        <ListItemText 
                            primary={params?.title || 'Unnamed Link'}
                            sx={{
                                "& .MuiTypography-root": {
                                    "&:hover": {
                                        color: theme.palette.primary.light, // Ensure bold text on hover
                                    },
                                },
            
                            }}    
                        />
                </ListItem>
            );
        };

        return [
            navbarItemRef.with(Item)
        ];
    }
});

export {
    NavbarItemBlueprint, 
    navbarItemRef
}