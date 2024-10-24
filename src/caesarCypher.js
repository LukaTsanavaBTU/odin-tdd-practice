const ALPHABETLOWER = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const ALPHABETUPPER = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function caesarCypher(str, shift) {
    shift = shift % 26;
    const shiftedLower = ALPHABETLOWER.concat(ALPHABETLOWER).slice(shift, ALPHABETLOWER.length + shift);
    const shiftedUpper = shiftedLower.map((char) => char.toUpperCase());
    const shifted = shiftedLower.concat(shiftedUpper);
    const key = ALPHABETLOWER.concat(ALPHABETUPPER)
    .reduce((total, value, index) => {
        total[value] = shifted[index];
        return total;
    }, {});
    const encoded = [...str].map((char) => {
        if (/[a-zA-Z]/.test(char)) {
            return key[char];
        } 
            return char;
        }).join("");
    return encoded;
}

export default caesarCypher;