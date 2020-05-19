import { AuthService } from '../auth/services/auth.service';
import { User } from '../auth/models';
import { AppUserService } from './app-user.service';
import { AdminService } from './admin.service';
import { UserService } from '../auth/services';
import { UnAuthUserService } from './un-auth-user.service';
import { AuditorService } from './auditor.service';


export class MYSF<T> {
static  serviceFactory( authService: AuthService<string>): AppUserService  {
  if(authService.currentUserRole() === 'ADMIN') {
    return new AdminService();
  } else if(authService.currentUserRole() === 'AUDITOR') {
    return new AuditorService();
  } else if(authService.currentUserRole() === 'USER') {
    return new UserService();
  } else {
    return new UnAuthUserService();
  }
};
}
