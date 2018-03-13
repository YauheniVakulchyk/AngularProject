export class AuthInfo {
  id: number;
  name: string;
  isAuth: boolean;

  constructor(id: number, name: string, isAuth: boolean) {
    this.id = id;
    this.name = name;
    this.isAuth = isAuth;
  }
}
