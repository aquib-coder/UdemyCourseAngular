<<<<<<< HEAD
import { Component, OnInit, Output , EventEmitter} from '@angular/core';
=======

import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
>>>>>>> f3065404319d22acefa75399c3d3e4a8182452b1


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
<<<<<<< HEAD
@Output() OnFeatureSelected=new EventEmitter<string>();
=======
  @Output () featureSelected=new EventEmitter<string>();
>>>>>>> f3065404319d22acefa75399c3d3e4a8182452b1
  constructor() { }
  ngOnInit(): void {
  }
<<<<<<< HEAD
  OnSelected(s:string){
this.OnFeatureSelected.emit(s);
  }
=======
  OnSelect(feature:string){
    this.featureSelected.emit(feature);
  }

>>>>>>> f3065404319d22acefa75399c3d3e4a8182452b1
}
