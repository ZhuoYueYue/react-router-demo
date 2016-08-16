import React,{Component} from 'react';
import {Link} from 'react-router';
import A from './a.jsx';
import  B from  './b.jsx';
export  default  class  AandB extends Component{
    render(){
        return <div>
            <A />
            <B />
        </div>
    }
}