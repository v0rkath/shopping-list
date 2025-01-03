import app from "./app";
import env from "./util/env";
import mongoose from "mongoose";

mongoose
  .connect(env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(env.PORT, () =>
      console.log(`Server running at: http://localhost:${env.PORT}`)
    );
  })
  .catch(console.error);
