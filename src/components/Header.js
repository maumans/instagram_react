import React, {Component} from "react";
import insta from "../img/logo intagram.png"
import tele from "../img/téléchargement.jpg"
import RouteFunct from "./Route"
import {Link} from "react-router-dom";
import "../css/header.css"

class Header extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state={
            mau:"enfant"
        }
    }
    render() {
        const imgstyle = {
            width:"30px",
            height:"30px"

        };
        return(
            <div className="border-bottom fixed-top" style={{backgroundColor:"white"}}>
                <div className="offset-md-2">
                    <div className="row my-2 mx-0 p-0 ">
                        <div className="col-md-2 col-sm-2 col-4 m-md-auto offset-md-2">
                            <img src={insta} alt="" className="" style={{width:"100px"}}/>
                        </div>

                        <div className="col-md-3 col-sm-3 d-md-block d-sm-block d-none">
                            <input type="text" placeholder="search" className="form-control col-9"/>
                        </div>

                        <div className="row col-md-5 col-8 col-sm-7  my-auto">
                            <Link to="/accueil" class="linkClass">
                                <i className="fa fa-home fa-2x px-md-3 px-sm-3 px-2" />
                            </Link>


                            <i className="fa fa-paper-plane fa-2x px-md-3 px-sm-3 px-2" to="/message" />
                            <Link isActive={(match, location) => {if (!match)return false}} class="linkClass" to={"/decouvre/"+this.state.mau}>
                                <i className="fa fa-compass fa-2x px-md-3 px-sm-3 px-2"/>
                            </Link>
                            <i className="fa fa-heart-o fa-2x px-md-3 px-sm-3 px-2"/>
                            <i className="px-md-3 px-sm-3 pl-2"><img src={tele} alt="" style={imgstyle} className="rounded-circle"/></i>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
export default Header;
