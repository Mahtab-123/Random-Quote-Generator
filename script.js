const quotes = [
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Believe you can and you're halfway there.",
  "Your time is limited, so don’t waste it living someone else’s life.",
  "It always seems impossible until it’s done.",
  "Push yourself, because no one else is going to do it for you.",
  "Dream big. Start small. Act now.",
  "Discipline is choosing between what you want now and what you want most.",
  "Hard work beats talent when talent doesn’t work hard.",
  "Stay positive, work hard, make it happen.",
  "Do something today that your future self will thank you for.",
  "Don’t stop until you’re proud.",
  "Great things never come from comfort zones.",
  "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Don’t limit your challenges. Challenge your limits.",
  "Doubt kills more dreams than failure ever will.",
  "Start where you are. Use what you have. Do what you can.",
  "Stay focused and never give up.",
  "Work hard in silence, let success make the noise.",
  "The key to success is to focus on goals, not obstacles.",
  "Your only limit is your mind.",
  "Difficult roads often lead to beautiful destinations.",
  "Success is the sum of small efforts repeated daily.",
  "Don’t be afraid to fail. Be afraid not to try.",
  "You are stronger than you think.",
  "Action is the foundational key to all success.",
  "Make each day your masterpiece."
];



const button = document.querySelector("button")
const quote = document.querySelector("h1")



button.addEventListener('click',()=>{
    const index = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[index];
})