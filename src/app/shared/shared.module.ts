import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidateMessageComponent } from './validation/validate-message.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ValidateMessageComponent,
  ],
  exports: [
    CommonModule,
    ValidateMessageComponent,
  ],
  providers: []
})
export class SharedModule { }
