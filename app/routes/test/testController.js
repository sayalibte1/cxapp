import { Controller } from "cx/ui";
import {Toast} from 'cx/widgets';
export default class IndexController extends Controller {
  init() {
    this.store.set("$page.records", []);
  }
  otherMethod() {
    console.log("test")
  }

  checkCondition(data, {store}) {
    return 'Infected'
  }

  // this.store.init(
  //   "$page.records",
  //   Array.from({ length: 100 }).map((v, i) => ({
  //     id: i + 1,
  //     fullName: casual.full_name,
  //     continent: casual.continent,
  //     browser: casual.browser,
  //     os: casual.operating_system,
  //     visits: casual.integer(1, 100)
  //   }))
  // );

  onSubmit(e, {store ,placement, mod}) {
    this.otherMethod()
    const newData = store.get("$page.newData")
    const records = store.get("$page.records");
    let condition = this.checkCondition(newData, {store})
  //   let toast = Toast.create({
  //     message: '$condition',
  //     placement: placement,
  //     mod: mod,
  //     timeout: 2000
  // });
  // toast.open(store);
    store.delete('$page.newData')
    if(newData.cold && newData.fever && newData.throat){
      condition = 'Infected'
      {
        
        <cx>
          {/* <Toast visible:bind="$page.toast.visible" preserveWhitespace>
    Yor are infected by COVID
    <Button icon="close" dismiss mod="condition" tooltip="Close"/>
</Toast> */}

        </cx>
      }
    } else if(newData.cold || newData.fever || newData.throat){
      condition = 'Suspect'
      
    }else{
      condition = 'Safe'
      
    }
    store.set("$page.records", [...records, {
      fullName: newData.fullName,
      age:newData.age,
      city:newData.city,
      cold:newData.cold,
      fever:newData.fever,
      throat:newData.throat,
      condition
    }])
    
  }
 
  removeRecord(e, {store}) {
    store.delete("$record");
  }
}



// export default{
//   onInit(){
   
//     // alert("test controller called")\
//     this.store.set("$page.records", []);
 
//   }
//   onSubmit(e, { store }){
//     event.preventDefault();
//     const newData = store.get("$page.newData")
//     const records = store.get("$page.records");
//     console.log(records,"test controller called")
//     store.set("$page.records", [...records, {
//       fullName: newData.fullName,
//       age:newData.age,
//       city:newData.city,
//       cold:newData.cold,
//       fever:newData.fever,
//       throat:newData.throat
//     }])
//     store.delete('$page.newrecord')
//   }
//   removeRecord(id) {
//     this.store.update(
//         '$page.records', 
//         records => records.filter(r => r.id != id)
//     );
//   }

    
// }