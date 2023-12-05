const strikeRateOfBatsman = (db) => {
  return db
    .select("season", "batsman")
    .select(
      db.raw(
        "SUM(batsman_runs)/COUNT(CASE WHEN wide_runs = 0 AND noball_runs = 0 THEN batsman END)*100 AS strike_rate"
      )
    )
    .from('Deliveries').join('Matches','match_id','=','id')
    .where('batsman','DA Warner')
    .groupBy('season','batsman');
};
module.exports.strikeRateOfBatsman = strikeRateOfBatsman;
