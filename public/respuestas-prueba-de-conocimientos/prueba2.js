// 2. ¿Qué valor tiene que ir en lugar de los puntos suspensivos del código?, sabiendo que: Una oración
// se considera correcta si: - Comienza con una letra mayúscula - Termina con un punto final, signo de
// interrogación o signo de exclamación ('.', '?' o '!') - El punto final, los signos de interrogación y los
// signos de exclamación no aparecen en ningún otro lugar de la oración - Dada una oración, devuelve
// verdadero si es correcto y falso de lo contrario Ejemplo Para frase = "Este es un ejemplo de *
// correcta * oración." la salida debe ser: isSentenceCorrect (oración) = verdadero Para la oración = "!
// Esta oración es TOTALMENTE incorrecta" la salida debe ser: isSentenceCorrect (oración) = falso

const customRegExp = /^[A-Z][^.?!]*[.?!]$/
const customSentenceTrue = 'Este es un ejemplo de *correcta * oración.'
const customSentenceFalse = '!Esta oración es TOTALMENTE incorrecta'
const isSentenceCorrect = (sentence) =>{
    const regExp = customRegExp
    return regExp.test(sentence)
}

console.log(isSentenceCorrect(customSentenceTrue), 'debe ser true')
console.log(isSentenceCorrect(customSentenceFalse), 'debe ser false')


// R/:
// a. ^[A-Z][^.?!][.?!]
// b. [A-Z][.?!][.?!]$
// c. /^[A-Z][^.?!]*[.?!]$/ ---- respuesta correcta
// d. [A-Z][.?!]*[.?!]$