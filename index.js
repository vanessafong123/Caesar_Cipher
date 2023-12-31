const btnEncrypt = document.querySelector('#encrypt');
const btnDecrypt = document.querySelector('#decrypt');
const keyInput = document.querySelector('#key');
const textarea = document.querySelector('#text');

const listLetters = 'abcdefghijklmnopqrstuvwxyz';

  // input upper case
function caesarCipherEncrypt(plaintext, shift) {
  return plaintext
    .split('')
    .map((char) => {
      if (!listLetters.includes(char.toLowerCase())) {
        return char;
      }

      const isUpperCase = char === char.toUpperCase();
      const charIndex = listLetters.indexOf(char.toLowerCase());
      let newIndex = (charIndex + shift) % 26;

      if (newIndex < 0) {
        newIndex += 26;
      }

      if (isUpperCase) {
        return listLetters[newIndex].toUpperCase();
      }
      return listLetters[newIndex];
    })
    .join('');
}

function caesarCipherDecrypt(ciphertext, shift) {
  return caesarCipherEncrypt(ciphertext, -shift);
}

btnEncrypt.addEventListener('click', () => {
  const shiftValue = parseInt(keyInput.value, 10);
  const encryptedText = caesarCipherEncrypt(textarea.value, shiftValue);
  textarea.value = encryptedText;
  if (textarea.value.trim() === '') {
    alert('The textbox below is blank, please enter some text.');
    return;
  }
});

btnEncrypt.addEventListener('click', () => {
  const shiftValue = parseInt(keyInput.value, 10);
  const inputText = textarea.value.trim();

  // input contains letters
  if (!/^[a-zA-Z]+$/.test(inputText)) {
    alert('Please enter text only.');
    return;
  }

  const encryptedText = caesarCipherEncrypt(inputText, shiftValue);
  textarea.value = encryptedText;
});


btnDecrypt.addEventListener('click', () => {
  const shiftValue = parseInt(keyInput.value, 10);
  const decryptedText = caesarCipherDecrypt(textarea.value, shiftValue);
  textarea.value = decryptedText;
});
