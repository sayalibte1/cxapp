import {Controller} from "cx/ui";
export default class extends Controller{
    onInit(){
        this.store.set("$page.records", []);
      async  function fetchList(){
            const response=await fetch('https://jsonplaceholder.typicode.com/posts')
            const users=await response.json();
            return users;
        }
        let a=fetchList();
        a.then(data=>{
            this.store.set("$page.users",data)
        }).catch(err=>{
            console.log(error)
        })
       
    }
    onAddEntry(e, {store}){
      const title = store.get("$page.newData.title")
      const id = store.get("$page.newData.id")
      store.delete('$page.newData')
    this.store.update("$page.users",users=>[{
      id:id,
      title: title
    }, ...users])
    }
          removeRecord(e, {store}) {
              store.delete("$record");
          }
}