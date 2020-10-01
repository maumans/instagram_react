import React, {Component} from "react";
import Image from "./Image";
import Suggere from "./Suggere";

class Suggestion extends Component{
    render() {
        return(
            <div className="col-md-4 d-sm-none d-md-block d-none position-fixed" style={{right:"1%"}}>
                <div className="row">
                    <Image/>
                    <div className="my-auto ml-3">
                        <div>
                            <strong >Maurice</strong>
                        </div>
                        <div>
                            Kvng_mau
                        </div>
                    </div>
                </div>
                <div className="mt-2 mb-3 row">
                    <div className="my-auto mr-3">Suggestion pour vous</div>
                    <div className="ml-5 my-auto">Voir tout</div>
                </div>
                <Suggere pseudo="chabi"/>
                <Suggere pseudo="stone"/>
                <Suggere pseudo="charles"/>
                <Suggere pseudo="monmortlaye"/>
                <Suggere pseudo="mory"/>

            </div>
        )
    }

}
export default Suggestion
