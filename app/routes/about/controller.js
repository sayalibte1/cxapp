import { Controller } from "cx/ui";
export default class extends Controller {
	onInit() {}
	findAge() {
        const name = this.store.get("$page.inputName");
        fetch(`https://api.agify.io/?name=${name}`)
            .then((response) => response.json())
            .then((response) => {
                this.store.set("$page.age", response.age);
                this.store.set("$page.name", response.name);
            });
    }
 
    findGender(){
        const name = this.store.get("$page.inputName");
        fetch(`https://api.genderize.io/?name=${name}`)
            .then((response) => response.json())
            .then((response) => {
                this.store.set("$page.gender", response.gender);
                this.store.set("$page.name", response.name);
            });
    }
}
