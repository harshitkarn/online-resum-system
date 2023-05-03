import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-component',
  templateUrl: './resume-component.component.html',
  styleUrls: ['./resume-component.component.css']
})
export class ResumeComponentComponent implements OnInit {
  @Input() username = '';
  @Input() name = '';
  @Input() email = '';
  @Input() resumeId = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
