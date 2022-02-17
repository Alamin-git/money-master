function inputValue(inputAmount) {
    const totalInput = document.getElementById(inputAmount);
    const totalInputText = totalInput.value;
    const totalAmount = parseFloat(totalInputText);
    return totalAmount;

}


document.getElementById('calculate-btn').addEventListener('click', function () {
    // income Input fild 
    const incomeAmount = inputValue('income-input');

    // food Input fild 
    const foodAmount = inputValue('food-input')


    // rent input fild 
    const rentAmount = inputValue('rent-input');

    // clothes input fild 
    const clothesAmount = inputValue('clothes-input')


    // expenses total 
    const expensesTotal = document.getElementById('expenses-total');
    const expensesText = expensesTotal.innerText;
    const expensesTotalAmount = parseFloat(expensesText);

    const totalExpenses = foodAmount + rentAmount + clothesAmount;
    expensesTotal.innerText = totalExpenses;

    // balance left update  
    const balaceLeft = document.getElementById('balance-left')
    const balanceLeftText = balaceLeft.innerText;
    const balaceLeftAmount = parseFloat(balanceLeftText);

    balaceLeft.innerText = incomeAmount - totalExpenses;
})



