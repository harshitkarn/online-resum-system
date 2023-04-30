import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.css']
})
export class JobItemComponent implements OnInit {
  @Input() name = '';
  @Input() skills = '';
  @Input() jobId = 0;
  @Output("loadData") loadData: EventEmitter<any> = new EventEmitter();

  
  constructor() { }

  private url = "http://localhost:8085/deleteJobById/";

  
  public deleteJob(event:Event, jobId:number) {
    fetch(`${this.url}${jobId}` , {method:'DELETE'} )
      .then((response) => response.text()).then(r => {alert(r)
      this.loadData.emit()})
  }
  ngOnInit(): void {
  }

}
