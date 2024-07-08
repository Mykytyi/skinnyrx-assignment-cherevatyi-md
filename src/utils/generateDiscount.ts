import { generate as generateWord } from 'random-words';

function generateRandomNumber() {
  const minLength = 4;
  const maxLength = 5;

  const min = Math.pow(10, minLength - 1); // Minimum number with minLength digits
  const max = Math.pow(10, maxLength) - 1; // Maximum number with maxLength digits

  // Generate a random number in the range [min, max]
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

const generateDiscount = () => {
  const word = (generateWord() as string).toUpperCase();
  const number = generateRandomNumber();

  return `${word}${number}`;
}

export default generateDiscount;
