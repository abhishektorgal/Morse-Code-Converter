function convert() {
    var inputText = document.getElementById("input").value.trim();
    var outputTextarea = document.getElementById("output");
    
    // Check if the input is Morse code or English text
    if (/^[.-/ ]+$/.test(inputText)) {
      outputTextarea.value = morseToEnglish(inputText);
    } else {
      outputTextarea.value = englishToMorse(inputText.toUpperCase());
    }
  }
  
  function morseToEnglish(morse) {
    var morseCode = {
      ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E",
      "..-.": "F", "--.": "G", "....": "H", "..": "I", ".---": "J",
      "-.-": "K", ".-..": "L", "--": "M", "-.": "N", "---": "O",
      ".--.": "P", "--.-": "Q", ".-.": "R", "...": "S", "-": "T",
      "..-": "U", "...-": "V", ".--": "W", "-..-": "X", "-.--": "Y",
      "--..": "Z", ".----": "1", "..---": "2", "...--": "3", "....-": "4",
      ".....": "5", "-....": "6", "--...": "7", "---..": "8", "----.": "9",
      "-----": "0", "/": " "
    };
    
    return morse.split(" ").map(code => morseCode[code] || "").join("");
  }
  
  function englishToMorse(english) {
    var morseCode = {
      "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".",
      "F": "..-.", "G": "--.", "H": "....", "I": "..", "J": ".---",
      "K": "-.-", "L": ".-..", "M": "--", "N": "-.", "O": "---",
      "P": ".--.", "Q": "--.-", "R": ".-.", "S": "...", "T": "-",
      "U": "..-", "V": "...-", "W": ".--", "X": "-..-", "Y": "-.--",
      "Z": "--..", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
      "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
      "0": "-----", " ": "/"
    };
    
    return english.split("").map(char => morseCode[char] || "").join(" ");
  }
  