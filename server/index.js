const express = require("express");
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
app.post("/register", (req, res) => {
  const { name } = req.body;
  const { oab } = req.body;
  const { cost } = req.body;
  const { area } = req.body;

  let SQL =
    "INSERT INTO register_advogados (name, oab, cost, area) VALUES (?,?,?,?)";
  db.query(SQL, [name, oab, cost, area], (err, result) => {
    console.log(err);
  });
});
app.get("/getCards",(req,res)=>{
  let SQL = "SELECT * from register_advogados";
  db.query(SQL,(err, result)=>{
    if(err)console.log(err)
    else res.send(result);
  })
})
app.listen(3001, () => {
  console.log("rodando servidor");
});
