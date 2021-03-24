import { Controller } from "cx/ui";
export default class extends Controller {
	onInit() {
        async function fetchData(){
            const response=await fetch('https://api.github.com/users');
            const users = await response.json();
            return users;
        }
        let a=fetchData();
        a.then(data => {
            // validation
            this.store.set("$page.users", data);
        }).catch(err => {
            console.log(error)
        }) 
    }

    onSubmit(e, {store}){
    const newData = store.get("$page.newData")
    const records = store.get("$page.users");
    store.delete('$page.newData')
    
    store.set("$page.records", [...records, {
      id:newData.id,
      login:newData.login,
      type:newData.type
    }])
    }

    removeRecord(e,{store}) {
      store.delete("$record");
    }
}
