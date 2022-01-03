import { Component } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  callAnime() {
    anime({
      targets: '.animate-me',
      translateX: [
        { value: 100, duration: 1200 },
        { value: 0, duration: 800 }

      ],
      rotate:'1turn',
      backgroundColor: '#ff00ff',
      duration: 2000
    });

  }

  doMagic() {

  }

  animateItems(){

  }

  bounce(){

  }

  flip(){

  }

}
