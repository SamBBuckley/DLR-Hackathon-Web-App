function rollTimedPools() {
  require('../Connection').Connection.connectToMongo().then();

  let poolModel = require("../models/Pool");
  let userModel = require('../models/User');

  poolModel.find().then((pool) => {

    console.log("Attempting to bust any pool at time");
    pool.forEach(pool => {

      const oldDate = new Date(pool.lastRoll);
      if(pool.isTimed === true) { // This pool is timed

        if(new Date - oldDate >= 86400000) { // Ready to roll

          if(!pool.hasBusted) {
            let i = 0;
            pool.users.forEach(user => {
              // console.log("THE ID FOR THE USER WAS: " + user.id);
              user.balance -= pool.dailyCost;
              user._id = user.id
              userModel.findByIdAndUpdate(user.id, user).then(res => {
                console.log("Users were charged.\n")
              });
              pool.users[i] = user;
              ++i;
              pool.balance += pool.dailyCost;
            });

            // console.log("There was a pool ready to roll: " + pool._id)
            // console.log("\n\nUsers:\n" + pool.users + "\n\n");
            if(Math.random() * 100 <= pool.chanceToBust * 100) { // We DID bust

              pool.hasBusted = true;
              // Pick winner
              let winnerPos = Math.floor(Math.random() * pool.users.length);
              pool.winner = pool.users[winnerPos].email;
              console.log("\n" + pool.name.toUpperCase() + " has busted\n User: " + pool.winner +
                " has won a total of: " + pool.balance + "\n");
            }
          }
          pool.lastRoll = new Date; // Update roll time
          poolModel.findByIdAndUpdate(pool._id, pool).then(res => {
            console.log("A pool was rolled and updated in the database.\n")
          });
        }
      }
    });
  });
  setTimeout(rollTimedPools, 600000);
}

module.exports = rollTimedPools();
