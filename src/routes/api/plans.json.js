import knex from "../../db.js";

export async function get(req, res, next) {
  try {
    var data = await knex.from('unitdata').select("*");
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  } catch (err) {
    console.error(err);
    next();
  }
}