(function () {
  const quotes = [
    {
      quote:
        "Success usually comes to those who are too busy to be looking for it.",
      author: "Henry David Thoreau",
    },
    {
      quote: "Don't be afraid to give up the good to go for the great.",
      author: "John D. Rockefeller",
    },
    {
      quote: "I find that the harder I work, the more luck I seem to have.",
      author: "Thomas Jefferson",
    },
    {
      quote:
        "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
      author: "Jim Rohn",
    },
    {
      quote:
        "Success is walking from failure to failure with no loss of enthusiasm.",
      author: "Winston Churchill",
    },
    {
      quote:
        "If you are not willing to risk the usual, you will have to settle for the ordinary.",
      author: "Jim Rohn",
    },
    {
      quote:
        "The ones who are crazy enough to think they can change the world, are the ones that do.",
      author: "Steve Jobs",
    },
    {
      quote:
        "The successful warrior is the average man, with laser-like focus.",
      author: "Bruce Lee",
    },
    {
      quote:
        "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.",
      author: "Jim Rohn",
    },
    {
      quote:
        "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      author: "Albert Schweitzer",
    },
    {
      quote:
        "I never did anything worth doing by accident, nor did any of my inventions come indirectly through accident, except the phonograph. No, when I have fully decided that a result is worth getting, I go about it, and make trial after trial, until it comes.",
      author: "Thomas Edison",
    },
  ];
  const btn = document.getElementById("generate-btn");
  btn.addEventListener("click", () => {
    const random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[random].quote;
    document.getElementById("author").textContent = quotes[random].author;
  });
})();
