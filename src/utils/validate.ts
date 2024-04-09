export class Validate {
    static Email(email:string){
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    }
    static Password(password:string){
        return password.length >= 6
    }
}