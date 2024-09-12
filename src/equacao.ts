export class Equacao2Grau {

    constructor(private a: number, private b: number, private c: number) {}

    private calcularDelta() {
        const b2 = Math.pow(this.b, 2)
        const ac4 = 4 * this.a * this.c
        return Math.sqrt(b2 - ac4)
    }

    private calcularBascara(delta: number) {
        return (-this.b + delta) / 2 * this.a
    }

    public calcular() {
        const delta = this.calcularDelta()
        const raiz1 = this.calcularBascara(delta)
        const raiz2 = this.calcularBascara(-delta)
        return [raiz1, raiz2]
    }

}