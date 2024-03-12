function setUsername(username){
    this.username=username
    console.log("called");
}

function createUser(username, email, password) {
    //this is the current way to execute the current context
    setUsername.call(this, username)
    this.email=email
    this.password=password
}

const user=new createUser("Abhi", "abhi@xyz", "1235")
console.log(user);