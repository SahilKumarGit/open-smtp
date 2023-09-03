export const emptyString = (val) => {
    if (!val) return true
    if (typeof val != 'string') return true
    if (!val.trim()) return true
    return false
}

export const emptyNumber = (val) => {
    if (!val) return true
    if (isNaN(val)) return true
    if (!Number(val)) return true
    return false
}

export const emptyArray = (arr) => {
    if (!arr) return true
    if (!Array.apply(arr)) return true
    if (arr.length == 0) return true
    return false
}

export const emptyObject = (obj) => {
    for (const _key in obj) {
        return false
    }
    return true
}

export const invalidEmail = (email) => {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return !emailRegex.test(email)
}

export const invalidPassword = function (password) {
    let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/
    return !passwordRegex.test(password)
}

export const invalidURL = function (val) {
    let rejx = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/
    return !rejx.test(val)
}

export const invalidColorCode = function (val) {
    let rejx = /^#(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$/
    return !rejx.test(val)
}

export const invalidPhone = function (number) {
    let phoneRegex = /^[6-9]\d{9}$/;
    return !phoneRegex.test(number);
}

export const invalidPincode = function (value) {
    let pinRegex = /^[1-9]{1}[0-9]{5}$/;
    return !pinRegex.test(value);
}