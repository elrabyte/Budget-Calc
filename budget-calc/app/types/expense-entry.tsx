import { Frequency } from "./frequency";

export type ExpenseEntry = {
  category: string;
  description: string;
  frequency: Frequency;
  payment_account: string;
  price: number;
};
