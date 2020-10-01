import React from "react";
import Image from "./Image";

function Suggere(props) {
    return(
        <div className="small row mb-3">
            <div className="row ml-2">
                <Image width="35px" height="35px"/>
                <div className="my-auto ml-3">
                    <div>
                        <strong >{props.pseudo}</strong>
                    </div>
                    <div className="my-auto">
                        Debute sur Instagram
                    </div>
                </div>
            </div>

            <div className="ml-5">
                <a href="" className="text-decoration-none">S'abonner</a>
            </div>
        </div>
    )
}
export default Suggere
