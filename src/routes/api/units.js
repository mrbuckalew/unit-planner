import knex from "../../db.js";

export async function get(req, res) {
  // console.log(`UNITS ${JSON.stringify(req.session.units)}`);
  const units = await knex
    .from("units")
    .select("*")
    .whereIn("id", req.session.units);
  res.end(JSON.stringify(units));
}
