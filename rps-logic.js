function rpsLogic(x = 0) {
    player_choice = x
    console.log(player_choice)
    computer_choice = getRandomIntInclusive(1, 3)
    console.log(computer_choice)
    if (player_choice === computer_choice) {
        document.getElementById("result").innerHTML = "It is a draw!";
        return;
    }
    switch (computer_choice) {
        case 1:
            if (player_choice === 2) {
                document.getElementById("result").innerHTML = "You win!";
            }
            else {
                document.getElementById("result").innerHTML = "You lose :(";
            }
            break;
        case 2:
            if (player_choice === 3) {
                document.getElementById("result").innerHTML = "You win!";
            }
            else {
                document.getElementById("result").innerHTML = "You lose :(";
            }
            break;
        case 3:
            if (player_choice === 1) {
                document.getElementById("result").innerHTML = "You win!";
            }
            else {
                document.getElementById("result").innerHTML = "You lose :(";
            }
            break;
    }
}
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}