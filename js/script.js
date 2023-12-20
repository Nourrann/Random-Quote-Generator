quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },
  {
    quote:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    author: "― Marilyn Monroe",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "― Albert Einstein",
  },
  {
    quote: "“So many books, so little time.”",
    author: "― Frank Zappa",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    author: "― Marcus Tullius Cicero",
  },
  {
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author: "― Bernard M. Baruch",
  },
  {
    quote:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    author: "― Dr. Seuss",
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    author: "― Mae West",
  },
  {
    quote: "“Be the change that you wish to see in the world.”",
    author: "― Mahatma Gandhi",
  },
  {
    quote: "“If you tell the truth, you don't have to remember anything.”",
    author: "― Mark Twain",
  },
  {
    quote: "“A friend is someone who knows all about you and still loves you.”",
    author: "― Elbert Hubbard",
  },
  {
    quote:
      "“It is better to be hated for what you are than to be loved for what you are not.”",
    author: "― Andre Gide",
  },
];

var rand;
var oldRand = -1;
function randCodeGenerator() {
  rand = Number(Math.floor(Math.random() * quotes.length));

  if (rand != oldRand) {
    document.getElementById("quote").innerHTML = quotes[rand].quote;
    document.getElementById("quoteAuthor").innerHTML = quotes[rand].author;
    oldRand = rand;
  } else {
    while (rand == oldRand) {
      rand = Number(Math.floor(Math.random() * quotes.length));
    }
    document.getElementById("quote").innerHTML = quotes[rand].quote;
    document.getElementById("quoteAuthor").innerHTML = quotes[rand].author;
  }
  console.log(rand);
  console.log(oldRand);
}
