const express = require("express");

const app = express();

const toFind = Math.floor(Math.random() * 101);

console.log(toFind);

app.get("/", (req, res) => {
  // Les query sont TOUJOURS des strings
  const num = Number(req.query.num);

  if (num) {
    if (num > 100 || num < 0) {
      res.json({
        message: "Le nombre est compris entre 0 et 100",
      });
    } else {
      if (num > toFind) {
        res.json({
          result: "C'est moins !",
        });
      } else if (num < toFind) {
        res.json({
          result: "C'est plus !",
        });
      } else {
        res.json({
          result: "C'est gagné !",
        });
      }
    }
  } else {
    res.json({
      message: "Aucun nombre envoyé",
    });
  }
});

app.listen(3000, () => {
  console.log("server started");
});
