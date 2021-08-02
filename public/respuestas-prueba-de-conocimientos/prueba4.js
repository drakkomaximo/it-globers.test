// 4. Si l: [3, 1, 2, 3, 4, 5] y k: 3, ¿qué valor retornará el algoritmo?

const value1 = [3, 1, 2, 3, 4, 5]
const value2 = 3
const removeKFromList = (l, k) => {
    if (!l || l == null) return l;
    const node = l;
    while (node.next != null) {
        if (node.value == k) {
            node.value = node.next.value;
            node.next = node.next.next;
            continue;
        }
        if (node.next.value == k && node.next.next == null) {
            node.next = null;
            break;
        } else {
            node = node.next;
        }
    }
    if (l.value == k && l.next == null) {
        return null
    }
    return l;
}

console.log(removeKFromList(value1, value2))


// R/:
// a. [1, 2, 4, 5]
// b. []
// c. 1
// d. [1, 2, 3, 4, 5]
// la respuesta no esta dentro de las opciones sugeridas, por el nombre de la funcion, deberia ser la 
// respuesta a, pero el codigo retorna el mismo array de entrada.