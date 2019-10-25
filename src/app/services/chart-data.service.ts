import { Injectable } from "@angular/core";
// import { DataService } from "./data.service";
// import { CategoryService } from "./category.service";

@Injectable()
export class ChartService {
  // private dataservice: DataService;
  // private categoryservice: CategoryService;
  private chartData = [["Category", "Amount"]];
  private tableData = [["Category", "Amount", "Date"]];

  refineData(expensesData, categoryData, type) {
    this.chartData = [["Category", "Amount"]];
    this.tableData = [["Category", "Amount", "Date"]];

    let dataObjArr = expensesData;
    let categoryArr = categoryData;

    if (type === "chart") {
      // iterate over the categories and set up chartData array.
      categoryArr.forEach(item => {
        this.chartData.push([item, 0]);
      });

      // iterate over expenses object array; loop over chartData; add up all expenses
      dataObjArr.forEach(element => {
        this.chartData.forEach(item => {
          if (element["cateogry"] === item[0]) {
            item[1] += element["amount"];
          }
        });
      });
      return this.chartData;
    }

    if (type === "table") {
      // iterate over the categories and set up chartData array.
      // categoryArr.forEach(item => {
      //   this.tableData.push([item, 0, ""]);
      // });

      // iterate over expenses object array; loop over chartData; add up all expenses
      dataObjArr.forEach(element => {
        // this.tableData.forEach(item => {
        //   if (element["cateogry"] === item[0]) {
        //     item[1] += element["amount"];
        //     item[2] += element["date"];
        //   }
        // });
        this.tableData.push([
          element["cateogry"],
          element["amount"],
          element["date"]
        ]);
      });
      return this.tableData;
    }
  }
}
