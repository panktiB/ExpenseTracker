import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { GoogleChartsModule } from "angular-google-charts";
//import { expense } from "./expenseObject/expense";
//import { MatSidenavModule } from "@angular/material";

import { DataService } from "./services/data.service";
import { CategoryService } from "./services/category.service";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddCategoryComponent } from "./add-category/add-category.component";
import { AddExpenseComponent } from "./add-expense/add-expense.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ChartService } from "./services/chart-data.service";
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AddCategoryComponent,
    AddExpenseComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //BrowserAnimationsModule,
    FormsModule,
    AngularFontAwesomeModule,
    GoogleChartsModule
    //MatSidenavModule
  ],
  providers: [DataService, CategoryService, ChartService],
  bootstrap: [AppComponent]
})
export class AppModule {}
