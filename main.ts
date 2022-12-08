let _0 = 0
let _1 = 0
let list: number[] = []
let n = 0
let a = 0
let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    _0 = 0
    _1 = 1
    list = []
    for (let index = 0; index < 25; index++) {
        list.push(_0)
    }
    n = 0
    while (n < 3) {
        a = randint(0, 24)
        if (list[a] == 0) {
            list[a] = _1
            n += 1
            數(a + 1)
        }
    }
})
function 數 (num: number) {
    if (num % 5 == 0) {
        x = 4
        y = Math.floor(num / 5) - 1
    } else {
        x = num / 5 - 1
        y = Math.floor(num / 5)
    }
    led.plot(x, y)
}
