import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'C:/Users/Nikola/Desktop/FEIT/V_Semestar/OWEB/OWEB_Domasni_NG/Proektna2/src/assets/item';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-store-card',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './store-card.component.html',
  styleUrl: './store-card.component.css'
})
export class StoreCardComponent {
  constructor() {}
  @Output()
  caci: EventEmitter<Item> | undefined

  @Input()
  indeks: number = -1;

  @Input()
  predmet: Item | undefined;

  OnItemViewed() {
    console.log("Da");
    this.caci?.emit(this.predmet);
  }

  ngOnInit() {}
  klasi() {
    return { 'app-store-card': true, begin: true};
  }
}
