module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "pinterest_clone",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "define": {
      "paranoid": true
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
