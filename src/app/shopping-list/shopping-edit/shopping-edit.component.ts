import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('amountInput') amountInput:ElementRef;
  @Output() addedIngredient=new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddIngredient(){
const ob=new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value);
this.addedIngredient.emit(ob);
  }
}
