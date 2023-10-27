//Palindrom

const isPalindrome = (text) => {
  const lowText = text.toLowerCase();
  const reversedText = lowText.split('').reverse().join('');

  if (lowText === reversedText) {
    console.log(`${text}  adalah palindrom`);
  } else {
    console.log(`${text}  bukan palindrom`);
  }
}

isPalindrome('malam');

//Reverse word
const reverseWords = (sentence) => {
    const words = sentence.split(' ');
    const reversedWords = words.reverse();
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
  };
  

console.log(reverseWords('saya belajar Javascript'));