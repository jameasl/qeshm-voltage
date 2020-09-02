import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { RTL, LocalizationService, L10N_PREFIX, } from '@progress/kendo-angular-l10n';

export function directionFactory() {
  if(localStorage.getItem('direction') === "rtl") {
    return true;
  }
  return false;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    DropDownsModule,
    TranslateModule.forChild()
  ],
  exports: [
    CommonModule,
    LayoutModule,
    DropDownsModule,
    TranslateModule
  ],
  providers: [
    { provide: RTL, useFactory: directionFactory },
    LocalizationService,
    {
      provide: L10N_PREFIX,
      useValue: 'kendo.dialog'
    },
  ]
})
export class SharedModule { }
