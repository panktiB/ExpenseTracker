import { Component } from "@angular/core";
// import { DataService } from "./services/data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "ExpanseTracker";
  events: string[] = [];
  opened: boolean;
  shouldRun = true;
  // dataservice: DataService;
  // sshouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
