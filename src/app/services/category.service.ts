import { Injectable } from "@angular/core";

@Injectable()
export class CategoryService {
  private categoryArr = [
    "Groceries",
    "Rent",
    "Clothing",
    "Medical Expenses",
    "Travel",
    "Electricity",
    "Internet",
    "General",
    "Services",
    "Maintainance"
  ];

  setOption(val) {
    // if local storage already contains the category array
    if (localStorage.getItem("ExpensesCategoryArray")) {
      this.categoryArr = JSON.parse(
        localStorage.getItem("ExpensesCategoryArray")
      );
      this.categoryArr.push(val);
      localStorage.setItem(
        "ExpensesCategoryArray",
        JSON.stringify(this.categoryArr)
      );
    }
    // if this is first visit, then set local storage with the category array
    else {
      this.categoryArr.push(val);
      localStorage.setItem(
        "ExpensesCategoryArray",
        JSON.stringify(this.categoryArr)
      );
    }
  }

  getOption() {
    if (localStorage.getItem("ExpensesCategoryArray")) {
      // if category array exists in local storage, fetch from there
      // console.log(localStorage.getItem("ExpensesCategoryArray"));
      return JSON.parse(localStorage.getItem("ExpensesCategoryArray"));
    } else {
      // if category array does not exist in local storage, return local array
      // console.log(this.categoryArr);
      // localStorage.setItem(
      //   "ExpensesCategoryArray",
      //   JSON.stringify(this.categoryArr)
      // );
      return this.categoryArr;
    }
  }
}
