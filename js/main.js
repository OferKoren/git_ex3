var gCurrSize = 100
function onBallClick(elBall, maxDiameter) {


    var randIncre = getRandomInt(20, 61)
    var randColor = getRandomColor()

    if (gCurrSize + randIncre >= maxDiameter) {
        gCurrSize = 100;
        randIncre = 0;
    }
    elBall.style.width = `${gCurrSize + randIncre}px`
    elBall.style.height = `${gCurrSize + randIncre}px`
    elBall.style.backgroundColor = `${randColor}`
    elBall.innerText = gCurrSize + randIncre

    gCurrSize += 50

}
function onSwitchBalls() {
    const elBallOne = document.querySelector('.ball-one')
    const elBallTwo = document.querySelector('.ball-two')

    const tempColor1 = elBallOne.style.backgroundColor
    const tempSize1 = elBallOne.style.width
    const function1 = elBallOne.onclick

    const tempColor2 = elBallTwo.style.backgroundColor
    const tempSize2 = elBallTwo.style.width
    const function2 = elBallTwo.onclick

    elBallOne.style.width = tempSize2
    elBallOne.style.height = tempSize2
    elBallOne.style.backgroundColor = tempColor2
    elBallOne.innerText = tempSize2.split("px")[0]
    elBallOne.onclick = function2

    elBallTwo.style.width = tempSize1
    elBallTwo.style.height = tempSize1
    elBallTwo.style.backgroundColor = tempColor1
    elBallTwo.innerText = tempSize1.split("px")[0]
    elBallTwo.onclick = function1



}
