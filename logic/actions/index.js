import * as name from "./actionName";


export const test = (data) =>{
    console.log("tett2",data);
    return{
        type: name.TEST,
        mobile:data
    }
}


