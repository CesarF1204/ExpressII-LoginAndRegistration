class dbConfig {
    constructor() {
        this.host = 'localhost';
        this.user = 'root';
        this.password = 'root';
        this.database = 'express_login_and_registration';
    }
}
module.exports = new dbConfig;