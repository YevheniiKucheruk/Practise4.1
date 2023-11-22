import React from "react";
import "./SideBar.css"
class SideBar extends React.Component{
    render(){
        return (<div className="sidebar">{this.props.text}</div>)
    }
}

export default SideBar