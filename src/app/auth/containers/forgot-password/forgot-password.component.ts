import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {  Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'sb-forgot-password',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './forgot-password.component.html',
    styleUrls: ['forgot-password.component.scss'],
})
export class ForgotPasswordComponent<T> implements OnInit, OnDestroy {

    private userName:string;
    private password ='Enter your email address and we will send you a link to reset your password.';
    private resetPwdObs:Subscription;
    constructor(private router: Router,
                private authenticationService: AuthService<T>
                ) {
                }
    ngOnDestroy(): void {
        this.resetPwdObs.unsubscribe();
    }
    ngOnInit() {
        this.resetPwdObs = this.authenticationService
                            .resetPasswordObs()
                            .subscribe(password => (password != null ? this.password = `New Password is: ${password}` : ''));

    }

    resetPassword(){
        this.authenticationService.resetPassword(this.userName);
        console.log('reset called and PWD is' + this.password);
    }
    callBackFn(password) {
        this.password = password;
    }
}
