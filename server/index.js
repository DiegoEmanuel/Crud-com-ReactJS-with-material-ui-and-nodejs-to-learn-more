const express = require("express"); //contribui na criação d rotas, gerencia requisicoes http
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "bd_jurify",
});
app.use(cors());

app.use(express.json());

app.put("/edit", (req, res) => {
  const { id } = req.body;
  const { name } = req.body;
  const { oab } = req.body;
  const { cost } = req.body;
  const { area } = req.body;

  let SQL =
    "UPDATE register_advogados SET name = ?, oab= ? , cost = ? , area= ? WHERE id=?";

  db.query(SQL, [name, oab, cost, area, id], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.post("/register", (req, res) => {
  const { name } = req.body;
  const { oab } = req.body;
  const { cost } = req.body;
  const { area } = req.body;

  let SQL =
    "INSERT INTO register_advogados (name, oab, cost, area) VALUES (?,?,?,?)";
  db.query(SQL, [name, oab, cost, area], (err, result) => {
    if (err) console.log(err);
    else {
      res.send(result);
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  let SQL = "DELETE from register_advogados WHERE id = ? ";
  db.query(SQL, [id], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.get("/getCards5", (req, res) => {
  let SQL = "SELECT * from register_advogados order by id desc limit 5";
  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.get ("/getCards", (req,res) =>{
    let SQL = "SELECT * from register_advogados";
    db.query(SQL, (err, result) => {
      if (err) console.log(err);
      else res.send(result);
    });
})

app.listen(3001, () => {
  console.log("rodando servidor");
});
