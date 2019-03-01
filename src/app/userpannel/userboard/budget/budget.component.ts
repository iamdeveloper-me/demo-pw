import { Component, OnInit } from '@angular/core';
import { apiService } from 'app/shared/service/api.service';
import { Budgetservice, BudgetItemVM, budgetCategoryVM } from './budgetservice';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { ToastrService } from 'ngx-toastr';
import { GuestserviceService } from '../guest/guestservice.service'

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
  providers: [Budgetservice]
})
export class BudgetComponent implements OnInit {
  Budgetlist = []; 
  AddBudget = false;
  expensesByCategory: any;
  categoryDailog = false;
  constructor(private apiService: apiService,public budgetservice: Budgetservice, public toaster: ToastrService,private _guestservice : GuestserviceService) {
    this.getMyBudgetItems();

    this.getBudgetCategoryList();

    this.getMyBudgetCategory();
    this.getMyBudgetItemsByCategory();

  }
  name: string; 
  estimatedCost:string;
  finalCost: string;
  paidAmount:string;
  pendingAmount: string;
  budgetCategoryId:number;
  estimatedCostTotal:number;
  finalCostTotal:number;
  paidAmountTotal:number;
  pendingAmountTotal:number;
  budgetCategory:any;
  budgetCategoryList = [];

  ngOnInit() {
    $("li").removeClass("user");
    $("#login").hide();
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
      });
    }
  }
  //BudgetItem

  getBudgetCategoryList(){

    this.apiService.getData(this.apiService.serverPath+'BudgetCategory/expensesbycategorycount').subscribe(data => {
      this.budgetCategoryList = data;
    });
  }

  budgetItemsCategoryList = [];
  getMyBudgetItemsByCategory(){

    this.apiService.getData(this.apiService.serverPath+'BudgetItem/mybudgetitemsbycategory').subscribe(data => {
      this.budgetItemsCategoryList = data;
      this.budgetItemsCategoryList.forEach(budgetItem => {
        budgetItem.finalCostTotal = budgetItem.budgetItems.reduce((sum, item) => sum + item.finalCost, 0);
        budgetItem.paidAmountTotal = budgetItem.budgetItems.reduce((sum, item) => sum + item.paidAmount, 0);
        budgetItem.pendingAmountTotal = budgetItem.budgetItems.reduce((sum, item) => sum + item.pendingAmount, 0);
      });
    });
  }

  pushBudgetlist(data){
    this.Budgetlist.push(data);
    console.log(this.Budgetlist);
  }

  getBudgetCategoryById(CategoryId){

    this.apiService.postData(this.apiService.serverPath+'BudgetItem/mybudgetitems',{BudgetCategoryId:CategoryId}).subscribe(data => {
      return data;
    },error => {
      console.log(error)
    })
  }

  closeModel(){
    this.AddBudget = false;
    this.categoryDailog = false;

  }

  onOptionsSelected(event){
    this.budgetservice.objBudgetItem.budgetCategoryId = event; //option value will be sent as event
  }

  saveBudget(){
    this.budgetservice.createUpdateBudgetItem().subscribe(res=>{
      console.log(res.budgetItemId);
      if(this.budgetservice.objBudgetItem.budgetItemId==undefined || parseInt(res.budgetItemId) > this.budgetservice.objBudgetItem.budgetItemId){
        this.budgetservice.objBudgetItem = new BudgetItemVM();
        this.toaster.success(res.message,'Done !');
        this.getMyBudgetItems();
        this.getBudgetCategoryList();
        this.closeModel();
      }else{
        this.toaster.error(res.message,'Error !');
      }
    });
  }

  editBudget(budgetObj){
    this.budgetservice.objBudgetItem = budgetObj;
  }

  getPendingAmount(){
   this.budgetservice.objBudgetItem.pendingAmount= this.budgetservice.objBudgetItem.finalCost-this.budgetservice.objBudgetItem.paidAmount;
  }
  
  getMyBudgetItems(){
    this.budgetservice.getMybudgetItems(0).subscribe(res=>{
      this.expensesByCategory = res;
      this.estimatedCostTotal = res.reduce((sum, item) => sum + item.estimatedCost, 0);
      this.finalCostTotal = res.reduce((sum, item) => sum + item.finalCost, 0);
      this.paidAmountTotal = res.reduce((sum, item) => sum + item.paidAmount, 0);
      this.pendingAmountTotal = res.reduce((sum, item) => sum + item.pendingAmount, 0);
    })
  }
  
  getMyBudgetCategory(){
    this.budgetservice.getMyBudgetCategory().subscribe(res=>{
      this.budgetCategory = res;
      console.log(this.budgetCategory);
    })
  }
  
  createUpdateBudgetCategory(){
    this.budgetservice.createUpdateBudgetCategories().subscribe(res=>{
      this.toaster.success(res.message,'Done !');
      this.getMyBudgetCategory();
      this.categoryDailog = false;
      this.budgetservice.objbudgetCategory = new budgetCategoryVM();
      
      this.getBudgetCategoryList();
      this.getMyBudgetItemsByCategory();
    },error=>{
      this.toaster.error(error,'Error !');
    })
  }

  editBudgetCategory(category){
    this.budgetservice.objbudgetCategory = category;
  }
}
