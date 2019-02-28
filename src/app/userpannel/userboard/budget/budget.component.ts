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

    // this.getBudgetCategoryList();

    this.getMyBudgetCategory();

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
  // expensesByCategoryData = {};
  
  toggle = {};
  
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

  // getBudgetCategoryList(){

  //   this.apiService.getData(this.apiService.serverPath+'BudgetCategory/expensesbycategory').subscribe(data => {
  //     this.budgetCategoryList = data;
  //     this.budgetCategoryList.forEach(category => {
  //       console.log(category);
  //       this.budgetservice.getMybudgetItems(category.budgetCategoryId).subscribe(data=>{

  //         let  expenses_data = data;
  //         let  estimatedCostTotal = data.reduce((sum, item) => sum + item.estimatedCost, 0);
  //         let  finalCostTotal = data.reduce((sum, item) => sum + item.finalCost, 0);
  //         let  paidAmountTotal = data.reduce((sum, item) => sum + item.paidAmount, 0);
  //         let  pendingAmountTotal = data.reduce((sum, item) => sum + item.pendingAmount, 0);

  //         this.Budgetlist.push({category : category, expenses_data : expenses_data, estimatedCostTotal : estimatedCostTotal, finalCostTotal : finalCostTotal, paidAmountTotal : paidAmountTotal, pendingAmountTotal : pendingAmountTotal});

  //       });
  //     });

  //   });
  // }

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
        this.closeModel();
      }else{
        this.toaster.error(res.message,'Error !');
      }
    });
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
      // console.log(this.expensesByCategory);
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
      
    },error=>{
      this.toaster.error(error,'Error !');
    })
  }
}
