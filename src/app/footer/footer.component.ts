import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  lat = 49.8512859;
  lng = 24.0299442;

  constructor() { }

  ngOnInit() {
  }

}
