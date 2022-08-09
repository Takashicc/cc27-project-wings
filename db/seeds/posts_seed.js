/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("posts").del();

  await knex.raw("ALTER SEQUENCE posts_post_id_seq RESTART WITH 1");

  await knex("posts").insert([
    {
      user_id: 5,
      post_date: "7/31/2022 12:00:00",
      updated_at: "7/31/2022 12:00:00",
      post_text:
        "Trying my best to get a job, y'all. Anyone want to do whiteboarding practice with me?",
    },
    {
      user_id: 2,
      post_date: "4/15/2022 12:00:30",
      updated_at: "4/15/2022 12:00:30",
      post_text: "Got a job! 🎉🎊🍾",
    },
    {
      user_id: 3,
      post_date: "7/15/2022 12:30:30",
      updated_at: "7/15/2022 12:30:30",
      post_text: "any tips for technical interviews?",
    },
    {
      user_id: 3,
      post_date: "7/17/2022 08:00:00",
      updated_at: "7/17/2022 08:00:00",
      post_text: "totally could use some interview practice... any takers?",
    },
    {
      user_id: 6,
      post_date: "6/22/2022 10:04:14",
      updated_at: "6/22/2022 10:04:14",
      post_text:
        "Hey everyone, I got a job at an amazing startup! Feel free to contact me and AMA.",
    },
    {
      user_id: 1,
      post_date: "1/1/2022 12:00:00",
      updated_at: "1/1/2022 12:00:00",
      post_text:
        "Welcome to Wings! The forum that helps current CC immersive students build a network with alumni.",
    },
    {
      user_id: 4,
      post_date: "7/27/2022 10:00:00",
      updated_at: "7/27/2022 10:00:00",
      post_text: "there's a cool career AMA this week, y'all. check it out!",
    },
    {
      user_id: 5,
      post_date: "8/1/2022 12:30:00",
      updated_at: "8/1/2022 12:30:00",
      post_text: "Anyone down to proofread my Linkedin profile? ",
    },
    {
      user_id: 5,
      post_date: "8/3/2022 14:00:00",
      updated_at: "8/3/2022 14:00:00",
      post_text:
        "Thanks to all who offered Linkedin help! You bunch are the best!! ❤️❤️❤️",
    },
    {
      user_id: 4,
      post_date: "8/4/2022 11:16:00",
      updated_at: "8/4/2022 11:16:00",
      post_text:
        "Digging into django this weekend. lmk if you're interested in pairing!",
    },
  ]);
};
