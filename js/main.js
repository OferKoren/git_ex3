var gCurrSize = 100
function onBallClick(elBall) {
    elBall.style.width = `${gCurrSize + 50}px`
    elBall.style.height = `${gCurrSize + 50}px`
    elBall.innerText = gCurrSize
    gCurrSize += 50

}
