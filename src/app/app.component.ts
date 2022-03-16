import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testAngular';
  name="testAngular"
  getVal()
  {
    if(this.name=='aquib')
    return true;
    else return false;
  }
}
