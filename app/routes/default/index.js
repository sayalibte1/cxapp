import { Button,TextField,Grid} from "cx/widgets";
import controller from "./controller";
import "./style.scss"

export default (
    <cx>
      <div controller={controller}>
         <div >
        <form onSubmit='onSubmit'>
       
        <TextField value-bind="$page.newData.id"  label="ID"/>
        <TextField value-bind="$page.newData.login"  label="Name"/>
        <TextField value-bind="$page.newData.type"  label="Type"/>
       
        <Button text="Submit"
         onClick="onSubmit" 
        // onClick={(e, {store, controller}) =>{
        //     controller.findAge();
        //     controller.findGender();
        //     controller.getData();
        // }} 
        /> 
        
        </form>
        </div>
    <div>

         <Grid records-bind='$page.users'
                style={{width: "100%"}}
                columns={[
                { header: 'ID', field: 'id', sortable: true, tpl: '{$page.newData.id} '},
                { header: 'Name', field: 'login', sortable: true , tpl: '{$page.newData.login} '},
                { header: 'Type', field: 'type', sortable: true, tpl: '{$page.newData.type} '  },
                {
                    header: "Actions",
                    items: (
                      <cx>
                        <Button
                        onClick="removeRecord"
                        >
                          Remove
                        </Button> 
                      </cx>
                    )
                  }
            ]}
           
        />
    </div>
    </div>
    </cx>
);
