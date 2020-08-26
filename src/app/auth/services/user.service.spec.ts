import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { User } from '../models';

const mockUser:User = {
    id: "123A",
    firstName: "AA",
    lastName: "zz",
    email: "aa@zz.com",
};

describe('UserService', () => {
    let userService: UserService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserService],
        });
        userService = TestBed.get(UserService);
    });

    describe('getUser$', () => {
        it('should return Observable<User>', () => {
            userService.user = mockUser;
            userService.user$.subscribe(response => {
                expect(response).toEqual(mockUser);
            });
        });
    });
});
