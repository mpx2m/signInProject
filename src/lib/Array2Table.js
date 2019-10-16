export default function Array2Table(array) {

    const emtyElement = { area: "-", goal: "-", situation: "-", achieve: "-", }

    const length = array.length

    const numberToAdd = length % 4 === 0 ? 0 : 4 - length % 4
    
    const newLength = length + numberToAdd

    Array(numberToAdd).fill("").forEach(item => array.push(emtyElement))

    const time = newLength / 4

    const reasult = Array(time).fill("").map((item, index) => array.slice(4 * index, 4 * (index + 1)))

    return reasult
}
