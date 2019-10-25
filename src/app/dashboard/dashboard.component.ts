import { Component, OnInit } from "@angular/core";
import { DataService } from "./../services/data.service";
import { ChartService } from "../services/chart-data.service";
import { CategoryService } from "../services/category.service";
import { GoogleChartsModule } from "angular-google-charts";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  noExpenses = false;

  constructor(
    private dataservice: DataService,
    private categoryservice: CategoryService,
    private chartdata: ChartService,
    private google: GoogleChartsModule
  ) {}

  ngOnInit() {
    // get data from appropriate services
    let expenseData = this.dataservice.getOption();
    let categoryData = this.categoryservice.getOption();

    // if there are no expenses recorded, charts cannot be displayed.
    if (expenseData.length === 0) {
      // console.log(expenseData);
      this.noExpenses = true;
    }
    // if expenses are recorded, google charts are displayed.
    else {
      var chartsData = this.chartdata.refineData(
        expenseData,
        categoryData,
        "chart"
      );
      var tableDataArr = this.chartdata.refineData(
        expenseData,
        categoryData,
        "table"
      );

      google.charts.load("current", { packages: ["corechart", "table"] });
      google.charts.setOnLoadCallback(drawChart);

      // Draw the chart and set the chart values
      function drawChart() {
        var data = google.visualization.arrayToDataTable(chartsData);
        // var tableData = new google.visualization.DataTable();
        var tableData = google.visualization.arrayToDataTable(tableDataArr);

        // Optional; add a title and set the width and height of the chart
        var pieOptions = { title: "Pie Chart", width: 550, height: 400 };
        var barOptions = { title: "Bar Chart", width: 550, height: 400 };
        var tableOptions = {
          showRowNumber: true,
          width: "100%",
          height: "100%"
        };
        // tableData.addColumn("string", "Name");
        // tableData.addColumn("number", "Salary");
        // tableData.addColumn("boolean", "Full Time Employee");
        // tableData.addRows([
        //   ["Mike", { v: 10000, f: "$10,000" }, true],
        //   ["Jim", { v: 8000, f: "$8,000" }, false],
        //   ["Alice", { v: 12500, f: "$12,500" }, true],
        //   ["Bob", { v: 7000, f: "$7,000" }, true]
        // ]);

        // Display the chart inside the <div> element with id="piechart"
        var pieChart = new google.visualization.PieChart(
          document.getElementById("piechart")
        );
        var barChart = new google.visualization.BarChart(
          document.getElementById("barchart")
        );
        var tableChart = new google.visualization.Table(
          document.getElementById("tablechart")
        );

        pieChart.draw(data, pieOptions);
        barChart.draw(data, barOptions);
        tableChart.draw(tableData, tableOptions);
      }
    }
  }
}

/* 

google.charts.load('current', {'packages':['table']});
      google.charts.setOnLoadCallback(drawTable);

      function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('number', 'Salary');
        data.addColumn('boolean', 'Full Time Employee');
        data.addRows([
          ['Mike',  {v: 10000, f: '$10,000'}, true],
          ['Jim',   {v:8000,   f: '$8,000'},  false],
          ['Alice', {v: 12500, f: '$12,500'}, true],
          ['Bob',   {v: 7000,  f: '$7,000'},  true]
        ]);

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
      }



*/
