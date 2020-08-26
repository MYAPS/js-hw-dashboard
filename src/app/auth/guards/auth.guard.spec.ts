import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { User } from '../models';

describe('Auth Guards', () => {
    let authGuard: AuthGuard<User>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AuthGuard],
        });
        authGuard = TestBed.get(AuthGuard);
    });

/*    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            authGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });*/
});
