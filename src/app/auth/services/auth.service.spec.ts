import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { User } from '../models';

describe('AuthService', () => {
    let authService: AuthService<User>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthService],
        });
        authService = TestBed.get(AuthService);
    });
});
