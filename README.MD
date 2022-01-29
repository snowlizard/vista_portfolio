# Vista Portfolio

windows vista inspired portfolio, I have no affiliation with Microsoft.

## Adding Apps
In order to add your own app to the portfolio create a file  
and Import the Window component and pass it a **title**  
and a react **component**. Please note that you are not  
limited to iframe components. You can pass in any react component  
you wish. Window component also has the prop idname which lets you  
use css to change the windows css attributes ie width, height etc..  
```
import * as React from "react";
import { Window } from "../subcomponents/window";

export const Notepad = () => {
    return (
        <Window title='Notepad'
        content={
            <iframe id="notepad" src='./notes/index.html'
            style={ {"border": "none"}}></iframe>
        }/>
    );
}
```
Then simply go to applist.tsx and import both your new component  
and the icon you wish to use. Add your new app to the applist  
Giving the app a type of desktop puts the new app on the desktop  
a type of startmenu puts the app in the start menu program list.
```
. . .
    {
        name : 'Notepad',
        app  : <Notepad />,
        icon : notepad,
        type : 'startmenu'
    },
```
### Important! The title you pass to window must be the same as the name you  
### use in app list
Apps are rendered in the order they appear on the applist  