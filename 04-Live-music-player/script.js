// Data song
const songList = [
    {
        title: "Sneaky Snich",
        file: "/media/song1.mp3",
        cover: "media/img1.jpg"
    },
    {
        title: "Indore",
        file: "/media/song2.mp3",
        cover: "media/img2.jpg"
    },
    {
        title: "Zig Zag",
        file: "/media/song3.mp3",
        cover: "media/img3.jpg"
    },
];

// Actual song
let actualSong = null;

// Capture DOM elements
const songs = document.getElementById("songs");
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
progressContainer.addEventListener("click", setProgress);

// Hear audio element
audio.addEventListener("timeupdate", updateProgress);

// Hear control clicks
play.addEventListener("click", () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

next.addEventListener("click", () => nextSong());
prev.addEventListener("click", () => prevSong());

// Charge songs and show list
function loadSongs() {
    songList.forEach((song, index) => {
        // Create li
        const li = document.createElement("li");
        // Create a
        const link = document.createElement("a");
        // Hidrate a
        link.textContent = song.title;
        link.href = "#";
        // Escuchar clicks
        link.addEventListener("click", () => loadSong(index));
        // Add to li
        li.appendChild(link);
        // Add li to ul
        songs.appendChild(li);
    });
}

// Charge selected song
function loadSong(songIndex) {
    if (songIndex !== actualSong) {
        changeActiveClass(actualSong, songIndex);
        actualSong = songIndex;
        audio.src = "./media/" + songList[songIndex].file; // Update the path
        playSong();
        changeSongtitle(songIndex);
        changeCover(songIndex);
    }
}

// Update bar
function updateProgress(event) {
    const { duration, currentTime } = event.srcElement;
    const percent = (currentTime / duration) * 100;
    progress.style.width = percent + "%";
}

// Clickable bar
function setProgress(event) {
    const totalWidth = this.offsetWidth;
    const progressWidth = event.offsetX;
    const current = (progressWidth / totalWidth) * audio.duration;
    audio.currentTime = current;
}

// Update controls
function updateControls() {
    if (audio.paused) {
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
    } else {
        play.classList.add("fa-pause");
        play.classList.remove("fa-play");
    }
}

// Play song
function playSong() {
    if (actualSong !== null) {
        audio.play();
        updateControls();
    }
}

// Stop song
function pauseSong() {
    audio.pause();
    updateControls();
}

// Change class
function changeActiveClass(lastIndex, newIndex) {
    const links = document.querySelectorAll("a");
    if (lastIndex !== null) {
        links[lastIndex].classList.remove("active");
    }
    links[newIndex].classList.add("active");
}

// Change cover
function changeCover(songIndex) {
    cover.src = "./" + songList[songIndex].cover;
}

// Change title
function changeSongtitle(songIndex) {
    title.innerText = songList[songIndex].title;
}

// Last song
function prevSong() {
    if (actualSong > 0) {
        loadSong(actualSong - 1);
    } else {
        loadSong(songList.length - 1);
    }
}

// Next song
function nextSong() {
    if (actualSong < songList.length - 1) {
        loadSong(actualSong + 1);
    } else {
        loadSong(0);
    }
}

// Autoplay
audio.addEventListener("ended", () => nextSong());

// Main
loadSongs();
