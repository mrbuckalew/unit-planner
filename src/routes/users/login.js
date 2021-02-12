import crypto from "crypto";

export async function post(req, res, next) {
  const body = req.body.pwd;
  if (body !== "5427") {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 403;
    res.end(JSON.stringify({ error: "Not Authorized" }));
  }

  res.setHeader("Content-Type", "application/json");
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const sess_id = crypto.randomBytes(16).toString("base64");
  res.setHeader(
    "Set-Cookie",
    `plannersession=${sess_id}; expires=${tomorrow.toUTCString()}`
  );
  res.end(
    JSON.stringify({
      name: "Doss Buckalew",
      units: [{ name: "Computer Science", number: "015105" }],
    })
  );
}
