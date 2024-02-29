const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')
const $fullscreen = document.querySelector('#fullscreen')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$fullscreen.addEventListener('click', handleFullscreen)

function handlePlay() {
  $video.play()
  $play.hidden = true
  $pause.hidden = false
  console.log('le diste click al botón de play')
}

function handlePause() {
  $video.pause()
  $pause.hidden = true
  $play.hidden = false
  console.log('le diste click al botón de pausa')
}


$backward.addEventListener('click', handleBackward)

function handleBackward() {
  // $video.currentTime = $video.currentTime - 10
  $video.currentTime -= 10
  console.log('para atrás 10 segundos')
}

$forward.addEventListener('click', handleForward)

function handleForward() {
  $video.currentTime = $video.currentTime + 10
  console.log('para adelante 10 segundos', $video.currentTime)
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded() {
  $progress.max = $video.duration
  console.log('ha cargado mi video', $video.duration)
}

function handleFullscreen() {
  if ($video.requestFullscreen) {
    $video.requestFullscreen();
  } else if ($video.webkitRequestFullscreen) { 
    $video.webkitRequestFullscreen();
  } else if ($video.msRequestFullscreen) { 
    $video.msRequestFullscreen();
  }
}
function handleTimeUpdate() {
  $progress.value = $video.currentTime
  // console.log('tiempo actual', $video.currentTime)
}

$progress.addEventListener('input', handleInput)

function handleInput() {
  $video.currentTime = $progress.value
  console.log($progress.value)
}