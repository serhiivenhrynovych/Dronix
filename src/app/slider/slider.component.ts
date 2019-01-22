import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  index = 0;
  speed = 4000;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  avatars = '123'.split('').map((x, i) => {
    const num = i;
    // const num = Math.floor(Math.random() * 1000);
    return {
      url: `assets/photo/photo${num}.jpg`,
      title: `${num}`
    };
  });

  constructor() { }

  ngOnInit() {
  }

}
