import { Component } from '@angular/core';
import { AccountsService } from 'app/accounts.service';
import { AccountComponent } from 'app/account/account.component';
import { OnInit } from '@angular/core/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 // providers:[AccountsService]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
this.accounts = this.accountService.accounts;
  }
 accounts:{name:string,status:string}[] = [];

 constructor(private accountService :AccountsService){};
}
