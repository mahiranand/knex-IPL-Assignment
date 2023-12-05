const tossAndMatchWin = (db) => {
  return db
    .select("winner")
    .count("winner AS total_times_toss_match_win")
    .from("Matches")
    .where("winner", db.raw("toss_winner"))
    .groupBy("winner");
};
module.exports.tossAndMatchWin = tossAndMatchWin;
