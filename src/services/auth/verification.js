export const isValidEmail = (email) => {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    return regex.test(email)
}

export const isValidPassword = (password) => {
    const regex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    return regex.test(password)
}

export const isValidPhoneNumber = (phoneNumber) => {
    const regex = /^\+?(\d[\d-. ]+)?(\([\d-. ]+\))?[\d-. ]+\d$/
    return regex.test(phoneNumber)
}

export const isValidName = (name) => {
    const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
    return regex.test(name)
}
