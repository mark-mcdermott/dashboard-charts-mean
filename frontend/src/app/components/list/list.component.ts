import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../services/issue/issue.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export  class  ListComponent  implements  OnInit {
  private  issues:  Array<object> = [];
  constructor(private issueService: IssueService) { }
  ngOnInit() {
      this.getIssues();
  }
  public  getIssues(){
      this.issueService.getIssues().subscribe((data: Array<object>) => {
          this.issues  =  data;
      });
  }
}
