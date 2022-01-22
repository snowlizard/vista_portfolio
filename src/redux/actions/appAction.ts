export const appIsOpen = (app: object) => {
    return {
        type: 'OPEN_STATUS',
        app
    }
}