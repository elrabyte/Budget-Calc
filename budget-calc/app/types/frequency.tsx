export type Frequency = {
  id: string;
  name: string;
  toMonth: (cost: number) => number;
  toYear: (cost: number) => number;
};

const unkownFrequency: Frequency = {
  id: "unkown",
  name: "Unkown",
  toMonth: (cost) => cost,
  toYear: (cost) => cost,
};

export const Frequencies: Frequency[] = [
  {
    id: "daily",
    name: "Daily",
    toMonth: (cost) => cost * 30,
    toYear: (cost) => cost * 360,
  },
  {
    id: "weekly",
    name: "Weekly",
    toMonth: (cost) => (cost / 7) * 30,
    toYear: (cost) => (cost / 7) * 360,
  },
  {
    id: "monthly",
    name: "Monthly",
    toMonth: (cost) => cost,
    toYear: (cost) => cost * 12,
  },
  {
    id: "yearly",
    name: "Yearly",
    toMonth: (cost) => cost / 12,
    toYear: (cost) => cost,
  },
  {
    id: "biyearly",
    name: "Bi-Yearly",
    toMonth: (cost) => cost / 24,
    toYear: (cost) => cost / 2,
  },
];

export const getFrequency = (id: string): Frequency => {
  const frequency = Frequencies.filter((f) => f.id == id)[0];
  if (!frequency) {
    console.error(`frequency '${id}' not found!`);
    return unkownFrequency;
  }
  return frequency;
};
