import {
  async,
  TestBed
} from '@angular/core/testing';
import {
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import {
  Params,
  Router,
  ActivatedRoute
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/observable/of';

import { AuthenticationService } from '../auth.service';
import { ResetPasswordComponent } from './reset-password.component';
import { ValidateMessageComponent } from '../../shared/validation/validate-message.component';

class MockRouter {
  navigateByUrl(url: string) { return url; }
}

class MockActivatedRoute {
  private _params = new Subject<Params>();

  get params(): Observable<Params> {
    return Observable.of({ token: 'hashtoken'});
  }

}

describe('Component: ResetPassword', () => {
  let component: ResetPasswordComponent;
  let authService: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ResetPasswordComponent,
        ValidateMessageComponent,
      ],
      imports: [
        ReactiveFormsModule,
      ],
      providers: [
        AuthenticationService,
        { provide: Router, useClass: MockRouter },
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
      ]
    });

    const fixture = TestBed.createComponent(ResetPasswordComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthenticationService);
  });

  it('should have a defined component', async(() => {
    expect(component).toBeDefined();
  }));

  it('should return true for valid recovery token', async(() => {
    spyOn(authService, 'validateRecoveryToken').and.returnValue(Observable.of(true));
    component.ngOnInit();
    expect(component.tokenValid).toBe(true);
  }));

  it('should return false for invalid recovery token', async(() => {
    spyOn(authService, 'validateRecoveryToken').and.returnValue(Observable.of(false));
    component.ngOnInit();
    expect(component.tokenValid).toBe(false);
  }));

  it('should create a form group for valid recovery token', async(() => {
    spyOn(authService, 'validateRecoveryToken').and.returnValue(Observable.of(true));
    component.ngOnInit();
    expect(component.resetPwdForm instanceof FormGroup).toBe(true);
    expect(component.resetPwdForm.controls['password']).toBeDefined();
    expect(component.resetPwdForm.controls['confirmPassword']).toBeDefined();
  }));

  it('should not create a form group for invalid recovery token', async(() => {
    spyOn(authService, 'validateRecoveryToken').and.returnValue(Observable.of(false));
    component.ngOnInit();
    expect(component.resetPwdForm).toBeUndefined();
  }));

  it('should return true if the form controls are valid', async(() => {
    spyOn(authService, 'validateRecoveryToken').and.returnValue(Observable.of(true));
    component.ngOnInit();
    const form = component.resetPwdForm;
    expect(form.valid).toBe(false);
    form.setValue({
      password: 'P@ssword',
      confirmPassword: 'P@ssword'
    });
    expect(form.valid).toBe(true);
  }));

});
