export class AuthInfo {
  username: string;
  isAuth: boolean;

  constructor(username: string, isAuth: boolean) {
    this.username = username;
    this.isAuth = isAuth;
  }
}
