window.onload = function () {
	const playBtn = document.querySelector('.play')
	const pauseBtn = document.querySelector('.pause')
	const previousBtn = document.querySelector('.previous')
	const nextBtn = document.querySelector('.next')
	const firstRow = document.querySelector('.first-row')
	const audio = document.querySelector('audio')

	window.onclick = function(e) {
		if (e.target === playBtn && audio.paused) {
			playBtn.classList.toggle('hide')
			pauseBtn.classList.toggle('hide')
			audio.play()
		}

		else if (e.target === pauseBtn && audio.played) {
			playBtn.classList.toggle('hide')
			pauseBtn.classList.toggle('hide')
			audio.pause()
		}
	}


}
