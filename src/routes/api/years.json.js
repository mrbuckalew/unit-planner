import knex from "../../db.js";
// var row;

export async function get(req, res, next) {
  knex.from('years').select("*")
  .then((rows) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(rows));
  })
  .catch((err) => { console.error(err); throw err; })
  .finally(() => { knex.destroy(); })  
}
