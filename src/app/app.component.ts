import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  hello_string = "hello local!  This is not from the server.  Is it running?";

  ngOnInit(): void {
    this.getHello();
  }

  constructor(private helloService: HelloService) {
    // nothign to do because no transformations to data that is available at construction time
  }

  getHello(): void {
    // this seems to be a deprecated way to handle errors?
    // would have to move it to the service
    // got it from here
    // https://angular.io/guide/observables
    this.helloService.getHello().subscribe(
      message => this.hello_string = message,
      err =>  {
        this.hello_string = "the server can't seem to hear you";
        console.log("Failure retrieving from server: " + err);
      },
      () => console.log("message request from server is complete"),
    );
  }

}
