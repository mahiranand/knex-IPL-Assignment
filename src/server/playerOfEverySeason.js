const playerOfEverySeason = (db) => {
  return db
    .select("season", "player_of_match", "total")
    .from(function(){
      this.select("player_of_match", "season")
        .count("player_of_match AS total")
        .rank(
          "ranking",
          db.raw("PARTITION BY season ORDER BY COUNT(season) DESC")
        )
        .from("Matches")
        .groupBy("season", "player_of_match")
        .as("innerTable");
    })
    .where("ranking", "1");
};
module.exports.playerOfEverySeason = playerOfEverySeason;
