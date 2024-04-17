import buttonClick from '/audio/mouse-click-sound.mp3'
import targetClick from '/audio/pistol-shot.mp3'
import startClick from '/audio/gun-click.mp3'

export function buttonClickAudio() {
  new Audio(buttonClick).play()
}

export function targetClickAudio() {
  new Audio(targetClick).play()
}

export function startClickAudio() {
  new Audio(startClick).play()
}
