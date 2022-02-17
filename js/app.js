function input(inputAmount) {
    const totalInput = document.getElementById(inputAmount);
    const totalInputText = totalInput.value;
    const totalAmount = parseFloat(totalInputText);
    return totalAmount;

}


document.getElementById('calculate-btn').addEventListener('click', function () {
    // income Input fild 
    const incomeAmount = input('income-input');

    // food Input fild 
    const foodAmount = input('food-input')


    // rent input fild 
    const rentAmount = input('rent-input');

    // clothes input fild 
    const clothesAmount = input('clothes-input')


    // expenses total 
    const expensesTotal = document.getElementById('expenses-total');
    const expensesText = expensesTotal.innerText;
    const expensesTotalAmount = parseFloat(expensesText);


    expensesTotal.innerText = foodAmount + rentAmount + clothesAmount;
    console.log(expensesText);
})



