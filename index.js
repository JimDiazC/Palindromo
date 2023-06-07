const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/verificar-palindromo", (req, res) => {
  const { palabra } = req.body;

  if (typeof palabra !== "string") {
    return res.status(404).json({ message: "No se pudo comprobar la palabra." });
  }

  const processedWord  = palabra.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversedWord  = processedWord .split("").reverse().join("");

  if (processedWord  === reversedWord ) {
    return res.status(200).json({ message: `${palabra} es una palabra Palíndroma.` });
  } else {
    return res.status(302).json({ message: `${palabra} no es una palabra Palíndroma.` });
  }
});

app.listen(port, () => {
  console.log("El servidor está escuchando en el puerto 3000.");
});
