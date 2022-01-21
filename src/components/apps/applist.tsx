import * as React from "react";
import { Vscode } from "../../components/apps/vscode";
import { About } from "../../components/apps/about";


export const Apps = [
    {   
        'name'  : 'vscode',
        'app': <Vscode/>,
        'open'  : false
    },
    {   
        'name'  : 'about',
        'app': <About/>,
        'open'  : true
    }
]