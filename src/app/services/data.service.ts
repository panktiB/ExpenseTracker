import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
  private data = [];

  setOption(val) {
    if (localStorage.getItem("ExpensesData")) {
      // console.log("this item exists");
      this.data = JSON.parse(
        localStorage.getItem("ExpensesData")
      );
      this.data.push(val);
      localStorage.setItem(
        "ExpensesData",
        JSON.stringify(this.data)
      );
    } else {
      this.data.push(val);
      localStorage.setItem("ExpensesData", JSON.stringify(this.data));
    }
  }

  getOption() {
    if (localStorage.getItem("ExpensesData")) {
      // if category array exists in local storage, fetch from there
      return JSON.parse(localStorage.getItem("ExpensesData"));
    } else {
      // if category array does not exist in local storage, return local array
      // localStorage.setItem("ExpensesData", JSON.stringify(this.data));
      return this.data;
    }
  }
    // return this.data;
}
