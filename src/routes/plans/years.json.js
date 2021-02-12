export async function get(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify([
      "2021-2022",
      "2020-2021",
      "2019-2020",
      "2018-2019",
      "2017-2018",
      "2016-2017",
      "2015-2016",
      "2014-2015",
      "2013-2014",
      "2012-2013",
      "2011-2012",
    ])
  );
}
