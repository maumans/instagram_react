import React, {Component} from "react";
import insta from "../img/téléchargement.jpg";
import insta1 from "../BACKGROUND IMAGE/antelope_canyon_large@2x.jpg";
import insta2 from "../BACKGROUND IMAGE/annapurna-nixon-osckar-large@2x.jpg";
import insta3 from "../BACKGROUND IMAGE/cloud-mountain-tapanuth-termboonvanich-large@2x.jpg";
import insta4 from "../BACKGROUND IMAGE/crater-lake-livid-narwhal-large@2x.jpg";



import ImageStories from "./ImageStories";
import {forEach} from "react-bootstrap/ElementChildren";

class Stories extends Component{
    constructor(props) {
        super(props);
        this.state={
            translation:0
        };
        this.translaterG=this.translaterG.bind(this);
        this.translaterD=this.translaterD.bind(this);
    }
    translaterG(e)
    {
        if(this.state.translation)
        {
            //var b= document.getElementById("m").offsetWidth;
            var t=this.state.translation+(106*9);

            this.setState({
                translation:t
            },()=>(this.state.translation))
        }
    }
    translaterD()
    {
        //var b= document.getElementById("m").offsetWidth;
        var t=this.state.translation-(106*9);

        this.setState({
            translation:t
        },()=>(this.state.translation))
    }
    imgDiv()
    {
        const imgList=[]
        for (let i=0;i<20;i++)
        {
            imgList.push( <ImageStories name="mau" img={insta}/>)
            imgList.push( <ImageStories name="pierre" img={insta1}/>)
            imgList.push( <ImageStories name="helene" img={insta2}/>)
            imgList.push( <ImageStories name="lucie" img={insta3}/>)
            imgList.push( <ImageStories name="junior" img={insta4}/>)
        }
        return imgList;
    }
    render() {
        return(
                <div className="border mb-4 overflow-hidden" style={{backgroundColor:"white"}}>
                   <div className="d-flex flex-row position-relative" style={{zIndex:"1"}}>
                       <div className="d-flex position-absolute m-auto " id="m" style={{top:"34%",zIndex:"2"}}>
                           <i className="fa fa-chevron-circle-left"  onClick={this.translaterG}/>
                       </div>
                       <div className="d-flex position-absolute m-auto " id="m" style={{top:"34%",right:"0%",zIndex:"2"}}>
                           <i className="fa fa-chevron-circle-right" onClick={this.translaterD}/>
                       </div>
                       <div className="d-flex" style={{transform:"translateX("+this.state.translation+"px)",transitionDuration: "1s",zIndex:"1"}}>

                           {
                                this.imgDiv()
                           }
                       </div>
                   </div>
                </div>
        )
    }
}
export default Stories
