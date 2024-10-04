/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Bain Liao
 * Created on: Sep 2024
 * This program shows all the RGB LED colours
*/

// setup
basic.clearScreen()
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P15, 0)
basic.showIcon(IconNames.Happy)

// turn on RGB LED
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.showString('Red')
    pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)

    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString('Blue')
    pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)

    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.showString('Green')
    pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)

    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString('Magenta')
    pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)

    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.showString('Yellow')
    pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)

    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString('Cyan')
    pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)

    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString('White')
    pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    
    basic.showIcon(IconNames.Happy)
})
