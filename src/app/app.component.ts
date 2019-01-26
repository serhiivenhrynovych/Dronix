import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'smachna-hata';
  displayMenu = false;

  showMenu() {
    this.displayMenu = this.displayMenu === false;
  }
}
