interface actionObj {
    type: string,
    state: boolean
}

export const updateStartmenuState = (state: boolean = false, action: actionObj) => {
    switch (action.type){
        case 'OPEN':
            return action.state
        default:
            return state
    }
}