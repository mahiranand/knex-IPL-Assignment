const highestDismissal = (db) => {
  return db
    .select("bowler", "batsman", "total_dismissals")
    .from(function () {
      this.select("batsman", "bowler")
        .count("bowler AS total_dismissals")
        .rank("myranking", db.raw("ORDER BY COUNT(bowler) DESC"))
        .from("Deliveries")
        .whereIn("dismissal_kind", ["lbw", "bowled", "caught"])
        .groupBy("batsman", "bowler")
        .as("innerTable");
    })
    .where("myranking", 1);
};
module.exports.highestDismissal = highestDismissal;
