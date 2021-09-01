import { Component, OnInit } from '@angular/core';
import { Survey } from "../types/Survey";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  statuses: string[] = ['All', 'Active', 'Completed'];
  categories: string[] = ['Development', 'Workplace', 'Hardware'];
  filteredList: Survey[];

  status = 'status';
  category = "category";

  statusFilter = 'All';
  categoryFilter = 'All';

  surveyList: Survey[] = [
    {
      title: "Designer Survey",
      category: "Workplace",
      status: "Active",
      label: "New Framework",
    },
    {
      title: "Developer Survey",
      category: "Development",
      status: "Active",
      label: "Education",
    },
    {
      title: "Backend Survey",
      category: "Hardware",
      status: "Completed",
      label: "Personal",
    }
  ]

  ngOnInit() {
    this.filteredList = this.surveyList;
  }

  onFilterSelected(filter: string, type: string) {
    if (type === this.status) {
      if (filter === 'All') {
        this.statusFilter = 'All';
        this.categoryFilter = 'All'
      } else {
        this.statusFilter = filter;
      }
    } else if (type === this.category) {
      if (filter === this.categoryFilter) {
        this.categoryFilter = 'All'
      } else {
        this.categoryFilter = filter;
      }
    }
    this.filteredList = this.surveyList
        .filter(survey => this.statusFilter === 'All' || survey.status === this.statusFilter)
        .filter(survey => this.categoryFilter === 'All' || survey.category === this.categoryFilter);
  }
}
