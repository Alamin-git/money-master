// Input Function 
function inputValue(inputAmount) {
    const totalInput = document.getElementById(inputAmount);
    const totalInputText = totalInput.value;
    const totalAmount = parseFloat(totalInputText);
    return totalAmount;

};
// left balence calculation
function outputValue(idName, income, expenses) {
    const balaceLeft = document.getElementById(idName)
    const balanceLeftText = balaceLeft.innerText;
    const balaceLeftAmount = parseFloat(balanceLeftText);
    const laftAmount = income - expenses;
    balaceLeft.innerText = laftAmount;
    return laftAmount;
};
// expenses total calculation
function expenses(idName, food, rent, clothes) {
    const expensesTotal = document.getElementById(idName);
    const expensesText = expensesTotal.innerText;
    const expensesTotalAmount = parseFloat(expensesText);
    const totalExpenses = food + rent + clothes;
    expensesTotal.innerText = totalExpenses;
    return totalExpenses;
};


document.getElementById('calculate-btn').addEventListener('click', function () {
    // income Input fild 
    const incomeAmount = inputValue('income-input');

    // food Input fild 
    const foodAmount = inputValue('food-input')


    // rent input fild 
    const rentAmount = inputValue('rent-input');

    // clothes input fild 
    const clothesAmount = inputValue('clothes-input');


    // expenses total 
    const totalExpenses = expenses('expenses-total', foodAmount, rentAmount, clothesAmount);

    // balance left update
    const leftAmount = outputValue('balance-left', incomeAmount, totalExpenses);
});

document.getElementById('save-btn').addEventListener('click', function () {

    // saving percent fild 
    const savePercent = inputValue('percent-input');
    // total left balence 
    const leftAmount = outputValue('balance-left', inputValue('income-input'), expenses('expenses-total', inputValue('food-input'), inputValue('rent-input'), inputValue('clothes-input')));
    // total saving amount fild
    const saveing = document.getElementById('saving-amount');
    const savingAmountText = saveing.innerText;
    const totalSaveing = parseFloat(savingAmountText);
    // percent calculation 
    const totalSaveingAmount = (savePercent / 100) * leftAmount;
    saveing.innerText = totalSaveingAmount;

    // Remaining Balance calculation 
    const remainingTotal = document.getElementById('remaining-balance');
    const remainingTotalText = remainingTotal.innerText;
    const remainingBalance = parseFloat(remainingTotalText);
    const remainingTotalBalance = leftAmount - totalSaveingAmount;
    remainingTotal.innerText = remainingTotalBalance;


})



