import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  SelectedNavOption:string='recipe';
  OnNavigate(s:string){
    this.SelectedNavOption=s;
  }
}
