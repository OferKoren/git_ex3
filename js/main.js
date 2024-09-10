var gCurrSize = 100
function onBallClick(elBall) {


    var randIncre = getRandomInt(20, 61)
    var randColor = getRandomColor()

    if (gCurrSize + randIncre >= 400) {
        gCurrSize = 100;
        randIncre = 0;
    }
    elBall.style.width = `${gCurrSize + randIncre}px`
    elBall.style.height = `${gCurrSize + randIncre}px`
    elBall.style.backgroundColor = `${randColor}`
    elBall.innerText = gCurrSize + randIncre

    gCurrSize += 50

}
