const keys = document.querySelectorAll(".key")

function playNote(evente){
  let audioKeyCode = getKeyCode(evente)

  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
  
  const cantFoundAnyKey = !key
  if(cantFoundAnyKey) return

  addPlayingClass(key)
  playAudio(audioKeyCode)

}

function addPlayingClass(key){
  key.classList.add('playing')
}

function getKeyCode (evente){
  let keyCode;

  const isKeyCode = evente.type === "keydown"
  isKeyCode 
    ? keyCode = evente.keyCode 
    : keyCode = evente.target.dataset.key
  return keyCode;
}

function playAudio(audioKeyCode){
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
  audio.currentTime = 0;
  audio.play()
}

function removePlayingClass(evente){
  evente.target.classList.remove("playing")
}

function registerEvents(){
  keys.forEach(function(key){
    key.addEventListener("click", playNote)
    key.addEventListener("transitionend", removePlayingClass)
  })
  window.addEventListener("keydown", playNote)
}



window.addEventListener("load", registerEvents)