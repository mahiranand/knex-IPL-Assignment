const matchesPerTeamPerYear = (db) => {
  return db
    .select("winner", "season")
    .count("* as total_times")
    .from("Matches")
    .whereNot("winner", "")
    .groupBy("season", "winner")
    .orderBy("winner")
    .orderBy("season");
};
module.exports.matchesPerTeamPerYear = matchesPerTeamPerYear;
