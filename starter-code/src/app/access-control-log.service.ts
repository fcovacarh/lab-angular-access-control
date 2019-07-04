import { Injectable } from '@angular/core';
import {LogMessage} from './log-message';

@Injectable()
export class AccessControlLogService {
  logMessages: Array<LogMessage> = [];
  
  constructor() { }

  getAccessLog() {
    return this.logMessages;
  }

  addAccessItem(person: string, message: string) {
    let newLogMessage = {
      person,
      message,
      createdAt: new Date()
    }

    this.logMessages.push(newLogMessage);
    console.log(this.logMessages);
  }
}
