import * as KEYS from "./constants";
import KeyMapper from './KeyboardMapper';

const PRESSED = 0x1
const RELEASED = 0x2

export default class Keyboard {
  constructor() {
    // Holds the current state of a given key (pressed/released/unidentified)
    this.keyStates = new Map()

    // Holds the callback functions for a key code
    this.keyMap = new Map()
  }

  addMapping(code, callback) {
    this.keyMap.set(code, callback)
  }

  handleEvent(event) {
    const { keyCode } = event

    const code = KeyMapper.get(keyCode);

    if (!this.keyMap.has(code)) {
      // Did not have key mapped.
      return
    }

    event.preventDefault()

    const keyState = event.type === 'keydown' ? PRESSED : RELEASED

    if (this.keyStates.get(code) === keyState) {
      return
    }

    this.keyStates.set(code, keyState)

    this.keyMap.get(code)(keyState)
  }

  listenTo(window) {
    ['keydown', 'keyup'].forEach(eventName => {
      window.addEventListener(eventName, event => {
        this.handleEvent(event)
      })
    })
  }
}