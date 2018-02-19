import { Component } from '@angular/core';
import { LoggingService } from 'app/logging.service';
import { AccountsService } from 'app/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
 // providers:[LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService : LoggingService, private accountService :AccountsService ){
    this.accountService.onStatusUpdate.subscribe((status:string) => alert('status--'+status))
  }

  onCreateAccount(accountName: string, accountStatus: string) {
   this.accountService.addAccount(accountName,accountStatus);
    //console.log('A server status changed, new status: ' + accountStatus);
    //this.loggingService.logStatusChange(accountStatus)
  }
}
