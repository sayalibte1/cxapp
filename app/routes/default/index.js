import { Button} from "cx/widgets";
import controller from "./controller";
import ItemController from "./ItemController";
import "./style.scss"

export default (
    <cx>
        <div className="main-div" controller={controller}>
            <h3 className="heading">WELCOME TO COVID TEST APPLICATION</h3>
            <div className="welcomeimg"></div>
            
        </div>
    </cx>
);
