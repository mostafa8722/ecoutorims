import {TEST} from "../actions/actionName";

export  const test = (state=[],action)=>{
    console.log("tett3",action.type);
    console.log("tett2",state);
    switch (action.type) {
        case TEST :
            return [
                ...state,{

                    mobile:action.mobile,

                }
            ];
            break;

        default :
            return state ;
    }
}