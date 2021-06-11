import React from 'react';
import { useParams } from "react-router";
export default function Item(){
    let {id}= useParams();
    return(<h1>Item Component{id}</h1>)
}