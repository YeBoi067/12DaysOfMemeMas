/**
 * Found this on Stackoverflow https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * Shuffles array in place. ES6 version
 * @param {Array} a - An array containing the items.
 */
 const shuffle = (a: any[]) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = i;
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export type HatchType = {
  nr: number;
  img: string;
  text: string;
  open: boolean;
  link?: string;
}

export const hatchArray: HatchType[] = [
  {
    nr: 1,
    img: './img/1.png',
    text:
      'Coming soon...',
    open: false,
    link : "https://pump.fun/coin/8CWnACGPpiT9TKEBZY4sGYQJdws4g4a9oYPA8yampump"
  },
  {
    nr: 2,
    img: './img/1.png',
    text:
      'Coming soon...',
    open: false
  },
  {
    nr: 3,
    img: './img/1.png',
    text:
      "Coming soon...",
    open: false
  },
  {
    nr: 4,
    img: './img/1.png',
    text:
      "Coming soon...",
    open: false
  },
  {
    nr: 5,
    img: './img/1.png',
    text: 'Coming soon...',
    open: false
  },
  {
    nr: 6,
    img: './img/1.png',
    text: 'Coming soon...',
    open: false
  },
  {
    nr: 7,
    img: './img/1.png',
    text: 'Coming soon...',
    open: false
  },
  {
    nr: 8,
    img: './img/1.png',
    text: 'Coming soon...',
    open: false
  },
  {
    nr: 9,
    img: './img/1.png',
    text: "Coming soon...",
    open: false
  },
  {
    nr: 10,
    img: '../img/1.png',
    text:
      'Coming soon...',
    open: false
  },
  {
    nr: 11,
    img: '../img/1.png',
    text: "Coming soon...",
    open: false
  },
  {
    nr: 12,
    img: '../img/1.png',
    text:
      "Coming soon...",
    open: false
  }
];

export const createCalendar = ():HatchType[] => shuffle(hatchArray);
