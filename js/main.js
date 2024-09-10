var gCurrSize = 100
function onBallClick(elBall) {
    if (gCurrSize === 400) gCurrSize = 50
    elBall.style.width = `${gCurrSize + 50}px`
    elBall.style.height = `${gCurrSize + 50}px`
    elBall.innerText = gCurrSize + 50
    gCurrSize += 50

}
