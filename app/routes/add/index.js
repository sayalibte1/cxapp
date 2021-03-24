import {HtmlElement,TextField,Button,Grid, NumberField} from "cx/widgets";
 import controller from "./controller"
export default (
    <cx>
   <div controller={controller}> 
    <form onSubmit='onSubmit'>
        <NumberField 
        value-bind="$page.newData.id"
        label="Enter Id"
        required></NumberField>
        <TextField 
        value-bind="$page.newData.title"
        label="Enter Title"
        required></TextField>
        <Button mod="primary" 
        onClick="onAddEntry">Submit</Button>
    </form>

         <Grid records-bind='$page.users'
                style={{width: "100%"}}
                columns={[
                { header: 'ID', field:"id" ,},
                { header: 'Title', field:"title",},
                {
                   
                    header: "Actions",
                    items: (
                      <cx>
                          <Button 
                          onClick="removeRecord">Delete
                          </Button>
                      </cx>
                    )
                  },
                 
            ]}
           
        />
    </div>
    </cx>
    
);
