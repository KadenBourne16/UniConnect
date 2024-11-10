class Student {
    constructor(name, password, hashPassword) {
        this.name = name;
        this.password = password;
        this.hashPassword = hashPassword;
    }

    setHashPassword(calculatedHashPassword) {
        this.hashPassword = calculatedHashPassword;
    }

    getHashPassword() {
        return this.hashPassword;
    }
}

module.exports = {
    Student
};
