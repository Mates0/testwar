function getProgress(number) {
    if (number >= 0 && number <= 25) {
        console.log("Hledáme váš účet " + number + "%")
    }
    if (number >= 25 && number <= 50) {
        console.log("Přihlašujeme vás. " + number + "%")
    }
    if (number >= 50 && number <= 75) {
        console.log("Aplikace vykresluje vaše data. " + number + "%")
    }
    if (number >= 75 && number <= 100) {
        console.log("Už jen chvilku! " + number + "%")
    }
}

getProgress(40);

function compact(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            console.log(array[i])
        }
    }
}

compact([1, 0, 2, 5, true])

function goldDistribution(array) {
    let pavel = 0
    let petr = 0
    let temp = 0

    for (let i = 0; i < array.length; i++) {
        if (array[0] < array[array.length]) {
            array.pop()
            temp = array[array.length]
        } else {
            array.shift()
            temp = array[0]

        }

        if (i % 2)
            pavel += temp
        else
            petr += temp
    }
    return [petr, pavel]
}

console.log(goldDistribution([2,3,8,9]))