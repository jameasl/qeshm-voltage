import { Component, OnInit, Output, EventEmitter, Injector } from '@angular/core';
import { BaseComponent } from '../../../shared/baseComponent';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  @Output() closeEvent = new EventEmitter();

  constructor(
  ) {
   }

  ngOnInit(): void {
   
  }
  onCloseSetting(){
    this.closeEvent.emit();
  }

}
