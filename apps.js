  
//  APP: Tip Calculator


const billTotalInput = document.getElementById("billTotalInput")
const tipInput = document.getElementById("tipInput")
const numberOfPeopleDiv = document.getElementById("numberOfPeople")
const perPersonTotalDiv = document.getElementById("perPersonTotal")

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {
    const bill = Number(billTotalInput.value)
    const tipPercantace = (tipInput.value)/100
    const tipAmount = bill*tipPercantace
    const total = tipAmount+bill
    const perPersonTotal = total / numberOfPeople
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}

const increasePeople = () => {
    numberOfPeople++
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
}

const decreasePeople = () => {
    if(numberOfPeople <= 1)
    {
        throw "you can not have less than 1 person!"
        return
    }
    numberOfPeople--
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
}
