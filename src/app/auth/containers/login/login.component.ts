import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {

    private auth = {userName:'',password:''};

    constructor(private router: Router,
                private authenticationService: AuthenticationService
                ) {}
    ngOnInit() {}

    login(){
        
        if(!!this.authenticationService.login(this.auth.userName, this.auth.password)){
            console.log(this.auth.userName);
            this.router.navigate(['/home']);
        }

    }
}
