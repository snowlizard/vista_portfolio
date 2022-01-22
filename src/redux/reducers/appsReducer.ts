import { Apps } from "../../components/apps/applist";

interface obj {
    [key: string] : any
}


export const updateAppState = ( state: Array<any> = Apps, action: obj) => {
    switch(action.type){
        case 'OPEN_STATUS':
            return state.map( (item) => {
                if(item.name !== action.app.name) return item
                return {
                    ...item,
                    open: action.app.open
                }
            })
        default: return state
    }
}