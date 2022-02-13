function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const Amount = input.value;
    const calculations = parseFloat(Amount);
    input.value = '';
    return calculations;
}

// deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    // console.log(depositAmount);
    // get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const depositTotalinNumber = parseFloat(depositTotalText);
    // console.log(depositTotalText);
    depositTotal.innerText = depositAmount + depositTotalinNumber;

    // updateTotalField(depositAmount);

    // calculations in balance
    const balanceDetailsAfterDeposit = document.getElementById('balance-total');
    const balanceDetailsAfterDepositText = balanceDetailsAfterDeposit.innerText;
    const balanceDetailsAfterDepositNumber = parseFloat(balanceDetailsAfterDepositText);
    balanceDetailsAfterDeposit.innerText = balanceDetailsAfterDepositNumber + depositAmount;
})

// withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInputNumber = getInputValue('withdraw-input');
    const withdrawBalance = document.getElementById('withdraw-total');
    const withdrawBalanceText = withdrawBalance.innerText;
    const withdrawBalanceNumber = parseFloat(withdrawBalanceText);
    withdrawBalance.innerText = withdrawBalanceNumber + withdrawInputNumber;
    // update balace
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalNumber = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalNumber - withdrawInputNumber;
});