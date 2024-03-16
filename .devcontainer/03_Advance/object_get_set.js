const User={
    _email:'hcr.com',
    _password:"xyz",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email=value
    }
}
const tea=Object.create(User)
console.log(tea.email);