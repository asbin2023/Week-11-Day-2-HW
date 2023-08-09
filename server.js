const express = require("express");
const app = express();

let bottle = 99;
app.get("/", (req, res) => {
  res.send(
    `<h1>${bottle} Bottles of beer on the wall</h1><a href='http://localhost:3000/${
      bottle - 1
    }'>take one down, pass it around</a>`
  );
});

app.get("/:bottleNum", (req, res) => {
  let bottleNum = Number(req.params.bottleNum);
  bottleNum < 1
    ? res.send(
        `<h1>Game Over!</h1> <h2>Play Again? </h2> <a href="http://localhost:3000">Cick here to play again!</a>`
      )
    : res.send(
        `<h1>${bottleNum} Bottles of beer on the wall</h1><a href='http://localhost:3000/${
          bottleNum - 1
        }'>take one down, pass it around</a>`
      );
});

app.listen(3000, console.log("runnning at 3000"));
