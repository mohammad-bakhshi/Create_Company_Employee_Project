const createValidator = (input) => {
    let result = {
        message: [],
        status: true
    };
    if (!input.companyName) {
        result.message.push("Company's name is required.");
        result.status = false;
    }
    if (!input.registrationNumber) {
        result.message.push("Company's Registration Number is required.");
        result.status = false;
    }
    if (!input.province) {
        result.message.push("Company's Province is required.");
        result.status = false;
    }
    if (!input.city) {
        result.message.push("Company's City is required.");
        result.status = false;
    }
    if (!input.registrationDate) {
        result.message.push("Company's Registration Date is required.");
        result.status = false;
    }
    if (!input.telephoneNumber) {
        result.message.push("Company's Telephone Number is required.");
        result.status = false;
    }
    return result;
}

const updateValidator = (input) => {
    if (input.companyName || input.registrationNumber || input.province || input.city || input.registrationDate || input.telephoneNumber) {
        return true;
    }
    return false;
}

module.exports = { createValidator, updateValidator };
