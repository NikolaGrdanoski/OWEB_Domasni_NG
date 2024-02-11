import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'C:/Users/Nikola/Desktop/FEIT/V_Semestar/OWEB/OWEB_Domasni_NG/Proektna2/src/assets/item';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { link } from 'node:fs';
import { ITEMS } from '../../assets/db-data';

@Component({
  selector: 'app-store-card',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './store-card.component.html',
  styleUrl: './store-card.component.css'
})
export class StoreCardComponent implements OnInit{
  constructor() {}
  @Output()
  caci: EventEmitter<Item> | undefined

  @Input()
  indeks: number = -1;

  @Input()
  predmet: Item = {} as Item;

  OnItemViewed() {
    console.log("Da");
    var link = "https://www.amazon.com/SAMSUNG-Smartphone-Unlocked-Android-Processor/dp/B0CMDTFNGM/ref=sr_1_3?keywords=samsung%2Bs24&qid=1707668959&sr=8-3&th=1";
    this.caci?.emit(this.predmet);
  }

  ngOnInit() {}
  klasi() {
    return { 'app-store-card': true, begin: true};
  }
}
