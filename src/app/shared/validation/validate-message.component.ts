import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ValidateMessageService } from './validate-message.service';

@Component({
  selector: 'app-validate-message',
  template: `
  <div *ngIf="errorMessage" class="text-danger">
    {{ errorMessage }}
  </div>
  `
})
export class ValidateMessageComponent {
  @Input() group: FormGroup;
  @Input() control: FormControl;
  @Input() errorCode: string;

  constructor(
    private validateMessageService: ValidateMessageService
  ) { }

  get errorMessage(): string {
    // 1st check at form group level
    if (this.group && this.group.errors && this.group.errors[this.errorCode]) {
      return this.validateMessageService.getDetailedMessage(this.errorCode);
    }
    // 2nd check at form control level
    if (this.control && this.control.errors && this.control.errors[this.errorCode]) {
      return this.validateMessageService.getDetailedMessage(this.errorCode);
    }
    // return default
    return null;
  }

}
