// function rollTimedPools() {
//   require('../Connection').Connection.connectToMongo().then();
//
//   let poolModel = require("../models/Pool");
//
//   poolModel.find().then((pools) => {
//
//     console.log("Attempting to bust any pools at time");
//     pools.forEach(pool => {
//       console.log(pool);
//       return;
//       if(pool.isTimed == true) { // This pool is timed
//         console.log("TIME SINCE LAST ROLL: ", new Date - pool.lastRoll);
//         if(new Date - pool.lastRoll >= 86400000) { // Ready to roll
//           // Last roll was a day or more ago
//           console.log("There was a pool ready to roll: " + pool._id)
//           if(Math.random() * 1000 <= pool.chanceToBust * 1000) { // We DID bust
//             console.log("It busted\n")
//             pool.hasBusted = true;
//             // Pick winner
//             let winnerPos = Math.floor(Math.random() * pool.users.size);
//             console.log(winnerPos);
//
//             let i = 0;
//             pool.users.forEach(user => {
//               if(i === winnerPos) {
//                 pool.winner = user.name;
//                 console.log(pool.winner);
//               }
//               ++i;
//             });
//             pool.lastRoll = new Date; // Update roll time
//             poolModel.findByIdAndUpdate(pool._id, pool);
//           } else { // We DID NOT bust
//             pool.lastRoll = new Date; // Update roll time
//             poolModel.findByIdAndUpdate(pool._id, pool); // Save to db and continue to next roll
//             console.log("It didn't bust\n")
//
//           }
//         }
//       }
//     });
//   });
//   setTimeout(rollTimedPools, 600000);
// }
//
// module.exports = rollTimedPools();
