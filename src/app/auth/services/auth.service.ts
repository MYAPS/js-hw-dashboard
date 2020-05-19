import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { AuthModule } from '../auth.module';

@Injectable()
export abstract class AuthService<T> {
  abstract login(username: string, password: string): T;
  abstract logout(): void;
  abstract resetPasswordObs(): Observable<T>;
  abstract resetPassword(username: string): void;
  abstract currentUserValue(): T;
  abstract currentUserRole(): T;

}
