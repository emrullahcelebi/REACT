import { COUNTER_DOWN, COUNTER_SET, COUNTER_UP } from "../types"
import { counterInitialState } from "./counter-initial-state"


export const counterReducer = (state=counterInitialState,action) => { 
    if(action.type === COUNTER_UP){
        const newState = {...state, counter: state.counter+1}
        //olusturulan yeni state return edildiginde mevcut state guncellenmis olur
        return newState;
    }
    else if(action.type === COUNTER_DOWN){
        const newState = {...state, counter: state.counter-1}
        //olusturulan yeni state return edildiginde mevcut state guncellenmis olur
        return newState;
    }
    else if(action.type === COUNTER_SET){
        const newState = {...state, counter: action.payload}
        //olusturulan yeni state return edildiginde mevcut state guncellenmis olur
        return newState;
    }

    return state;/* bura onemli hicbir if e girmez ise state bilgisi kaybolmasin diye */
}