export class LoginCredentials {

    constructor(
        public email: string,
        public password: string) {
    }
}

export class SignUpCredentials {

  constructor(
    public username: string,
    public email: string,
    public dateOfBirth: Date,
    public name: string,
    public password: string,

    ) {

    }
}
