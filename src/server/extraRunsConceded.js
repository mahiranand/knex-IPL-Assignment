const extraRunsConceded = (db) => {
  return db
    .select("bowling_team")
    .sum("extra_runs as total_extra_runs")
    .from("Deliveries")
    .join("Matches", "match_id", "=", "id")
    .where("season", "=", "2016")
    .groupBy("Bowling_Team");
};
module.exports.extraRunsConceded = extraRunsConceded;
