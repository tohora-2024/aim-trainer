import buttonClick from '../../public/audio/button-click.mp3'

// interface ButtonClickProps {
//   text: string
// }

function ButtonClick(text: string) {
  function playAudio() {
    new Audio(buttonClick).play()
  }

  return (
    <>
      <button onClick={playAudio} className="interact-button">
        {text}
      </button>
    </>
  )
}

export default ButtonClick
