import {Component, OnInit} from '@angular/core';
import {DetailViewModalComponent} from '../detail-view-modal/detail-view-modal.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-drones-catalog',
  templateUrl: './drones-catalog.component.html',
  styleUrls: ['./drones-catalog.component.scss']
})
export class DronesCatalogComponent implements OnInit {

  dronesArr = [];
  detailsArr = [];
  detailsArr1 = [];
  detailsArr2 = [];
  detailsArr3 = [];
  detailsArr4 = [];
  detailsArr5 = [];
  detailsArr6 = [];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    this.detailsArr = [
      {name: 'Detail1', price: 300, minImg: 'assets/photo/detail1.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Detail2', price: 600, minImg: 'assets/photo/detail2.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Detail3', price: 345, minImg: 'assets/photo/detail3.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Detail4', price: 800, minImg: 'assets/photo/detail4.jpg', fullImg: 'assets/photo/img5.JPG'},
    ];

    this.detailsArr1 = [
      {name: 'Лопасті оригінал', price: 700, minImg: 'assets/photo/detail21.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Лопасті копія', price: 300, minImg: 'assets/photo/detail22.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Акумулятор оригінал', price: 2700, minImg: 'assets/photo/detail23.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Акумулятор копія', price: 2000, minImg: 'assets/photo/detail24.jpg', fullImg: 'assets/photo/img5.JPG'},
    ];

    this.detailsArr2 = [
      {name: 'Лопасті оригінал', price: 800, minImg: 'assets/photo/detail33.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Лопасті копія', price: 300, minImg: 'assets/photo/detail32.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Акумулятор оригінал', price: 3300, minImg: 'assets/photo/detail31.jpg', fullImg: 'assets/photo/img5.JPG'},
    ];

    this.detailsArr3 = [
      {name: 'Акумулятор оригінал', price: 2000, minImg: 'assets/photo/detail41.jpg', fullImg: 'assets/photo/img5.JPG'},
    ];

    this.detailsArr4 = [
      // {name: 'Лопасті оригінал', price: 0, minImg: 'assets/photo/detail52.jpg', fullImg: 'assets/photo/img5.JPG'},
      // {name: 'Лопасті копія', price: 0, minImg: 'assets/photo/detail52.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Шлейф Phantom 3 Standart', price: 550, minImg: 'assets/photo/detail51.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Шлейф Phantom 3 Adv/PRO', price: 600, minImg: 'assets/photo/detail51.jpg', fullImg: 'assets/photo/img5.JPG'},
    ];

    this.detailsArr5 = [
      {name: 'Лопасті оригінал', price: 700, minImg: 'assets/photo/detail62.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Лопасті копія', price: 300, minImg: 'assets/photo/detail62.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Шлейф Phantom 4', price: 700, minImg: 'assets/photo/detail61.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Шлейф Phantom 4 PRO', price: 700, minImg: 'assets/photo/detail61.jpg', fullImg: 'assets/photo/img5.JPG'},
    ];

    this.detailsArr6 = [
      {name: 'Лопасті пар/компл. оригинальний', price: 600, minImg: 'assets/photo/detail11.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Мотори оригінальні', price: 550, minImg: 'assets/photo/detail12.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Акумулятор 5100 мАч 17,4', price: 2400, minImg: 'assets/photo/detail13.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Камера оригінальна', price: 4000, minImg: 'assets/photo/detail14.jpg', fullImg: 'assets/photo/img5.JPG'},
    ];

    this.dronesArr = [
      {
        name: 'XIAOMI MI DRONE 4K', price: 13000, minImg: 'assets/photo/dronXiaomiMi.jpg', fullImg: 'assets/photo/img5.JPG',
        charge: '27', controlLength: '4', speed: '60', sensorLength: '30', stabilizer: '3', pixels: '12', details: this.detailsArr6,
        shortInfo: 'Квадрокоптер Xiaomi Mi Drone 4K - це сучасний літальний апарат середніх розмірів з великими можливостями. ' +
          'Він має класичну конструкцію з чотирма лопатями і спеціальними ніжками для посадки.'
      },
      {
        name: 'DJI Mavic PRO', price: 32500, minImg: 'assets/photo/dronMavicPro.jpg', fullImg: 'assets/photo/img5.JPG',
        charge: '27', controlLength: '7', speed: '65', sensorLength: '30', stabilizer: '3', pixels: '12', details: this.detailsArr1,
        shortInfo: 'DJI Mavic Pro є невеликим, але потужним безпілотником, який перетворює небо в Ваше творче полотно легко і ' +
          'невимушено, допомагаючи вам зробити кожен момент прекрасним.'
      },
      {
        name: 'DJI Mavic 2 PRO/ZOOM', price: 42000, minImg: 'assets/photo/dronMavic2Pro.jpg', fullImg: 'assets/photo/img5.JPG',
        charge: '31', controlLength: '8', speed: '65', sensorLength: '30', stabilizer: '3', pixels: '12', details: this.detailsArr2,
        shortInfo: '\n' +
          'Якщо Ви завжди мріяли побачити досконалий коптер. Коптер, що володіє всіма кращими технологіями DJI, коптер, який перетворить ' +
          'світ аерозйомки. Ваша мрія здійснилася. Квадрокоптер Mavic 2 вже створено.'
      },
      {
        name: 'DJI Mavic Air', price: 24300, minImg: 'assets/photo/dronMavicAir.jpg', fullImg: 'assets/photo/img5.JPG',
        charge: '21', controlLength: '2', speed: '50', sensorLength: '30', stabilizer: '2', pixels: '12', details: this.detailsArr3,
        shortInfo: '\n' +
          'Один з найбільш компактних квадрокоптера зі 3-х осьовою стабілізацією і 4К-камерою, здатною знімати якісні фото та ' +
          'відеоматеріали. Відрізняється скромними розмірами і невеликою вагою, в складеному вигляді за розміром не відрізняється ' +
          'від невеликого планшета.'
      },
      {
        name: 'DJI Phantom 3', price: 9000, minImg: 'assets/photo/dronPhantom3.jpg', fullImg: 'assets/photo/img5.JPG',
        charge: '30', controlLength: '4', speed: '50', sensorLength: '30', stabilizer: '3', pixels: '12', details: this.detailsArr4,
        shortInfo: 'Від зльоту до посадки DJI Phantom 3 знаходиться повністю під вашим контролем, інтуїтивно відповідаючи на всі ' +
          'ваші команди в той же час система автопілота забезпечує вирішення найскладніших аспектів безпечного, стабільного польоту.'
      },
      {
        name: 'DJI Phantom 4', price: 49500, minImg: 'assets/photo/dronPhantom4.jpg', fullImg: 'assets/photo/img5.JPG',
        charge: '30', controlLength: '7', speed: '72', sensorLength: '30', stabilizer: '3', pixels: '16', details: this.detailsArr5,
        shortInfo: '\n' +
          'Квадрокоптер DJI Phantom 4 з першого дня випуску в продаж став неймовірно популярним, адже він представляє собою добре ' +
          'продуманий літальній апарат з великим набором функцій та інноваційніх технологій. У DJI Phantom 4 встановлений GPS / GLONASS, ' +
          'акселерометр, датчик висоти, магнітометр, сонар, є слот для Micro SD до 64 Гб.'
      },
    ];
  }

  openViewDetailModal(element) {
    const dialogRef = this.dialog.open(DetailViewModalComponent, {
      width: '80vw',
      data: {
        element: element
      }
    });
  }

}
