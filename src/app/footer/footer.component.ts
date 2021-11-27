import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  mobile: boolean = false;
  constructor() { }

  ngOnInit() {
    console.log(window.screen.width);
    if (window.screen.width < 768) {
      this.mobile = true;
    }
  }

}
