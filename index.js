const knex = require("knex");
const { matchesPerYear } = require("./src/server/matchesPerYear");
const { matchesPerTeamPerYear } = require("./src/server/matchesPerTeamPerYear");
const { extraRunsConceded } = require("./src/server/extraRunsConceded");
const { topTenBowler2015 } = require("./src/server/topTenBowler2015");
const { tossAndMatchWin } = require("./src/server/tossAndMatchWin");
const { playerOfEverySeason } = require("./src/server/playerOfEverySeason");
const { strikeRateOfBatsman } = require("./src/server/strikeRateOfBatsman");
const { highestDismissal } = require("./src/server/highestDismissal");
const { bestSuperOverBowler } = require("./src/server/bestSuperOverBowler");
require("dotenv").config();

const db = knex({
  client: `mysql2`,
  connection: {
    host: "localhost",
    user: "root",
    // eslint-disable-next-line no-undef
    password: process.env.PASSWORD,
    database: "Cricket",
  },
});

Promise.all([
  matchesPerYear(db),
  matchesPerTeamPerYear(db),
  extraRunsConceded(db),
  topTenBowler2015(db),
  tossAndMatchWin(db),
  playerOfEverySeason(db),
  strikeRateOfBatsman(db),
  highestDismissal(db),
  bestSuperOverBowler(db),
])
  .then((data) => {
    for(let i = 0; i < data.length; i++){
      console.log(`QUES ${i+1} => ANS`);
      console.log(data[i]);
      console.log('\n\n')
    }
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    db.destroy();
  });
