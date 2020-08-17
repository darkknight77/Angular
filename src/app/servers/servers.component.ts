import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: 'app-servers',
 // template: '<app-server></app-server><app-server></app-server>'
  templateUrl: './servers.component.html'
})

export class ServersComponent implements OnInit {
 
  isServerAllowed = false;
  serverCreationStatus = "No server is created";
  serverName = 'Ghost';
  isServerCreated = false;
  constructor() { 
    setTimeout(() => {
      this.isServerAllowed = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onServerCreate(){
    this.isServerCreated =true;
    this.serverCreationStatus = 'A new server '  + this.serverName +' is created';

  };
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }



}
