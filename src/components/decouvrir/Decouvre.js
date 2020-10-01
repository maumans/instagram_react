import React, {useEffect} from "react";
import Header from "../Header";
import "../../css/decouvre.css"
import insta1 from "../../BACKGROUND IMAGE/alabama-hills-nick-harrington-large@2x.jpg";
import insta2 from "../../BACKGROUND IMAGE/annapurna-nixon-osckar-large@2x.jpg";
import insta3 from "../../BACKGROUND IMAGE/cloud-mountain-tapanuth-termboonvanich-large@2x.jpg";
import insta4 from "../../BACKGROUND IMAGE/crater-lake-livid-narwhal-large@2x.jpg";
import insta5 from "../../BACKGROUND IMAGE/dead-horse-ryan-wright-large@2x.jpg"
import insta6 from "../../BACKGROUND IMAGE/diamond-beach-iurie-belegurschi-large@2x.jpg"
import insta7 from "../../BACKGROUND IMAGE/el-nido-cris-tagupa-large@2x.jpg"
import insta8 from "../../BACKGROUND IMAGE/fenghuang-ancient-town-theodor-lundqvist-large@2x.jpg"
import insta9 from "../../BACKGROUND IMAGE/prada-marfa-thomas-hammer-large@2x.jpg"
import DecouvreImg from "./DecouvreImg";
import {useParams} from "react-router-dom"




export default function Decouvre() {
    let {mau,style}= useParams();
    useEffect(()=>{
        alert(mau)
    })
    const divImg=()=>
    {
        const divImg=[];
        const img=[insta1,insta2,insta3,insta4,insta5,insta6,insta7,insta8,insta9]
        let j=0;
        for (let i=0;i<6;i++)
        {
            if (j===9)j=0;
            divImg.push(
                <div key={i} className="d-flex mb-md-4 mb-sm-2 mb-1">
                    <div key={i+j} style={{flex:1}}  className="mr-md-4 mr-sm-2 mr-1">
                        <DecouvreImg src={img[j++]}/>
                    </div>

                    <div className="d-flex" style={{flex:2}}>
                        <div key={i+j}>
                            <DecouvreImg src={img[j++]}/>
                        </div>
                        <div key={i+j} className="ml-md-4 ml-sm-2 ml-1">
                            <DecouvreImg src={img[j++]}/>
                        </div>
                    </div>
                </div>
            );
        }
        return divImg;
    }

    return(
        <div>
            <Header/>
            <div className="mt-5  container-md pt-md-5 pt-sm-5 pt-3">
               <div>
                   <div className="d-flex mb-sm-4 mb-sm-2 mb-1">
                       <div style={{flex:1}}>
                          <div className="mb-md-4 mb-sm-2 mb-1">
                             <DecouvreImg src={insta1}/>
                          </div>
                           <div>
                               <DecouvreImg src={insta2}/>
                           </div>
                       </div>
                       <div className="ml-md-4 ml-sm-2 ml-1" style={{flex:2}}>
                           <DecouvreImg src={insta3}/>
                       </div>
                   </div>
                   {
                       divImg()
                   }


               </div>
            </div>


        </div>
    )

}
