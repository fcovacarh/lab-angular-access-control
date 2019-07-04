import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from 'app/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponent implements OnInit {
  person: string;
  message: string;

  constructor(private accessControlLog: AccessControlLogService) { }

  ngOnInit() {
  }

  submitLog() {
    this.accessControlLog.addAccessItem(this.person, this.message);
  }
}
