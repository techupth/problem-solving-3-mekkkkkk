// Exercise 1: Length of Last Word

const lengthOfLastWord = function (s) {
  let countWord = "";
  console.log(s.length);
  console.log(s);

  for (let i = s.length - 1; i >= 0; i--) {
    console.log(s[i]);
    console.log(countWord)

    if (s[i] !== " ") {
      countWord += s[i];
    } else if(countWord !== ""){
      break
    }
  }
  return countWord.length;
};

  const result1 = lengthOfLastWord("Hello World");
  const result2 = lengthOfLastWord("   fly me   to   the moon  ");
  const result3 = lengthOfLastWord("luffy is still joyboy");

  console.log(result1); // 5
  console.log(result2); // 4
  console.log(result3); // 6


