import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { expense } from "./expense";
import { DataService } from "./../services/data.service";
import { CategoryService } from "./../services/category.service";

@Component({
  selector: "app-add-expense",
  templateUrl: "./add-expense.component.html",
  styleUrls: ["./add-expense.component.css"]
})
export class AddExpenseComponent implements OnInit {
  inputDate;
  amount;
  category;
  description;

  // categoryArr = ["food", "bill", "grocery"];
  categoryArr;

  // expenseArr: Array<object> = new Array();

  constructor(
    private dataservice: DataService,
    private categoryservice: CategoryService
  ) {
    this.categoryArr = this.categoryservice.getOption();
  }

  ngOnInit() {}

  expenseAdded() {
    if (!this.description) {
      this.description = "";
    }
    let tempExpense: expense = new expense(
      this.inputDate,
      this.amount,
      this.category,
      this.description
    );
    //console.log(tempExpense);
    // this.expenseArr.push(tempExpense);

    this.dataservice.setOption(tempExpense);
    console.log(this.dataservice.getOption());
    alert("Expense Added !");
  }
}
