import IAccess from "../Access/IAccess"
import Access from "../Access/Access"

export default class connection{
    Access: IAccess =  null;
    
    constructor(){

    }

    private getAccessInsta(){
        this.Access = new Access();
    }

    create(){
        //TODO if Access == null --> getAccessInsta();
        //TODO create the method to call the create method in Access
    }
    read(){
        //TODO if Access == null --> getAccessInsta();
        //TODO create the method to call the read method in Access
    }
    update(){
        //TODO if Access == null --> getAccessInsta();
        //TODO create the method to call the update method in Access
    }
    delete(){
        //TODO if Access == null --> getAccessInsta();
        //TODO create the method to call the delete method in Access
    }

}