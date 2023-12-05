const matchesPerYear = (db) => {
  return db
    .select("season")
    .count("* AS total_matches")
    .from("Matches")
    .groupBy("season");
};
module.exports.matchesPerYear = matchesPerYear;
