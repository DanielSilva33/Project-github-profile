import express from "express";
import { route } from "./routes/index";

const app = express();
app.use(express.json());
app.use(route);

app.listen(3333, () => {
    console.log("Server is running on PORT 3333");
});
