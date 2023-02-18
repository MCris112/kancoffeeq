import { Component, OnInit } from '@angular/core';
import { GlobalVars } from 'src/app/common/global-vars';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  siteVars = GlobalVars.siteVars

  constructor() { }

  ngOnInit(): void {
  }

}
