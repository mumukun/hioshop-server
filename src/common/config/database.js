const mysql = require('think-model-mysql');

module.exports = {
    handle: mysql,
    database: 'hiolabsDB',
    prefix: 'hiolabs_',
    encoding: 'utf8mb4',
    host: '1.15.148.168',
    port: '33061',
    user: 'mukun',
    password: 'mumunana2009',
    dateStrings: true
};
