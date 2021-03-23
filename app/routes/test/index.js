import {HtmlElement, TextField,Button, Section, Grid,Checkbox, Radio, NumberField, ValidationGroup} from "cx/widgets";
import "./style.scss"
import controller from "./testController"
export default (
   <cx>
       <div controller={controller}>
       <form onSubmit='onSubmit'>
         <ValidationGroup valid:bind="$page.valid">
           <TextField value-bind="$page.newData.fullName"
                  style="width: 30%"
                  autoFocus
                  label="Name"
                  required
                  ></TextField>
                  <NumberField value-bind="$page.newData.age"
                  style="width:30%"
                  required
                  label="Age"
                  ></NumberField>
                  <TextField value-bind="$page.newData.city"
                  style="width: 30%"
                  required
                  label="city"
                  ></TextField>
                  <div style="display:flex">
                    <div style="width: 33.33%">
                    <Radio label="Do you have cold?" value-bind="$page.newData.cold" text="Yes" option={true} />
                    <Radio value-bind="$page.newData.cold" text="No" option={false} default />
                    </div>
                    <div style="width: 33.33%">
                       <Radio label="Do you have fever?" value-bind="$page.newData.fever" text="Yes" option={true} />
                    <Radio value-bind="$page.newData.fever" text="No" option={false} default />
                    </div> 
                    <div style="width: 33.33%">
                    <Radio label="Do you have Throat infection?" value-bind="$page.newData.throat" text="Yes" option={true} />
                    <Radio value-bind="$page.newData.throat" text="No" option={false} default />
                    </div> 
                    </div> 
                    </ValidationGroup>
                  <Button className="submitbtn" mod="primary" onClick="onSubmit" disabled-expr="!{$page.valid}" >Submit</Button>
                 
       </form>
       <div>
           <Section>
           <Grid records:bind='$page.records'
      style={{width: "100%"}}
      columns={[
      { header: 'Name', field: 'fullName', sortable: true, field:"fullName" ,tpl: '{$page.records.fullName} ' },
      { header: 'Age',  field: 'age', sortable: true,  tpl: '{$page.newData.age} ' },
      { header: 'city', field: 'city', sortable: true,  tpl: '{$page.newData.city} ' },
      { header: 'Cold status', field: 'cold', sortable: true, 
        items: (<cx>
          <TextField mode="view" value-expr="{$record.cold} ? 'Yes' : 'No'" />
        </cx>)
      },
      { header: 'Fever status', field: 'fever', sortable: true,   items: (<cx>
        <TextField mode="view" value-expr="{$record.fever} ? 'Yes' : 'No'" />
      </cx>) },
      { header: 'Throat status', field: 'throat', sortable: true,   items: (<cx>
        <TextField mode="view" value-expr="{$record.throat} ? 'Yes' : 'No'" />
      </cx>) },
      {
        header: 'Actions', items: <cx>
        <Button data-id-bind='$page.newData.id' onClick="removeRecord">Delete
        </Button>
    </cx>
    }, {
      header: 'Condition',
      field: "condition"
    }
   ]}
  //  selection={{type: KeySelection, bind:'$page.selection'}}
/>
 
           </Section>
       </div>
       </div>
  </cx>
);
