window.onload = function () {
	const playBtn = document.querySelector('.play')
	const pauseBtn = document.querySelector('.pause')
	const prevBtn = document.querySelector('.previous')
	const nextBtn = document.querySelector('.next')
	const firstRow = document.querySelector('.first-row')
	const titleSong = document.querySelector('.title-song')
	const timerSong = document.querySelector('.timer-song')
	const audio = document.querySelector('audio')
	const volumeButton = document.querySelector('.button-volume')
	const volumeImage = document.querySelector('.img-volume')
	const randomButton = document.querySelector('.button-random')

	const songs = [
		'music/como-un-lobo.mp3', // 0
		'music/100-años.mp3', // 1
		'music/voy-a-bailar-a-la-nave-del-olvido.mp3', // 2
		'music/creo.mp3', // 3
		'music/rocanroles-sin-destino.mp3', // 4
		'music/oxidado.mp3',
		'music/fumar.mp3',
		'music/de-atar.mp3',
		'music/misterios.mp3'
	]

	const titles = [
		'como un lobo - guasones',
		'cien años - guasones',
		'voy a bailar a la nave del olvido - la renga',
		'creo - callejeros',
		'rocanroles sin destino - callejeros',
		'oxidado - caballeros de la quema',
		'fumar - kapanga',
		'de atar - la vela puerca',
		'misterios - don osvaldo'
	]

	const volumes = [
		1, // 0
		0.8, // 1
		0.6, // 2
		0.4, // 3
		0.2, // 4
		0.1, // 5
		0 // 6
	]

	let currentVolume = 0
	let currentSong = 0
	const numberOfSong = songs.length

	function play() {
		audio.src = songs[currentSong]
		audio.play()
		titleSong.innerHTML = titles[currentSong]
	}

	playBtn.onclick = function() {
		playBtn.classList.toggle('hide')
		pauseBtn.classList.toggle('hide')
		audio.play()
		titleSong.innerHTML = titles[currentSong]
	}

	pauseBtn.onclick = function() {
		pauseBtn.classList.toggle('hide')
		playBtn.classList.toggle('hide')
		audio.pause()
	}

	nextBtn.onclick = function() {
		currentSong++
		if (currentSong >= numberOfSong) {
			currentSong = 0
		}

		else if (audio.paused) {
			pauseBtn.classList.toggle('hide')
			playBtn.classList.toggle('hide')
		}

		const playSong = play()
	}

	prevBtn.onclick = function() {
		currentSong--
		if (currentSong < 0) {
			currentSong = numberOfSong - 1
		}

		else if (audio.paused) {
			pauseBtn.classList.toggle('hide')
			playBtn.classList.toggle('hide')
		}

		const playSong = play()
	}

	audio.ontimeupdate = function() {
		let position = audio.currentTime / audio.duration
		timerSong.style.width = position * 100 + '%'
	}

	function getRandomSong() {
		const randomSong = Math.floor(Math.random() * songs.length)
		return randomSong
	}

	randomButton.onclick = function() {
		const randomSong = getRandomSong()
		currentSong = randomSong

		if (audio.paused) {
			pauseBtn.classList.toggle('hide')
			playBtn.classList.toggle('hide')
		}

		const playSong = play()
	}

	volumeButton.onclick = function() {
		switch (currentVolume) {
			case 0:
				volumeImage.src = 'img/volume-0.8.png'
				currentVolume++
				audio.volume = volumes[currentVolume]
				break

			case 1:
				volumeImage.src = 'img/volume-0.6.png'
				currentVolume++
				audio.volume = volumes[currentVolume]
				break

			case 2:
				volumeImage.src = 'img/volume-0.4.png'
				currentVolume++
				audio.volume = volumes[currentVolume]
				break

			case 3:
				volumeImage.src = 'img/volume-0.2.png'
				currentVolume++
				audio.volume = volumes[currentVolume]
				break

			case 4:
				volumeImage.src = 'img/volume-0.1.png'
				currentVolume++
				audio.volume = volumes[currentVolume]
				break

			case 5:
				volumeImage.src = 'img/volume-0.png'
				currentVolume++
				audio.volume = volumes[currentVolume]
				break

			case volumes.length - 1:
			volumeImage.src = 'img/volume-1.png'
			currentVolume = 0
			audio.volume = volumes[currentVolume]
			break
		}
	}


	


}
