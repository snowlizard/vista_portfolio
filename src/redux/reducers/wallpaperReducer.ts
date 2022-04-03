import wideScreen7 from '../../assets/wallpaper/widescreen7.jpg';

interface obj {
    type: string,
    wallpaper: string
}

export const changeWallpaper = ( state: string = wideScreen7, action: obj) => {
    switch(action.type){
        case 'CHANGE_WALLPAPER':
            return action.wallpaper
        default: return state
    }
}