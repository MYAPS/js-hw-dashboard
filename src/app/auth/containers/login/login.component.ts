import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent<T> implements OnInit {

    private auth = {userName:'',password:''};

    constructor(private router: Router,
                private authenticationService: AuthService<T>
                ) {}
    ngOnInit() {}

    login() {

        if (!!this.authenticationService.login(this.auth.userName, this.auth.password)){
            console.log(this.auth.userName);
            this.router.navigate(['/home']);
        }

    }
  validateAndsubmit(formV: NgForm) {
    console.log(formV.touched);
    console.log(formV.valid);
    console.log(formV);
  }
}
