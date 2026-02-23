// Cutebot Receiver
// 
// This program receives Joystick message from the Joystick transmitter and
// 
// controls the robot.
radiop.onReceiveJoystickMessage(function (payload) {
    if (radiop.buttonPressed(payload, radiop.JoystickButton.C)) {
        basic.showIcon(IconNames.Heart)
    } else if (radiop.buttonPressed(payload, radiop.JoystickButton.D)) {
        basic.showIcon(IconNames.SmallHeart)
    } else if (radiop.buttonPressed(payload, radiop.JoystickButton.E)) {
        basic.showIcon(IconNames.Yes)
    } else if (radiop.buttonPressed(payload, radiop.JoystickButton.F)) {
        basic.showIcon(IconNames.No)
    } else if (radiop.buttonPressed(payload, radiop.JoystickButton.Logo)) {
    	
    } else {
        led.toggle(Math.map(radiop.getValue(payload, radiop.JoystickValue.X), 0, 1023, 0, 5), Math.map(radiop.getValue(payload, radiop.JoystickValue.Y), 0, 1023, 0, 5))
        v = Math.map(radiop.getValue(payload, radiop.JoystickValue.Y), 0, 1023, -100, 100)
        t = Math.map(radiop.getValue(payload, radiop.JoystickValue.X), 0, 1023, -100, 100)
        l = v + t
        r = v - t
        motorbit.freestyle(l, r)
    }
})
let r = 0
let l = 0
let t = 0
let v = 0
radiop.init(1, 1, 7)
