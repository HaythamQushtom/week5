const exp = require("express");
const app = exp();

app.get("/", function (get, res) {
    res.send("Hello");
});


app.listen(3000);