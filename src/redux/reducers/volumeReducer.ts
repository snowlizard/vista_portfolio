interface actionObj {
    type: string,
    state: boolean
}

export const volumeReducer = (state: boolean = false, action: actionObj) => {
    switch (action.type){
        case 'VOLUME_CONTROL':
            return action.state
        default:
            return state
    }
}