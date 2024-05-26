import mongoose from "mongoose";

const { Schema } = mongoose;
export interface MsgTypes {
  name: String;
  email: String;
  msg: String;
}
const MsgSchema = new Schema<MsgTypes>({
  name: String,
  email: String,
  msg: String,
});

export default mongoose.models.msgs || mongoose.model("msgs", MsgSchema);
