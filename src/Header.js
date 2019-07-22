import React,{Component} from 'react'
import {NavLink} from "react-router-dom";

class Header extends Component{
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Final Recipe</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><NavLink exact to={"/"}>홈</NavLink></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
