interface dataObj {
    [key: string] : any
}


export const updateBootState = (state: boolean = false, action: dataObj) => {
    switch (action.type){
        case 'CHANGE_STATE':
            return action.state
        default:
            return state
    }
}