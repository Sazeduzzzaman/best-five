//Genarate Input Value To Number
function getInputValues(inputValue) {
    const getInputElement = document.getElementById(inputValue);
    const getInputValue = getInputElement.value;
    const convertInputValue = parseInt(getInputValue);
    return convertInputValue;
}
//Genarate InnerText To Number
function getElementText(elementId) {
    const getElementValue = document.getElementById(elementId);
    const getElementsText = getElementValue.innerText;
    const convertElementText = parseInt(getElementsText);

    return convertElementText;
}
//Genarate Plus Amount
function getPlusAmount(a , b) {
    const total =  a + b;
    return total;
}
function ifFieldEmpty(inputField) {
    if (inputField.value == '') {
        alert('Input Field Is Empty & Auto Reload')
        return window.location.reload();
    }
}


document.getElementById('player-cost').addEventListener('click', function(){
    const playerInputCost = getInputValues('player-cost-field'); // Player Cost Input Field 1000
    const playerElementCost =  getElementText('player-total-cost'); // Total Player Cost Element

    // Total Player Cost
    const getPlayerCost = playerInputCost * 5;

    const getPlayerTotalCost = document.getElementById('player-total-cost');
    const getplayerCostAmount = getPlusAmount(playerElementCost , getPlayerCost);
    getPlayerTotalCost.innerText = getplayerCostAmount;// Displaye Player Total Cost
})

document.getElementById('total-cost').addEventListener('click', function(){
    const getTrainFieldValue = getInputValues('tainer-cost-field');
    const getCoachFieldValue = getInputValues('coach-cost-field');
    const getTCValue = getPlusAmount(getTrainFieldValue , getCoachFieldValue); // Extra Cost Total


    const getPlayerTotalValue = getElementText('player-total-cost');

    const getTotalCost = getPlusAmount(getPlayerTotalValue , getTCValue);

    const getTeamTotalCost = document.getElementById('total-team-cost');
    const getTeamValus = getElementText('total-team-cost');
    const finalTotalCost = getPlusAmount(getTeamValus , getTotalCost);
    getTeamTotalCost.innerText = finalTotalCost;

})
document.getElementById('total-cost').addEventListener('click', function(){
    const getTrainerCostField = document.getElementById('tainer-cost-field');
    const getTaineField = ifFieldEmpty(getTrainerCostField);
})
document.getElementById('total-cost').addEventListener('click', function(){
    const getTrainerCostField = document.getElementById('coach-cost-field');
    const getTaineField = ifFieldEmpty(getTrainerCostField);

})

document.getElementById('player-cost').addEventListener('click', function(){
    const getPlayerCostField = document.getElementById('player-cost-field');
    const getPlayerField = ifFieldEmpty(getPlayerCostField);
})



