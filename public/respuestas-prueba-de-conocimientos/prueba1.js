// 1 . Si a: [6, 7, 3, 8] ¿cuál será el valor final de res?

const value = [6,7,3,8]
const nextLarger = (a) =>{
    const res = []
    for (let i = 0; i < a.length; i++) {
        let currNum = a[i]
        for (let n = i; n < a.length; n++) {
            if (a[n] > currNum) {
                res.push(a[n])
                break
            } else if ( n === a.length - 1){
                res.push(-1)
            }
            
        }
    }
    return res
}

console.log(nextLarger(value))


// R/:
// a. [-1]
// b. [7,8,6,-1]
// c. [7,8,8,-1] ---- respuesta correcta
// d. [7,8,-1]