import {
  async,
  TestBed
} from '@angular/core/testing';
import {
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

import { AuthenticationService } from '../auth.service';
import { ForgotPasswordComponent } from './forgot-password.component';

describe('Component: ForgotPassword', () => {
  let component: ForgotPasswordComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ForgotPasswordComponent,
      ],
      imports: [
        ReactiveFormsModule,
      ],
      providers: [
        AuthenticationService,
      ]
    });

    const fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
  });

  it('should have a defined component', async(() => {
    expect(component).toBeDefined();
  }));

  it('should create a form group comprised of form controls', async(() => {
    component.ngOnInit();
    expect(component.forgotPwdForm instanceof FormGroup).toBe(true);
    expect(component.forgotPwdForm.controls['username']).toBeDefined();
  }));

  it('should return true if the form controls are valid', async(() => {
    component.ngOnInit();
    const form = component.forgotPwdForm;
    expect(form.invalid).toBe(true);
    form.setValue({
      username: 'username@email.com'
    });
    expect(form.valid).toBe(true);
  }));

});
