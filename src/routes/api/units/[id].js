import knex from "../../../db.js";

export async function get(req, res) {
  // console.log(`UNIT session ${JSON.stringify(req.session)}`);
  // if (req.session.units.indexOf(req.params.id) === -1) {
  //   res.end(JSON.stringify({ error: "Not authorized" }));
  // }
  const unit = await knex.from("units").first("*").where("id", req.params.id);
  const years = await knex.from("years").select("*").orderBy("endyear", "desc");
  const plans = await knex
    .from("unitdata")
    .select("fileID", "ayear", "outcomenumber", "outcometype", "outcome")
    .where("unit_id", req.params.id)
    .orderBy([
      { column: "ayear", order: "desc" },
      { column: "outcomenumber", order: "asc" },
    ]);
  res.end(JSON.stringify({ unit, years, plans }));
}
