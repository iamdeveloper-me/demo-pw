import { Injectable, OnInit } from "@angular/core";
import { apiService } from "app/shared/service/api.service";
import { Observable } from "rxjs";
import { isThisHour } from "date-fns";

@Injectable()
export class taskService implements OnInit{
    createUpdateTaskUrl = 'ToDo/createupdatetodo';
    myChecklistUrl = 'ToDo/mychecklist';
    removeToDoUrl = 'ToDo/removetodo';
    categorieswithcountUrl = 'ToDo/categorieswithcount';
    objTodoVm: toDoVm;
    objMychecklistParam: myChecklistParams;
    timings:any;
    constructor(public apiService: apiService){
        this.objTodoVm = new toDoVm();
        this.objMychecklistParam = new myChecklistParams();
        this.timings = [
            {id:0, timing:'All'},
            {id:1, timing:'From 10 To 12 Months'},
            {id:2, timing:'From 07 To 09 Months'},
            {id:3, timing:'From 04 To 06 months'},
            {id:4, timing:'From 02 To 03 Months'},
            {id:5, timing:'Last Months'},
            {id:6, timing:'Two Weeks'},
            {id:7, timing:'Last Week'},
            {id:8, timing:'After The Wedding'}
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
        return this.apiService.deleteAction2(this.removeToDoUrl+ '?id='+id,'');
    }
       
    public categoriesWithCountTask(): Observable <any>{
        return this.apiService.getData(this.apiService.serverPath+this.categorieswithcountUrl);
    }
}
export class toDoVm{ toDoId: number; name: string; timing: string; categoryId: number; notes: string; status: number; }
export class myChecklistParams{ filter: number=1; categoryId: number; timing: string; }

