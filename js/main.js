var gCurrSize = 100
function onBallClick(elBall) {
    if (gCurrSize >= 400) gCurrSize = 50

    var randIncre = getRandomInt(20, 61)

    elBall.style.width = `${gCurrSize + randIncre}px`
    elBall.style.height = `${gCurrSize + randIncre}px`
    elBall.innerText = gCurrSize + randIncre
    gCurrSize += 50

}
