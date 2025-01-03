export type Frequency = {
  name: string;
  toMonth: (cost: number) => number;
  toYear: (cost: number) => number;
};
export const Frequencies: Frequency[] = [
  {
    name: "Daily",
    toMonth: (cost) => cost * 30,
    toYear: (cost) => cost * 360,
  },
  {
    name: "Weekly",
    toMonth: (cost) => (cost / 7) * 30,
    toYear: (cost) => (cost / 7) * 360,
  },
  {
    name: "Monthly",
    toMonth: (cost) => cost,
    toYear: (cost) => cost * 12,
  },
  { name: "Yearly", toMonth: (cost) => cost / 12, toYear: (cost) => cost },
  {
    name: "Bi-Yearly",
    toMonth: (cost) => cost / 24,
    toYear: (cost) => cost / 2,
  },
];
