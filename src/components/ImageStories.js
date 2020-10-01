import React, {Component} from "react";

class ImageStories extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const imgstyle = {
            width:"58px",
            height:"58px",
            margin:"2px"

        };
        return(
            <div className="p-2 pl-0" >
                <div className="border border-danger rounded-circle storiesBorder">
                    <img src={this.props.img} alt="" className="rounded-circle border" style={imgstyle}/>
                </div>
                <div className="d-flex justify-content-center" style={{fontSize:"12px"}}>
                    {this.props.name}
                </div>
            </div>
        )
    }

}
export default ImageStories
