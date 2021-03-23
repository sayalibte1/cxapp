import {HtmlElement,TextField,Button} from "cx/widgets";
import controller from "./controller"
export default (
    <cx>
    <div controller={controller}>
        <TextField value-bind="$page.inputName" label="Name" required />
        {/* <Button text="Submit" onClick="findAge" /> */}
        <Button text="Submit" onClick={(e, {store, controller}) =>{
            controller.findAge();
            controller.findGender();
            // controller.getData();
        }} />
    </div>
    <div>
        <span text-bind="$page.name" />
        <span text-bind="$page.age" />
         <span text-bind="$page.gender"/> 
    </div>
    </cx>
    
);
