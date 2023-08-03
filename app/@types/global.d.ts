import { Document, Types } from "mongoose";
import { JSXElementConstructor, ReactNode } from "react";

export interface IUser extends Document {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}
