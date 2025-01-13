import app from "./app";
import env from "./util/env";
import mongoose from "mongoose";

const port = env.PORT || 5000;

mongoose
  .connect(env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(port, () =>
      console.log(`Server running at: http://localhost:${port}`)
    );
  })
  .catch(console.error);
