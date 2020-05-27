export function validateEmail(email) {
    const isValid = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
    if (!isValid) {
        return "Please ensure that the email address entered is valid."
    }
}

export function notNull(value) {
    if (value.length < 1) {
        return "Please enter a value."
    }
}

