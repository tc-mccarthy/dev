var config = {
    app: {
        port: 3011
    },
    mysql: {
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        database: 'so_tracker',
        host: process.env.MYSQL_HOST,
        port: 3306,
        logging: true
    }
};

exports.config = config;