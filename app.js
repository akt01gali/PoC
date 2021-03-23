const app = require("express")();

const PORT = process.env.PORT || 3000;

app.get("", (req, res) => {
  res.send("Subdomain Takeover by akt01gali");
});

app.listen(PORT, () => {
  console.log(`App up at port ${PORT}`);
});
