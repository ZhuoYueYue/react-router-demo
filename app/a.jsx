import React,{Component} from 'react'
import {Link} from 'react-router';
export  default  class  A extends Component{
  render(){
      return <div>
          A页面:
          chose bb
          <Link to='/bb'>bbbb</Link>
          chose aa
          <Link to='/aa'>aaaa</Link>
      </div>
  }
}