import * as React from "react";
import { Vscode } from "../../components/apps/vscode";
import { About } from "../../components/apps/about";
import thispc from '../../assets/ui/icons/shell32.png';
import bin from '../../assets/ui/icons/recyclebin.png';
import github from '../../assets/ui/icons/github.png';
import aboutMe from '../../assets/ui/icons/about.png';
import vscode from '../../assets/ui/icons/vscode.png';

export const Apps = [
    {
        'name' : 'thispc',
        'app'  : <div></div>,
        'open' : false,
        'icon' : thispc
    },
    {
        'name' : 'bin',
        'app'  : <div></div>,
        'open' : false,
        'icon' : bin
    },
    {   
        'name'  : 'vscode',
        'app'   : <Vscode key='vscodeApp' />,
        'open'  : false,
        'icon'  : vscode
    },
    {   
        'name'  : 'about',
        'app': <About key='aboutApp' />,
        'open'  : false,
        'icon'  : aboutMe
    },
    {
        'name' : 'github',
        'app'  : <div></div>,
        'open' : false,
        'icon' : github
    }
]