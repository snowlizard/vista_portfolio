export const currentWallpaper = (wallpaper: string) => {
    return {
        type: 'CHANGE_WALLPAPER',
        wallpaper
    }
}