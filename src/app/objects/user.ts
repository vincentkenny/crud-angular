export class User{
    username : string;
    email : string;
    password: string;
    constructor(username : string, email : string, password:string){
        this.username = username;
        this.email = email;
        this.password = password;
    }
}