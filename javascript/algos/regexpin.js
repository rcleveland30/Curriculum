// Use regex to validate pin number.

function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
}