window.onload = function () {
	const playBtn = document.querySelector('.play')
	const pauseBtn = document.querySelector('.pause')
	const previousBtn = document.querySelector('.previous')
	const nextBtn = document.querySelector('.next')
	const firstRow = document.querySelector('.first-row')
	const audio = document.querySelector('audio')
	const volumeButton = document.querySelector('.button-volume')
	const containerSlider = document.querySelector('.container-slider')
	const volumeSlider = document.querySelector('.slider-volume')

	playBtn.onclick = function() {
		console.log('toque')
		playBtn.classList.toggle('hide')
		pauseBtn.classList.toggle('hide')
		audio.play()
	}

	pauseBtn.onclick = function() {
		console.log('toque')
		pauseBtn.classList.toggle('hide')
		playBtn.classList.toggle('hide')
		audio.pause()
	}

	volumeButton.onmouseover = function() {
		containerSlider.style.visibility = 'visible'
	}

	volumeButton.onmouseout = function() {
		containerSlider.style.visibility = 'hidden'
	}

	volumeSlider.onchange = function(e) {
		audio.volume = e.target.value
	}
}