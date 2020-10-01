import React, {Component} from "react";
import insta from "../img/téléchargement.jpg";

class Image extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        const imgstyle = {
            width:this.props.width?this.props.width:"60px",
            height:this.props.height?this.props.height:"60px"
        };
        return(
            <div>
                <img src={insta} alt="" className="rounded-circle" style={imgstyle}/>
            </div>
        )
    }

}
export default Image
