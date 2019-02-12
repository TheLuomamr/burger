let connection = require("../config/connection.js");

function printQuestionMarks(number) {
  let arr = [];
  for (let i = 0; i < number; i++) {
      arr.push("?");
  }
  return arr.toString();
}
function objToSql(object) {
  let arr = [];
  for (let key in object) {
      arr.push(key + "=" + object[key]);
  }
  return arr.toString();
}

let orm = {
    selectAll: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(table, cols, vals, cb) {
        let queryString = " INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
  
    updateOne: function(table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    delete: function(table, condition, cb) {
        let queryString = " DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    },
};
module.exports = orm; 