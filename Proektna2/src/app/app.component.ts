import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StoreCardComponent } from './store-card/store-card.component';
import { Item } from '../assets/item';
import { ITEMS } from '../assets/db-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, StoreCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proektna2';

  predmeti = ITEMS;

  onAppViewed(c: Event) {
    console.log("App " + c);
    var link = "https://www.amazon.com/SAMSUNG-Smartphone-Unlocked-Android-Processor/dp/B0CMDTFNGM/ref=sr_1_3?keywords=samsung%2Bs24&qid=1707668959&sr=8-3&th=1";
  }
}
