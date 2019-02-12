let orm = require("../config/orm.js");

let burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(result){
            cb(result);
        });
    },
    insertOne: function(cols,vals, cb){
        orm.insertOne("burgers", cols,vals, function(result){
            cb(result);
        });
    },
    updateOne: function(objColVals, condition, cb){
        orm.updateOne("burgers", objColVals,condition,function(result){
            cb(result);
        });
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
          cb(res);
        });
    }
};
module.exports = burger;