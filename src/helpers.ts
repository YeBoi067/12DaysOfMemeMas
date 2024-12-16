/**
 * Found this on Stackoverflow https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * Shuffles array in place. ES6 version
 * @param {Array} a - An array containing the items.
 */

import image1 from './img/1.png';

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
    img: '/assets/1.png',
    text:
      'PERV',
    open: false,
    link : "https://pump.fun/coin/AkBdfe9xmdZukACyDkTyteMKPttpW8Nh4GmNhXfpump"
  },
  {
    nr: 2,
    img: '/assets/1.png',
    text:
      'Coming soon...',
    open: false,
    link : "https://pump.fun/coin/54JSCARBM3CcYcyiNdfpYbgmu4tUXQvBHkNkojiLpump"
  },
  {
    nr: 3,
    img: '/assets/1.png',
    text:
      "Coming soon...",
    open: false
  },
  {
    nr: 4,
    img: '/assets/1.png',
    text:
      "Coming soon...",
    open: false
  },
  {
    nr: 5,
    img: '/assets/1.png',
    text: 'Coming soon...',
    open: false
  },
  {
    nr: 6,
    img: '/assets/1.png',
    text: 'Coming soon...',
    open: false
  },
  {
    nr: 7,
    img: '/assets/1.png',
    text: 'Coming soon...',
    open: false
  },
  {
    nr: 8,
    img: '/assets/1.png',
    text: 'Coming soon...',
    open: false
  },
  {
    nr: 9,
    img: '/assets/1.png',
    text: "Coming soon...",
    open: false
  },
  {
    nr: 10,
    img: '/assets/1.png',
    text:
      'Coming soon...',
    open: false
  },
  {
    nr: 11,
    img: '/assets/1.png',
    text: "Coming soon...",
    open: false
  },
  {
    nr: 12,
    img: '/assets/1.png',
    text:
      "Coming soon...",
    open: false
  }
];

export const createCalendar = ():HatchType[] => shuffle(hatchArray);
