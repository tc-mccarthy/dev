var config = {
    app: {
        port: 3011
    },
    mysql: {
        mysql: {
            user: process.env.MYSQL_USER,
            pass: process.env.MYSQL_PASS,
            db: 'DB_NAME',
            host: process.env.MYSQL_HOST,
            port: 3306,
            logging: false
        },
    }
};

exports.config = config;