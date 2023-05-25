import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


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

  
  constructor(private toastr:ToastrService) { }

  private url = "http://localhost:8085/deleteJobById/";

  
  public deleteJob(event:Event, jobId:number) {
    fetch(`${this.url}${jobId}` , {method:'DELETE'} )
      .then((response) => response.text()).then(r => {setTimeout(() => this.toastr.success(r))
      this.loadData.emit()})
  }
  ngOnInit(): void {
  }

}
