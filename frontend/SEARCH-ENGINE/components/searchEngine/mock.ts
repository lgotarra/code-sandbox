const firstNames = [
  "Alex",
  "Taylor",
  "Jordan",
  "Morgan",
  "Casey",
  "Sam",
  "Jamie",
  "Riley",
  "Cameron",
  "Robin",
  "Avery",
  "Quinn",
  "Drew",
  "Skyler",
  "Elliot",
  "Rowan",
  "Hayden",
  "Reese",
  "Parker",
  "Sage",
];

const lastNames = [
  "Smith",
  "Johnson",
  "Brown",
  "Taylor",
  "Anderson",
  "Lee",
  "Martin",
  "White",
  "Clark",
  "Lewis",
  "Walker",
  "Hall",
  "Allen",
  "Young",
  "Hernandez",
  "King",
  "Wright",
  "Lopez",
  "Hill",
  "Scott",
];

const baseNames = firstNames.flatMap((first) =>
  lastNames.map((last) => `${first} ${last}`)
);

export const data: string[] = Array.from({ length: 1200 }, (_, i) => {
  const name = baseNames[i % baseNames.length];
  return `${name} ${Math.floor(i / baseNames.length) + 1}`;
});
