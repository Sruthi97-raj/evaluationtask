
export function emailValidation(email) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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
