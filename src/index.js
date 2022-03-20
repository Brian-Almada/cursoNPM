const messages = [
  "Tania",
  "Izan",
  "Franco",
  "Denise",
  "Emma" 
];

const randomMsg = () => {
 const message = messages[Math.floor(Math.random() * messages.length)];
 console.log(message);
};

module.exports = { randomMsg };