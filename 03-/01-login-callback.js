const login = (email, password, callback) => {
    setTimeout(() => {
        callback(email);
    }, 1000);
}

login('alan@gmail.com', 1234567890, (verifiedEmail) => {
    console.log(verifiedEmail);
})