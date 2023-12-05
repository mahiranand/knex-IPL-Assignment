const bestSuperOverBowler = (db) => {
  return db
    .select("bowler")
    .select(
      db.raw(
        "SUM(batsman_runs+noball_runs+wide_runs)/COUNT(CASE WHEN wide_runs = 0 AND noball_runs = 0 THEN bowler END )*6 AS Economy"
      )
    )
    .from("Deliveries")
    .where("is_super_over", 1)
    .groupBy('bowler')
    .orderBy('Economy','asc')
    .limit(1);
};
module.exports.bestSuperOverBowler = bestSuperOverBowler;
