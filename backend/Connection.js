const mongoose = require('mongoose');

class Connection {
  static connectToMongo() {
    if ( this.db ) return Promise.resolve(this.db)
    return mongoose.connect(this.url, this.options)
      .then(db => this.db = db.connection)
      .catch(err => {
        console.log("\nError Connecting to the database:");
        console.log(err);
      });
  }

}

Connection.db = null;
// This database connection is using a free mongo atlas node, in a prod env although workable should probably be a permanent node hosted somewhere
Connection.url = 'mongodb+srv://admin:rb6lQtERfcKa7Jp3@dlr-cluster.n2m4w.mongodb.net/DLR-BASE?retryWrites=true&w=majority'

Connection.options = { useNewUrlParser: true };

module.exports = { Connection }
