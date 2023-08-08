import { Document, Types } from "mongoose";
import { JSXElementConstructor, ReactNode } from "react";

export interface IUser extends Document {
  _id: string;
  email: string;
  password: string;
}
export interface IFormData {
  email: string;
  password: string;
  confirm: string;
  error: string;
}
