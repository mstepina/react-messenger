import React from 'react';

import {style} from "./styles";

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
        date: new Date (Date.UTC(2020, 11, 13, 3, 0, 0)),
        author: "Rita",
        message: "Henlo!"
    },
    {
        name: 'Corgos',
        image:"https://image.flaticon.com/icons/svg/146/146025.svg",
        date: new Date (Date.UTC(2020, 11, 12, 3, 0, 0)),
        author: "Tofu",
        message: "Henlo! what are you doing silly billy wiille. You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box"
    }

]


export const taskTestData: Props = {
    item: dialogList
}


export const DialogsComponent = (props: Props) => {
    //console.log(typeof(props.item[0].date))   
    //console.log(props.item[0].date.valueOf()) 
    props.item.sort((a, b) => b.date.valueOf() - a.date.valueOf())


    
    function formatDate(date: Date) {
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString(undefined, options).replace(/,/g, " ");
    
    } 
    return (
    <div className="dialog-list">
        <h3 className="heading">Dialogs</h3>
            {props.item.map(p => {
                return (
                <div className="message-box">
                    <span id="icon"><img src={p.image} alt="userpic"/></span>
                    <div className="text">
                        <h5>{p.name}<span id="date">{formatDate(p.date)}</span></h5>
                        <p>{p.author}: <span id ="mess">{p.message}</span></p>
                    </div>
                    
                </div>
                )
            })}
    </div>)
    }
