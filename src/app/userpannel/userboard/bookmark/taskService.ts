import { Injectable, OnInit } from "@angular/core";
import { apiService } from "app/shared/service/api.service";
import { Observable } from "rxjs";

@Injectable()
export class taskService implements OnInit{
createUpdateTaskUrl = 'ToDo/createupdatetodo'
myChecklistUrl = 'ToDo/mychecklist'
objTodoVm: toDoVm;
objMychecklistParam: myChecklistParams;
constructor(public apiService: apiService){
this.objTodoVm = new toDoVm();
this.objMychecklistParam = new myChecklistParams();

}
ngOnInit(){

}
public CreateUpdateTask(): Observable <any>{
    return this.apiService.postData(this.apiService.serverPath+this.createUpdateTaskUrl,this.objTodoVm);
}
public myCheckList(): Observable <any>{
    console.log(this.objMychecklistParam);
    return this.apiService.postData(this.apiService.serverPath+this.myChecklistUrl,this.objMychecklistParam);
}
}
export class toDoVm{
toDoId: number; name: string; timing: string; categoryId: number; notes: string; status: number; }
export class myChecklistParams{
    filter: number;
    categoryId: number;
    timing: string;
}