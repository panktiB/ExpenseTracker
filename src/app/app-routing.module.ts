import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddExpenseComponent } from "./add-expense/add-expense.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddCategoryComponent } from "./add-category/add-category.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "add-expense", component: AddExpenseComponent },
  { path: "add-category", component: AddCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
