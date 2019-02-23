import { Injectable, OnInit } from "@angular/core";
import { apiService } from "app/shared/service/api.service";
import { Observable } from "rxjs";
import { isThisHour } from "date-fns";

@Injectable()
export class taskService implements OnInit{
createUpdateTaskUrl = 'ToDo/createupdatetodo';
myChecklistUrl = 'ToDo/mychecklist';
removeToDoUrl = 'ToDo/removetodo';
objTodoVm: toDoVm;
objMychecklistParam: myChecklistParams;
timings:any;
constructor(public apiService: apiService){
this.objTodoVm = new toDoVm();
this.objMychecklistParam = new myChecklistParams();
this.timings = [
    {id:1, timing:'From 10 to 12 months'},
    {id:2, timing:'From 07 to 09 months'},
    {id:3, timing:'From 04 to 06 months'},
    {id:4, timing:'From 02 to 03 months'},
    {id:5, timing:'Last months'},
    {id:6, timing:'Two Weeks'},
    {id:7, timing:'Last Week'},
    {id:8, timing:'After the Wedding'},
    {id:8, timing:'Real Wedding Shoot'}
]

}
ngOnInit(){

}
public CreateUpdateTask(): Observable <any>{
    return this.apiService.postData(this.apiService.serverPath+this.createUpdateTaskUrl,this.objTodoVm);
}
public myCheckList(): Observable <any>{
    return this.apiService.postData(this.apiService.serverPath+this.myChecklistUrl,this.objMychecklistParam);
}
public removeToDo(id): Observable<any>{
    return this.apiService.deleteAction(this.removeToDoUrl,{'id':id});
}
}
export class toDoVm{ toDoId: number; name: string; timing: string; categoryId: number; notes: string; status: number; }
export class myChecklistParams{ filter: number=1; categoryId: number; timing: string; }

