export async function get(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify([
      {
        label: "Goal 1",
        text:
          "Provide student's comprehensive and accessible instructional opportunities through community based education, dual enrollment, academic transfer, technical education, health science, and work force development programs.",
      },
      {
        label: "Goal 2",
        text:
          "Assist students in overcoming deficiences and acquiring skills fundamental to further academic and career achievement.",
      },
      {
        label: "Goal 3",
        text:
          "The College, through its Student Services and Student Development Divisions, will provide academic support services to assist students and maximize student potential in attaining their education and career goals.",
      },
      {
        label: "Goal 4",
        text:
          "Maintain excellence as the guiding principle for staffing and programming.",
      },
      {
        label: "Goal 5",
        text:
          "Maintain and establish relationships with other educational institutions, public and social agencies, and business and industry.",
      },
      {
        label: "Goal 6",
        text:
          "Maintain systematic participation of the college staff in comprehensive institutional planning, management, and evaluation of college operations.",
      },
      {
        label: "Goal 7",
        text:
          "Promote educational, cultural, and recreational enrichment of the community by extending college facilities and offering resources to the community.",
      },
      { label: "Local", text: "Local Goal Generated by the Unit" },
    ])
  );
}