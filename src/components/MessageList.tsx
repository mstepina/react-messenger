import React from 'react'

import {style} from "./styles";
import { render } from '@testing-library/react';

export interface Message {
    image: string,
    date: Date,
    author: string,
    message: string
}

export type MessageList = Message[];

export interface Props {
    item: MessageList;
}


export let messList : MessageList = [
    {
        image:"https://image.flaticon.com/icons/svg/146/146025.svg",
        date: new Date (Date.UTC(2012, 11, 12, 3, 0, 0)),
        author: "Rita",
        message: "Henlo!"
    },
    {
        image:"https://image.flaticon.com/icons/svg/146/146025.svg",
        date: new Date (Date.UTC(2012, 11, 12, 3, 0, 0)),
        author: "Tofu",
        message: "Hey, frens!"
    }

]

export const messTestData: Props = {
    item: messList
}


export const MessComponent = (props: Props) => {   
    function formatDate(date: Date) {
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString(undefined, options).replace(/,/g, " ");
    
    } 
    return (
    <div className="message-list" style={style}>
        <ul>
            {props.item.map(p => {
                return (
                <li>
                    <p>{p.author}</p>
                    <p>{formatDate(p.date)}</p>
                    <p>{p.message}</p>
                </li>
                )
            })}
        </ul>
    </div>)
    }