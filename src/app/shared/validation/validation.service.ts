import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class ValidationService {
  static PASSWORD_REGEX = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}';

  static matchPasswordAndConfirmPassword(formGroup: FormGroup): {[key: string]: boolean} {
    const passwordCtrl = formGroup.get('password');
    const confirmPwdCtrl = formGroup.get('confirmPassword');
    if (passwordCtrl.invalid || confirmPwdCtrl.invalid) { return null; }
    if (passwordCtrl.value === confirmPwdCtrl.value) { return null; }
    return { MatchPassword: true };
  }

  static checkPasswordStrength(control: FormControl): {[key: string]: boolean} {
    if (control.invalid) { return null; }
    if (!control.value) { return null; }
    if (control.value.match(ValidationService.PASSWORD_REGEX)) { return null; }
    return { WeakPassword: true };
  }

  static confirmUsernameAvailability(control: FormControl): Observable<{[key: string]: boolean} | null> {
    return Observable.of(null);
  }

}
