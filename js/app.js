function input() {
    const totalInput = document.getElementById('income-input');
    const totalInputText = totalInput.value;
    const totalAmount = parseFloat(totalInputText);
    return totalAmount;

}


document.getElementById('calculate-btn').addEventListener('click', function () {
    // income Input fild 
    const totalAmount = input();

    // food Input fild 
    const foodInput = document.getElementById('food-input');
    const foodInputText = foodInput.value;
    const foodAmount = parseFloat(foodInputText);

    // rent input fild 
    const rentInput = document.getElementById('rent-input');
    const rentInputText = rentInput.value;
    const rentAmount = parseFloat(rentInputText);


    // expenses total 
    const expensesTotal = document.getElementById('expenses-total');
    const expensesText = expensesTotal.innerText;
    const expensesTotalAmount = parseFloat(expensesText);


    expensesTotal.innerText = foodAmount + rentAmount;
    console.log(expensesText);
})



