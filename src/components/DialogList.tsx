import React from 'react';

import {style} from "./styles";
import { userInfo } from 'os';

export interface Dialog {
    name: string,
    image: string,
    date: Date,
    author: string,
    message: string
}

export type DialogList = Dialog[];

export interface Props {
    item: DialogList;
}

export let dialogList : DialogList = [
    {
        name: 'Shoobsters',
        image:"https://image.flaticon.com/icons/svg/146/146025.svg",
        date: new Date ("29/04/2020"),
        author: "Rita",
        message: "Henlo!"
    },
    {
        name: 'Corgos',
        image:"https://image.flaticon.com/icons/svg/146/146025.svg",
        date: new Date ("30/04/2020"),
        author: "Tofu",
        message: "Henlo!"
    }

]


function List(props: Props) {

}

export const taskTestData: Props = {
    item: dialogList
}

// export const taskTestData2: Dialog = {
//     name: 'Shoobsters',
//     image:"https://image.flaticon.com/icons/svg/146/146025.svg",
//     date: new Date ("29/04/2020"),
//     author: "Rita",
//     message: "Henlo!"
// }

export const TaskComponent = (props: Props) => {
   
    //let arr = [];
    /*
    return <div style={style}>
            {props.item[0].name}
            <div style={style}>
                {props.item[0].date}
              </div>
            </div>
      */  
    //);
        /*
        arr.push(dialogList[i].image);
        arr.push(dialogList[i].name);
        arr.push(String(dialogList[i].date));
        arr.push(dialogList[i].author);
        arr.push(dialogList[i].message);
    */


    
    return (<div style={style}>
        {props.item[0].name}
        <br/>
        <div>
        {props.item[0].author}
        </div>
    </div>)
    
}
