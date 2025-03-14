
function calcularDelta(a: number, b: number, c: number) {
    const b2 = Math.pow(b, 2)
    const ac4 = 4 * a * c
    return Math.sqrt(b2 - ac4)
}

function calcularBascara(delta: number, a: number, b: number) {
    return (-b + delta) / (2 * a)
}

export function calcularEquacao2grau(a: number, b: number, c: number) {
    const delta = calcularDelta(a, b, c)
    const raiz1 = calcularBascara(delta, a, b)
    const raiz2 = calcularBascara(-delta, a, b)
    return [raiz1, raiz2]
}
