# Vista Portfolio

windows vista inspired portfolio, I have no affiliation with Microsoft.
I wanted to make a unique portfolio to showcase my projects thus far.  
Although Windows Vista received a lot of hate initialy for poor performance  
and hardware incompability I have to say that between windows 7, 8 and 10  
Vista had the best looking UI.  

## Note
Since autoplay is disabled by default, you must click the page once on load  
to hear the windows vista boot chime. Not clicking the page will not cause any  
errors but the console will display a uncaught promise exception in relation to  
autoplay being disabled by default.  


## Features
>Modular Components for easy maintence and adding new features
>Interactable windows startmenu
>Add apps easily  

## Todo
Add working file explorer
Add recycle bin
add interactive volume control
add interactive wifi
add desktop widgets

## Running the project
Clone or download the repository
then open a terminal and cd into the directory cd /vista_portfolio  
run: <code>npm install</code>  
then: <code>npm run start</code> to run the project  
You can view the project in any web browser using the following address:  
<code>localhost:8080</code>   

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