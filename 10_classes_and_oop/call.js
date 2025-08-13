function setUsername(username) {
    this.username = username;
    console.log("called");
    
}

function createUser(username, email, password) {
    setUsername.call(this, username)

    this.email = email
    this.password = password
}

const User = new createUser("Nishant", "Nishu@fb.com", "123")
console.log(User);
