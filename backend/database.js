const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient("mongodb://localhost:27017");
function Database() {
  return client.connect().then((dbase) => {
    var dbase1 = dbase.db("airlines");
    return dbase1;
  });
}

module.exports = Database;
