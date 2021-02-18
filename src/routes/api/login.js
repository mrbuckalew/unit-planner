// import crypto from "crypto";
import knex from "../../db.js";

// export async function post(req, res, next) {
//   const body = req.body.pwd;
//   try {
//     const user = await knex.from("staff").where("extension", body).first("*");
//     console.log(`User: ${JSON.stringify(user)}`);
//     if (user) {
//       var units = await knex
//         .from("leaders")
//         .where("staff", user.id)
//         .select("unit");
//       units = units.map((unit) => unit.unit);
//       user.units = units;
//       // console.log(`Units: ${JSON.stringify(units)}, ${JSON.stringify(user)}`);
//     }
//     res.setHeader("Content-Type", "application/json");
//     let tomorrow = new Date();
//     tomorrow.setDate(tomorrow.getDate() + 1);
//     const sess_id = crypto.randomBytes(16).toString("base64");
//     res.setHeader(
//       "Set-Cookie",
//       `plannersession=${sess_id}; expires=${tomorrow.toUTCString()}`
//     );
//     res.end(JSON.stringify({ user }));
//   } catch (err) {
//     console.error(err);
//     res.setHeader("Content-Type", "application/json");
//     res.statusCode = 403;
//     res.end(JSON.stringify({ error: "Not Authorized" }));
//   }
// }

// import fetch from "node-fetch";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export async function post(req, res) {
  console.log("POSTING");
  try {
    const { pwd } = req.body;

    // console.log(`SESSION ${req.session.id}`);

    const user = await knex.from("staff").where("extension", pwd).first("*");
    // console.log(`User: ${JSON.stringify(user)}`);
    if (user) {
      var units = await knex
        .from("leaders")
        .where("staff", user.id)
        .select("unit");
      units = units.map((unit) => unit.unit);
      user.units = units;
      req.session.name = `${user.first_name} ${user.last_name}`;
      req.session.units = units;
      res.end(JSON.stringify({ token: req.session.id }));
    } else {
      res.end(JSON.stringify({ error: "No such user" }));
    }
  } catch (error) {
    res.end(JSON.stringify({ error: error.message }));
  }
}
