import { connect } from "../database";

export const getTasks = async (req, res) => {
  //const [rows] = await connect().query('SELECT * FROM tasks')
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM tasks");
//  console.log(rows);
  //   res.send("Get Tasks");
  res.json(rows);
};
export const getTask = async (req, res) => {
  //console.log(req.params.id);
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM tasks WHERE id = ?", [
    req.params.id,
  ]);
//  console.log(rows[0]);
  res.json(rows[0]);
  //res.send("Get Tasks");
};
export const getTaskCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT COUNT(*) FROM tasks");
  // console.log(rows);
  res.json(rows[0]["COUNT(*)"]);
  //res.send("Get Tasks");
};
export const createTask = async (req, res) => {
  const connection = await connect();
  //   const [rows] = await connection.query(
  //     "INSERT INTO tasks (title, description) VALUES (?, ?)",
  //     [req.body.title, req.body.description]
  //   );
  const [results] = await connection.query(
    "INSERT INTO tasks (title, description) VALUES (?, ?)",
    [req.body.title, req.body.description]
  );
  //console.log(results);
  res.json({
    id: results.insertId,
    ...req.body,
  });
  //res.send("Get Tasks");
};
export const deleteTask = async (req, res) => {
  const connection = await connect();
  //const [results] = await connection.query("DELETE FROM tasks WHERE id = ?", [req.params.id]);
  //const results = await connection.query("DELETE FROM tasks WHERE id = ?", [req.params.id]);
  await connection.query("DELETE FROM tasks WHERE id = ?", [req.params.id]);
  res.sendStatus(204);
  //  res.send("Get Tasks");
};
export const updateTask = async (req, res) => {
  const connection = await connect();
  const results = await connection.query("UPDATE tasks SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);
  //console.log(results);
  res.sendStatus(204);
};
