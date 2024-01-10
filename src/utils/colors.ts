interface ColorDefinition {
  value: string;
  character: string;
}

export function randomColor(name: string): ColorDefinition {
  // get first alphabet in upper case
  const firstAlphabet = name.charAt(0).toLowerCase();

  // get the ASCII code of the character
  const asciiCode = firstAlphabet.charCodeAt(0);

  // number that contains 3 times ASCII value of character -- unique for every alphabet
  const colorNum = asciiCode.toString() + asciiCode.toString() + asciiCode.toString();

  var num = Math.round(0xffffff * parseInt(colorNum));
  var r = num >> 16 & 255;
  var g = num >> 8 & 255;
  var b = num & 255;

  return {
    value: 'rgb(' + r + ', ' + g + ', ' + b + ', 0.5)',
    character: firstAlphabet.toUpperCase()
  };
}