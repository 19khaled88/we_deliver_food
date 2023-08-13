import express from "express";
import { adminRoutes, vendorRoutes } from "./routes/index";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/admin", adminRoutes);
app.use("/vendor", vendorRoutes);

app.listen(8000, () => {
	console.log("server running on port 8000");
});
