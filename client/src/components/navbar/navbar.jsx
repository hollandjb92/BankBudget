import React, { Component } from "react";
import "../navbar/navbar.css";
import {Route, Redirect } from "react-router-dom";
import Contact from "../../pages/contact_page/contact_page"




class Navbar extends Component {

    redirectContact()
    {
        console.log ("I got clicked")
        return (<Redirect  exact path="/contact" component={Contact} />);

    }


    render() {
        return (
            <div>
                <ul className = "ulBank " >
                    <li className = "liBank"><a className="active aBank" href="/home">Home</a></li>
                    <li className = "liBank"><a className="aBank" href="/about">About</a></li>
                    <li className = "liBank"><a className="aBank" href="/contact">Contact</a></li>
                    {/* <li className = "liBank"><a className="aBank" herf ="#contact" onClick={this.redirectContact} >Contact</a></li> */}
                    <li className = "liBank"><a className="aBank" href="/budget">Budget</a></li>
                </ul>
               
            </div>
            )
        }
    
    }
    
    export default Navbar;