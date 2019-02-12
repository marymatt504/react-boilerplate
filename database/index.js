const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  database: 'best_restaurants',
});

const addRestaurant = (name, neighborhood, url, averageDishPrice, callback) => {
  const queryStr = `INSERT INTO restaurants (name, neighborhood, url, averageDishPrice) VALUES (?, ?, ?, ?)`;
  connection.query(
    queryStr,
    [name, neighborhood, url, averageDishPrice],
    (error, results) => {
      if (error) {
        callback(error);
      } else {
        callback(null, results);
      }
    },
  );
};

const getRestaurants = callback => {
  const queryStr = `SELECT * FROM restaurants`;
  connection.query(queryStr, [], (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

// const updateLastSeenAt = (id, callback) => {
//   const queryStr = `UPDATE cats SET lastSeenAt = NOW() where id = ?;`;
//   connection.query(queryStr, [id], (error, results) => {
//     if (error) {
//       callback(error);
//     } else {
//       callback(null, results);
//     }
//   });
// };

// const getRandomCat = callback => {
//   const queryStr = 'SELECT * FROM cats ORDER BY RAND() LIMIT 1';
//   connection.query(queryStr, [], (error, results) => {
//     if (error) {
//       callback(error);
//     } else {
//       callback(null, results);
//     }
//   });
// };

// const createSession = (user_id, token, callback) => {
//   const queryStr = 'INSERT INTO sessions (user_id, token) VALUES (?, ?)';
//   connection.query(queryStr, [user_id, token], (error, results) => {
//     if (error) {
//       callback(error);
//     } else {
//       callback(null, results);
//     }
//   });
// };

// const findSession = (token, callback) => {
//   const queryStr = 'SELECT * FROM sessions WHERE token = ?';
//   connection.query(queryStr, [token], (error, results) => {
//     if (error) {
//       callback(error);
//     } else {
//       callback(null, results);
//     }
//   });
// };

// const getUserId = callback => {
//   const queryStr = 'SELECT LAST_INSERT_ID()';
//   connection.query(queryStr, [], (error, results) => {
//     if (error) {
//       callback(error);
//     } else {
//       callback(null, results);
//     }
//   });
// };

// const searchCats = (username, name, id, callback) => {
//   const queryStr = 'SELECT * from cats WHERE (username = ?) OR (name = ?) OR (id = ?);';
//   connection.query(queryStr, [username, name, id], (error, results) => {
//     if (error) {
//       callback(error);
//     } else {
//       callback(null, results);
//     }
//   });
// };

module.exports = { addRestaurant, getRestaurants };
