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
  constructor() { 
    setTimeout(() => {
      this.isServerAllowed = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onServerCreate(){
this.serverCreationStatus = 'A new server is created';

  };



}
