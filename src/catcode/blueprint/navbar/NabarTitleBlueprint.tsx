import React from "react";
import {createExtensionBluePrint } from "@plugger/extension"
import { 
    Typography
} from "@mui/material";
import { navbarTitleRef } from "./NavbarBlueprint";



const NavbarTitleBlueprint = createExtensionBluePrint({
    namespace: 'app',
    name: 'navbar',
    kind: 'title',
    attachToo: {namespace: 'app', name: 'navbar', kind: 'navbar'}, 
    output: [navbarTitleRef],
    input: {},
    provider: ({input, config, params}) =>{

        const DefaultNavbarTitle = () => (
                <Typography>
                    App Title. Please add a Title component to params.title.
                </Typography>
        )

        const NavbarTitle = params?.title || DefaultNavbarTitle 

        return [
            navbarTitleRef.with(NavbarTitle)
        ]
    }
})


export {
    NavbarTitleBlueprint
}