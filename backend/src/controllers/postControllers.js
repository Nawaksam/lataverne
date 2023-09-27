// Import access to database tables
const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const posts = await tables.post.readAll();

    res.status(200).send(posts);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const item = req.body;

  try {
    const insertId = await tables.item.create(item);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  add,
};
