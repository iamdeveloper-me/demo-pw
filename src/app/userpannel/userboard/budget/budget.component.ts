import { Component, OnInit } from '@angular/core';
import { apiService } from 'app/shared/service/api.service';
import { Budgetservice, BudgetItemVM } from './budgetservice';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
  providers: [Budgetservice]
})
export class BudgetComponent implements OnInit {
  Budgetlist = []; 
  AddBudget = false;
  constructor(private apiService: apiService,public budgetservice: Budgetservice, public toaster: ToastrService) {
      this.getMyBudgetItems();
   }
 name: string 
  estimatedCost:string
  finalCost: string
  paidAmount:string
  pendingAmount: string
  budgetCategoryId:number
  expensesByCategory : any
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
                //BudgetItem
                this.apiService.getData(this.apiService.serverPath+'BudgetCategory/expensesbycategory').subscribe(data => {
                   console.log(data)
                  },
                    error => {
                    console.log(error)
                    }
                  )
                   this.apiService.postData(this.apiService.serverPath+'BudgetItem/mybudgetitems',{BudgetCategoryId:81}).subscribe(data => {
                    console.log(data);
                    this.expensesByCategory = data;
                   },
                     error => {
                     console.log(error)
                     }
                   )
  }
  closeModel(){
    this.AddBudget = false;
  }
  saveBudget(){
    this.budgetservice.createUpdateBudgetItem().subscribe(res=>{
      console.log(res.budgetItemId);
      debugger;
      if(this.budgetservice.objBudgetItem.budgetItemId==undefined || parseInt(res.budgetItemId) > this.budgetservice.objBudgetItem.budgetItemId){
        this.budgetservice.objBudgetItem = new BudgetItemVM();
        this.toaster.success(res.message,'Done !');
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
      console.log(res);
    })
  }
}
