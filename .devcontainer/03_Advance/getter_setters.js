class User{
    constructor(email, password){
        this.email=email
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(val){
        this._email=val
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(val){
        this._password=val
    }
}

const user=new User("abc@gmial.com", "123")
console.log(user.password);
console.log(user.email);
