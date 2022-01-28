import * as React from "react";
import { Vscode } from "../../components/apps/vscode";
import { About } from "../../components/apps/about";
import { Msn } from "./msn";
import { Notepad } from "./notepad";
import { Cards } from "./cards";
import { Mail } from "./mail";
import { Resume } from "./resume";
import thispc from '../../assets/ui/icons/shell32.png';
import bin from '../../assets/ui/icons/recyclebin.png';
import resume from '../../assets/ui/icons/github.png';
import aboutMe from '../../assets/ui/icons/about.png';
import vscode from '../../assets/ui/icons/vscode.png';
import mail from '../../assets/ui/icons/mail.png';
import msn from '../../assets/ui/icons/msn.png';
import notepad from '../../assets/ui/icons/notepad.png';
import cards from '../../assets/ui/icons/cards.png';

export const Apps = [
    {
        name : 'Desktop',
        app  : <div></div>,
        open : false,
        icon : thispc,
        type : 'desktop'
    },
    {
        name : 'Recycle Bin',
        app  : <div></div>,
        open : false,
        icon : bin,
        type : 'desktop'
    },
    {   
        name  : 'Vscode',
        app   : <Vscode key='vscodeApp' />,
        open  : false,
        icon  : vscode,
        type : 'desktop'
    },
    {   
        name  : 'About',
        app: <About key='aboutApp' />,
        open  : false,
        icon  : aboutMe,
        type : 'desktop'
    },
    {
        name : 'Resume',
        app  : <Resume />,
        open : false,
        icon : resume,
        type : 'desktop'
    },
    {
        name : 'Mail',
        app  : <Mail />,
        open : false,
        icon : mail,
        type : 'startmenu'
    },
    {
        name : 'Msn',
        app  : <Msn />,
        open : false,
        icon : msn,
        type : 'startmenu'
    },
    {
        name : 'Notepad',
        app  : <Notepad />,
        icon : notepad,
        type : 'startmenu'
    },
    {
        name : 'Cards',
        app  : <Cards />,
        icon : cards,
        type : 'startmenu'
    }
]