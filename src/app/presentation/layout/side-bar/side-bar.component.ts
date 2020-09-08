import { Component, OnInit, Input, Injector, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../../../shared/baseComponent';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Input() isMenuOpen;
  @Output() menuClick = new EventEmitter();
  baseIconUrl = '/assets/icon/sidebar/';

  constructor(
  ) {
  }

  ngOnInit(): void {

  }

  getLogoWidth() {
    return this.isMenuOpen ? '70' : '40';
  }
  iconUrl(name) {
    return this.baseIconUrl + name + '.svg';
  }
  onMenuClick() {
    this.menuClick.emit();
  }


}
