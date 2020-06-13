

// module.exports = {
//   development: {
//     client: 'sqlite3',
//     connection: { filename: './database/auth.db3' },
//     useNullAsDefault: true,
//     migrations: {
//       directory: './database/migrations',
//       tableName: 'dbmigrations',
//     },
//     seeds: { directory: './database/seeds' },
//   },
// };



// require("dotenv").config();

// const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/auth";
// // if using a local postgres server, please create the database manually, Knex will not create it autmatically

// module.exports = {
//   development: {
//     client: "sqlite3",
//     useNullAsDefault: true,
//     connection: {
//       filename: "./database/auth.db3",
//     },
//     pool: {
//       afterCreate: (conn, done) => {
//         conn.run("PRAGMA foreign_keys = ON", done);
//       },
//     },
//     migrations: {
//       directory: "./database/migrations",
//     },
 
//   },

//   production: {
//     client: "pg",
//     connection: pgConnection,
//     pool: {
//       min: 2,
//       max: 10,
//     },
//     migrations: {
//       directory: "./database/migrations",
//     },
  
//   },
// };

const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/user";

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/auth.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./database/auth.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },

  production: {
    client: "pg",
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
};