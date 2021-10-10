
export function emailValidation(email) {
    var mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(mailformat)) {
        return true
    }
    else {
        return false
    }

}

export function passwordValidation(password) {
    var passwordFormat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    var passwordLength = password.length
    if (passwordLength >= 8 && password.match(passwordFormat)) {
        return true
    }
    else {
        return false
    }

}
