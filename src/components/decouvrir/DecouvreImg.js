import React, {useState} from "react";
import "../../css/decouvreImg.css"
import Header from "../Header";
import insta1 from "../../BACKGROUND IMAGE/alabama-hills-nick-harrington-large@2x.jpg";
import insta2 from "../../BACKGROUND IMAGE/annapurna-nixon-osckar-large@2x.jpg";
import insta3 from "../../BACKGROUND IMAGE/cloud-mountain-tapanuth-termboonvanich-large@2x.jpg";
import insta4 from "../../BACKGROUND IMAGE/crater-lake-livid-narwhal-large@2x.jpg";




export default function DecouvreImg(props) {
    const [modalShow,setModalShow]=useState(false);

    return(
       <div className="divImgDecouvre" onMouseEnter={()=>(setModalShow(true))}  onMouseLeave={()=>(setModalShow(false))}>
           <img src={props.src} alt="" className="imgDecouvre"/>
           <div className={modalShow?"divModal d-md-block d-sm-block d-none":"divModal d-none"}>
               <i className="fa fa-heart-o"/><span className="mx-2">120</span>
               <i className="fa fa-comment-o"/><span className="ml-2">36</span>
           </div>
           <div className={modalShow?"divFiltre d-md-block d-sm-block d-none":""}>

           </div>
       </div>
    )

}
