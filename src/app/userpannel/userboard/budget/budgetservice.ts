import { Injectable, OnInit } from "@angular/core";
import { apiService } from "app/shared/service/api.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class Budgetservice implements OnInit{
public objBudgetItem: BudgetItemVM;
createbudgetCategory_url= 'BudgetCategory/createupdatebudgetcategory';
budgetItemApi_url= 'BudgetItem/createupdatebudgetitem';
myBudgetItem_url= 'BudgetItem/mybudgetitems';
constructor(public apiservice: apiService){
this.objBudgetItem = new BudgetItemVM();
this.objBudgetItem.pendingAmount = this.objBudgetItem.finalCost-this.objBudgetItem.paidAmount;
}
ngOnInit(){

}
public createUpdateBudgetItem(): Observable<any> {
   return this.apiservice.postData(this.apiservice.serverPath+ this.budgetItemApi_url,this.objBudgetItem)
}
public createUpdateBudgetCategories(){
    return this.apiservice.postData(this.apiservice.serverPath+ this.createUpdateBudgetCategories,'');
}
public getMybudgetItems(categoryId){
    return this.apiservice.postData(this.apiservice.serverPath+ this.myBudgetItem_url+'?BudgetCategoryId='+categoryId,'');
}

}
export class BudgetItemVM{
    public budgetItemId:number;
    public name: string
    public estimatedCost:number;
    public finalCost:number;
    public paidAmount:number;
    public pendingAmount:number;
    public budgetCategoryId:number;
    }