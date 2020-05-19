import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { mockData } from 'src/app/mock-data/mock-data';
import { AuthService } from '../auth/services/auth.service';

@Injectable()
export class AuthenticationService implements AuthService<string> {
    private currentUserSubject: BehaviorSubject<string>;
    private resetPwdSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    public currentUser: Observable<string>;
    private userList =  Object.assign.apply({}, mockData.userList.map( (v, i) => ( {[v]: 'password0'} ) ) );
    constructor() {

        this.currentUserSubject = new BehaviorSubject<string>(localStorage.getItem('currentUser'));
        this.currentUser = this.currentUserSubject.asObservable();
    }
  currentUserRole(): string {
    throw new Error("Method not implemented.");
  }

    public currentUserValue(): string {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        if( this.userList[username] ===  password) {
            console.log('in service:'+ username);
            localStorage.setItem('currentUser', username);
            this.currentUserSubject.next(username);
            return username;
        }
        localStorage.removeItem('currentUser');
        return null;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    resetPasswordObs(): Observable<string> {
        return this.resetPwdSubject.asObservable();
    }

    resetPassword(username: string): void {

        const r = Math.random().toString(36).substring(7);
        this.userList[username] = r;
        console.log('reset called with' + username + ' and the password is'+ r);
        this.resetPwdSubject.next(r);
    }
}
