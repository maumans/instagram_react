import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Accueil from "./Accueil";
import Caroussel from "./Caroussel";
import Decouvre from "./decouvrir/Decouvre";

export default function RouteFunct () {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Accueil} />

                <Route path="/accueil" exact component={Accueil}/>

                <Route path="/message" exact component={Caroussel}/>

                <Route path="/decouvre/:mau" exact component={Decouvre}/>

                <Route path="/notifications" exact component={Accueil}/>

                <Route path="/profil" exact component={Accueil}/>
            </Switch>

        </Router>
    )

}
