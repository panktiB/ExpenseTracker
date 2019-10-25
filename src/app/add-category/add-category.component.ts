import { Component, OnInit } from "@angular/core";
import { CategoryService } from "./../services/category.service";

@Component({
  selector: "app-add-category.component",
  templateUrl: "./add-category.component.html",
  styleUrls: ["./add-category.component.css"]
})
export class AddCategoryComponent implements OnInit {
  newCategory;
  categoryArr;

  constructor(private categoryservice: CategoryService) {
    this.categoryArr = this.categoryservice.getOption();
  }

  ngOnInit() {}

  categoryAdded() {
    this.newCategory =
      this.newCategory.slice(0, 1).toUpperCase() + this.newCategory.slice(1);
    // console.log(this.newCategory);

    this.categoryservice.setOption(this.newCategory);

    console.log("category added, ", this.categoryservice.getOption());
  }
}
