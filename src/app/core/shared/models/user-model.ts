export class User{

  constructor(
    public id: number,
    public username: string,
    public email: string,
    public dateOfBirth: Date,
    public name: string,
    public is_active: boolean,
    public is_staff: boolean,
    public date_joined: Date


  ){

  }

}

export class UserProfile{

  constructor(
    public user: string,
    public bio: string,
    public hobbies: string,
    public create_at: Date,
    public updated_at: Date

  ) {

  }
}
