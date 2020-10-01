import React,{Component} from "react";
import Header from "./Header";
import Stories from "./Stories";
import Publication from "./Publication";
import Suggestion from "./Suggestion";
import Image from "./Image";
import Caroussel from "./Caroussel";
import config from "./config";
import * as firebase from "firebase";
import app from 'firebase/app'
import img from '../BACKGROUND IMAGE/antelope_canyon_large@2x.jpg'
import '../css/publication.css'
import Modal from "react-bootstrap";

import insta from "../img/téléchargement.jpg";
import insta1 from "../BACKGROUND IMAGE/alabama-hills-nick-harrington-large@2x.jpg";
import insta2 from "../BACKGROUND IMAGE/annapurna-nixon-osckar-large@2x.jpg";
import insta3 from "../BACKGROUND IMAGE/cloud-mountain-tapanuth-termboonvanich-large@2x.jpg";
import insta4 from "../BACKGROUND IMAGE/crater-lake-livid-narwhal-large@2x.jpg";
import ImageStories from "./ImageStories";


class Accueil extends Component
{
    constructor(props) {
        super(props);
        this.state={
            personnage:[],
            trouve: false
        }

        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
        this.createObserver=this.createObserver.bind(this);
    }

    createObserver=(elem)=> {
    let observer;

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: [0,1]
    };

    observer = new IntersectionObserver((entries,observer)=>{
       entries.forEach((ent)=>{
           console.log(observer);
          if(ent.intersectionRatio>0)
          {
              this.setState({
                  trouve:true
              })
          }
          else
           {
               this.setState({
                   trouve:false
               })
           }

       })

    }, options);
    observer.observe(elem);
}

    componentDidMount() {
        this.createObserver(document.getElementById("divW"))
        const ref =firebase.database().ref('Personnage');

        ref.on('value',snapshot=>{
            this.setState({
                personnage:snapshot.val()
            })
        })

    }
    publications()
    {
        const publications=[]
        const img=[insta1,insta2,insta3,insta4]
        let j=0
        for (let i=0;i<20;i++)
        {
            publications.push( <Publication userImg={insta} pubImg={img[j++]} cl={i} sty={styles} />);
            if(j===4)j=0
        }
        return publications;
    }


    render() {
        return (
            <div>
                <Header/>
                <div id="d"  className="container-fluid pt-4 " style={{backgroundColor:"#f5f5f0"}} style={{marginTop:"60px"}} >
                   <div className="row offset-md-2 offset-sm-2">
                       <div className="col-md-7 col-sm-10">
                           <Stories/>
                           {
                               this.publications()
                           }
                       </div>
                       <Suggestion/>

                   </div>
                </div>

                <div id="divW" className="text-center" style={this.state.trouve?styles:null}>
                   <h1> MAU</h1>
                </div>

                <Caroussel/>
            </div>
        )
    }
}
const styles={
    animationName: "divPanim",
    backgroundColor: "white",
    animationDuration: "1s",
    animationFillMode: "forwards",
    fontSize:"13px"
}
export default Accueil;
