import { Component, OnInit } from '@angular/core';
import { GlobalVars } from 'src/app/common/global-vars';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  siteVars = GlobalVars.siteVars
  home = GlobalVars.home
  hero = this.home.hero

  constructor() { }

  ngOnInit(): void {
  }

}
