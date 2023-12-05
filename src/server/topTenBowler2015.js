const topTenBowler2015 = (db) => {
  return db
    .select("bowler")
    .select(
      db.raw(
        "SUM(batsman_runs+noball_runs+wide_runs)/COUNT(CASE WHEN wide_runs = 0 AND noball_runs = 0 THEN bowler END )*6 AS Economy"
      )
    )
    .from("Deliveries")
    .join("Matches", "match_id", "=", "id")
    .where("season", "2015")
    .groupBy("Bowler")
    .orderBy("Economy")
    .limit(10);
};
module.exports.topTenBowler2015 = topTenBowler2015;
