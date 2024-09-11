var gCurrSize = 100

const elBallOne = document.querySelector('.ball-one')
const elBallTwo = document.querySelector('.ball-two')
const gBalls = { ball1: elBallOne, ball2: elBallTwo }

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
    elBallOne.onclick = function2

    elBallTwo.style.width = tempSize1
    elBallTwo.style.height = tempSize1
    elBallTwo.style.backgroundColor = tempColor1
    elBallTwo.onclick = function1

    updateBallsText()
}

//* generate a random number between the 20 and 40 and shrink the two first balls when clicked
function onShrink() {
    const randShrink = getRandomInt(20, 41)
    console.log(`random shrinks is ${randShrink}px`)
    var size1 = gBalls.ball1.style.width.split("px")[0]
    var size2 = gBalls.ball2.style.width.split("px")[0]

    var newSize1 = size1 - randShrink
    var newSize2 = size2 - randShrink

    //*if size is smaller than hundered stay on 100px
    if (newSize1 < 100) newSize1 = 100
    if (newSize2 < 100) newSize2 = 100

    gBalls.ball1.style.width = `${newSize1}px`
    gBalls.ball1.style.height = `${newSize1}px`

    gBalls.ball2.style.width = `${newSize2}px`
    gBalls.ball2.style.height = `${newSize2}px`

    updateBallsText()
}

function updateBallsText() {
    for (ball in gBalls) {
        const width = gBalls[ball].style.width
        gBalls[ball].innerText = width.split("px")[0]
    }
}