import React, {Component} from "react";
import tele from "../BACKGROUND IMAGE/alabama-hills-nick-harrington-large@2x.jpg";
import insta from "../img/téléchargement.jpg";
import Commentaire from "./Commentaire";
//import "../css/publication.css"
import Modal from "react-bootstrap/cjs/Modal";
class Publication extends Component{
    constructor(props) {
        super(props);
        this.state={
            trouve: false,
            voirPlus:false,
            show:false,
        }
        this.createObserver=this.createObserver.bind(this);
        this.closeModal=this.closeModal.bind(this);
        this.showModal=this.showModal.bind(this);
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
                else this.setState({trouve:false})


            })

        }, options);
        observer.observe(elem);

    }
    componentDidMount() {
        this.createObserver(document.getElementById(this.props.cl))
    }

    com(description){
        var a="";
        for(let i=0; i< (this.state.voirPlus?description.length:140) ;i++)
        {
            a=a+description[i]
        }
        return(a)
    }

    closeModal()
    {
        this.setState({
            show:false
        })
    }
    showModal()
    {
        this.setState({
            show:true
        })
    }

    render() {
        const imgstyle = {
            width:"40px",
            height:"40px"

        };

        const description="React est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page HTML à chaque changement d'état";
        return(
                <div className="card mb-4" id={this.props.cl} style={this.state.trouve?this.props.sty:stylesP} >
                        <div className="card-title mt-2 d-flex justify-content-between">
                           <div className="d-flex">
                               <div className="p-1 pl-3">
                                   <img src={this.props.userImg} alt="" className="rounded-circle" style={imgstyle}/>
                               </div>
                               <div className=" p-2">
                                   <strong>Maurice</strong>
                               </div>
                           </div>
                            <div className="my-auto p-3 d-flex publicationModalBtn" onClick={()=>(this.showModal())}>
                                <div/>
                                <div/>
                                <div/>
                            </div>

                            <Modal show={this.state.show} onHide={()=>(this.closeModal())}
                                   dialogClassName="modal-20w"
                                centered>
                               <Modal.Body class={"d-flex flex-column text-center modalDiv"}>
                                   <div className="py-md-3 py-sm-3 py-1 font-weight-bold text-danger">Report</div>
                                   <div className="py-md-3 py-sm-3 py-1 font-weight-bold text-danger">Se desabonner</div>
                                   <div className="py-md-3 py-sm-3 py-1">Acceder à la publication</div>
                                   <div className="py-md-3 py-sm-3 py-1">Partager</div>
                                   <div className="p-sm-2 py-sm-3 py-1">Copier le lien</div>
                                   <div className="py-md-3 py-sm-3 py-1">Integrer</div>
                                   <div className="py-md-3 py-sm-3 py-1">Annuler</div>
                               </Modal.Body>

                            </Modal>


                        </div>
                        <img src={this.props.pubImg} className="card-img img-fluid" alt=""/>

                        <div className="card-body">
                                <div className="clearfix">
                                    <div className="float-left p-0 pl-2">
                                        <i className="fa fa-heart-o fa-2x pr-3 "/>
                                        <i className="fa fa-comment-o fa-2x pr-3"/>
                                        <i className="fa fa-paper-plane fa-2x pr-3"/>

                                    </div>
                                    <div className="float-right">
                                        <i className="fa fa-bookmark-o fa-2x pr-3"/>
                                    </div>
                                </div>
                            <div className="my-2 p-0">
                                <strong className="">200 J'aime</strong>
                            </div>
                            <div >
                                <strong className="mr-1">Maurice</strong>
                                {
                                    this.state.voirPlus?this.com(description):null
                                }
                                <text className={!this.state.voirPlus?"d-block voirPlus":"d-none voirPlus"}>
                                    {this.com(description)}
                                    <span className={"voirPlusText"} onClick={()=>(this.setState({voirPlus:true}))}>...voir plus</span>
                                </text>
                            </div>
                            <div>
                                <p>Afficher les 10 autres commentaires</p>
                            </div>
                            <Commentaire/>
                        </div>
                        <div className="card-footer border-top" style={{backgroundColor:"white"}}>
                            <input type="text" placeholder="Ajouter un commentaire..." className=" border-0" style={{outline:"none"}} />
                            <div className="float-right">
                                <a href="" className="text-decoration-none">Publier</a>
                            </div>
                        </div>
                </div>

        )
    }

}
const stylesP={
    transform: 'scale(0)'
}
export default Publication
