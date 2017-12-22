import { ValidationMessages } from './validation-messages.enum';

export class ValidateMessageService {

  getDetailedMessage(errorCode: string): string {
    return ValidationMessages[errorCode];
  }

}
