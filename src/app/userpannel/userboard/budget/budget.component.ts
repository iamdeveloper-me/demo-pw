import { Component, OnInit } from '@angular/core';
import { apiService } from 'app/shared/service/api.service';
@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  Budgetlist = []; 
  AddBudget = false;
  constructor(  private apiService: apiService,) { }
 name: string 
  estimatedCost:string
  finalCost: string
  paidAmount:string
  pendingAmount: string
  budgetCategoryId:number
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
                    this.Budgetlist = data;
                   },
                     error => {
                     console.log(error)
                     }
                   )


                   //api/BudgetCategory/createupdatebudgetcategory


                //   this.apiService.postData(this.apiService.serverPath+'BudgetCategory/createupdatebudgetcategory',{
                //     "budgetCategoryId": 0,
                //     "name": "Event"
                //   }).subscribe(data => {
                //     console.log(data)
                //    },
                //      error => {
                //      console.log(error)
                //      }
                //    )

                // this.apiService.postData(this.apiService.serverPath+'BudgetCategory/mybudgetcategory').subscribe(data => {
                //     console.log(data);
                //    },
                //      error => {
                //      console.log(error)
                //      }
                //    )
  }
  closeModel(){
    this.AddBudget = false;
  }
  budget_Add_form(a){
    console.log(a);
            this.apiService.postData(this.apiService.serverPath+'BudgetItem/createupdatebudgetitem',a.value).subscribe(data => {
                    console.log(data)
                   },
                     error => {
                     console.log(error)
                     }
                   )
  }


  //api/BudgetCategory/expensesbycategory
  //api/BudgetItem/createupdatebudgetitem
  //api/BudgetCategory/mybudgetcategory
}
