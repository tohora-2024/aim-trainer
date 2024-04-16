import buttonClick from '/audio/button-click.mp3'
import targetClick from '/audio/pistol-shot.mp3'
// import spongebob from '../../public/audio/spongebob-fail.mp3'

export function buttonClickAudio() {
  new Audio(buttonClick).play()
}

export function targetClickAudio() {
  new Audio(targetClick).play()
}

// Currently this sounds is automatically played when AddNameForm component is loaded
// export function notBestGameAudio() {
//   new Audio(spongebob).play()
// }
