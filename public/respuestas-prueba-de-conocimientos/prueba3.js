// 3. Si a: [2, 1, 3, 5, 3, 2], ¿qué valor retornará el algoritmo?

const value = [2, 1, 3, 5, 3, 2]
const firstDuplicate = (a) =>{
    r = new Set()
    for (e of a) {
        if (r.has(e)) {
            return e
        } else {
            r.add(e)
        }
    }
    return -1
}

console.log(firstDuplicate(value))


// R/:
// a. [3,3]
// b. 5
// c. El algoritmo posee un bug, por lo que retornará un error
// d. 3 ---- respuesta correcta