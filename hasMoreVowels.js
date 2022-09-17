const Vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

const hasMoreVowels = (word) => {
    let wordArr = word.split('');
    let vowelCount = 0;
    for (let i = 0; i < wordArr.length; i++) {
        if (Vowels.includes(wordArr[i])) {
            vowelCount++;
        }
        else {
            vowelCount--;
        }
    }
    if (vowelCount > 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(hasMoreVowels('asdf'));
console.log(hasMoreVowels('awui'));
console.log(hasMoreVowels('Kirito'));
console.log(hasMoreVowels('Akion'));
console.log(hasMoreVowels('Totally'));
