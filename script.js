// task - 1****************

let day = document.querySelector('#weekDay')

document.querySelector('#btn-date').onclick = function (params) {
    let enterDate = document.querySelector('#date').value;
    let days = [
        'Sunday',
        'Monday',
        'Thuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    let date = new Date(enterDate)
    day.innerHTML = days[date.getDay()] + ' ' + enterDate
}

//tsk - 2********************
document.querySelector('#cost').onclick = function () {
    let user = +prompt('user money', '')
    console.log(user)
    let first = +prompt('the cost of the first product ', '')
    let second = +prompt('the cost of the second product ', '')
    if (user || first || second == 0) {
        return alert('інше');
    }
    let result = first + second
    if (user > result) {
        alert('користувач може купити обидва товари')
    } else if (user > first || user > second) {
        alert('користувач може купити один з товарів ')
    } else {
        alert('користувач не може купити жоден товар')
    }
}

// task - 3*********************
let totalSum = document.querySelector('#total')
document.querySelector('#sum').onclick = function () {

    let sum = []
    while (sum.length < 10) {
        let one = +prompt('enter a number', '')
        sum.push(one)
    }
    let result = sum.reduce((a, b) => (a + b), 0)
    totalSum.innerHTML = 'result = ' + result + '<br/>' + 'Arr numer = [ ' + sum + ' ]'
}
// task - 4****************
document.querySelector('#costSum').onclick = function () {
    let valueUAH = document.querySelector('#totalValue')

    let sum = []
    while (sum.length < 3) {
        let one = +prompt('enter a number', '')
        sum.push(one)
    }
    let resultABC = sum.map((item, i, arr) => arr[i] + ' = ' + item / 24.5 + ' <br/>')
    valueUAH.innerHTML = resultABC
}

// last task

class Range {
    constructor(min, max) {
        this.min = min;
        this.max = max
    };
    value(number) {
        if (this.min < number && number < this.max) {
            console.log('ok')
            this.getRandomInt()
        } else {
            console.log('nok')
            return document.querySelector('.checkNumber-result').innerHTML = 'your number very low';
        }
    };
    getRandomInt() {
        return document.querySelector('.checkNumber-result').innerHTML = (Math.floor(Math.random() * (this.max - this.min)) + this.min)

    }
}
let check = document.querySelector('#checkNumber-btn')
check.onclick = function (min, max) {
    let limit = new Range(document.querySelector('#min'), document.querySelector('#max'))
    limit.value(document.querySelector('#checkNumber'))

}