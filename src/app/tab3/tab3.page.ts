import { Component } from '@angular/core';
import * as confetti from 'canvas-confetti';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {

  }

  frame() {
    confetti.create()({
      resize: true,
      particleCount: 500,
      angle: 60,
      spread: 1000000,
      origin: { x: 0}

    });
    confetti.create()({
      resize: true,
      particleCount: 500,
      angle: 60,
      spread: 1000000,
      origin: { x: 1 }
    });
  }

  ngOnInit() {
    this.frame();
  }

}
