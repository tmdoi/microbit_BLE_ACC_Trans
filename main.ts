radio.setGroup(1)
basic.showIcon(IconNames.Pitchfork)
basic.forever(function () {
    radio.sendString("" + convertToText(input.acceleration(Dimension.X)) + "," + convertToText(input.acceleration(Dimension.Y)) + "," + convertToText(input.acceleration(Dimension.Z)) + "," + convertToText(input.runningTime()) + ",")
    basic.pause(50)
})
