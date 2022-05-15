import * as React from "react";
import { Vscode } from "../../components/apps/vscode";
import { Msn } from "./msn";
import { Notepad } from "./notepad";
import { Mail } from "./mail";
import { Resume } from "./resume";
import { FileExplorer } from "./fileExplorer";
import { Pokedex } from "./pokedex";
import { Weather } from "./weather";
import { Quizico } from "./quizico";
import thispc from '../../assets/ui/icons/shell32.png';
import bin from '../../assets/ui/icons/recyclebin.png';
import resume from '../../assets/ui/icons/github.png';
import vscode from '../../assets/ui/icons/vscode.png';
import mail from '../../assets/ui/icons/mail.png';
import msn from '../../assets/ui/icons/msn.png';
import notepad from '../../assets/ui/icons/notepad.png';
import pokeball from '../../assets/ui/icons/pokeball.png';
import sun from '../../assets/ui/icons/sun.png';
import quizico from '../../assets/ui/icons/quizico.png';

export const Apps = [
    {
        name : 'Desktop',
        app  : <FileExplorer />,
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
        name : 'Resume',
        app  : <Resume />,
        open : false,
        icon : resume,
        type : 'desktop'
    },
    {
        name : 'Weather',
        app  : <Weather />,
        open : false,
        icon : sun,
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
        open : false,
        icon : notepad,
        type : 'startmenu'
    },
    {
        name : 'Quizico',
        app  : <Quizico />,
        open : false,
        icon : quizico,
        type : 'startmenu'
    },
    {
        name : 'Pokedex',
        app  : <Pokedex />,
        open : false,
        icon : pokeball,
        type : 'startmenu'
    }
]