'use strict';
import {TOCHINE,TOENGLISH} from './../actions/index';

let initState = "hello word";
export default function ch2en(state = initState,action) {
    switch (action.type){
        case TOCHINE:
            return action.payload.data;
        case TOENGLISH:
            return "hello word";
        default:
            return state;
    }
}
