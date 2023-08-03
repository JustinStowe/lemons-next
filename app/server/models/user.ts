import { Schema, model } from "mongoose";
import { IUser } from "@/app/@types/global";
import bcrypt from "bcrypt";

const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true, lowercase: true, unique: true },
    password: { type: String, required: true, minLength: 6, trim: true },
    firstName: String,
    lastName: String,
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  this.password = await bcrypt.hash(this.password, salt);
  return next();
});

const User = model<IUser>("User", UserSchema);

export default User;
