const validUsername = "user";
const validPassword = "password123";

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === validUsername && password === validPassword) {
        // Successful login
        window.location.href = 'musicplayer.html'; // Redirect to music player page
    } else {
        // Show error message
        errorMessage.style.display = 'block';
    }
}

alert("Welcome to the music player!");

// Select elements
const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const albumArt1 = document.getElementById('albumArt1');
const albumArt2 = document.getElementById('albumArt2');
const searchBar = document.getElementById('searchBar');

// Array of songs
const songs = [
    { title: 'Song 1', artist: 'Artist 1', source: 'songs/friends-235450.mp3', cover: 'images/music.png' },
    { title: 'Song 2', artist: 'Artist 2', source: 'songs/justin-bieber-type-beat-pop-rnb-freedom-by-tremoxbeatz-216870.mp3', cover: 'images/music2.png' }
];

let currentSongIndex = 0;

// Function to load and display the song
function loadSong(song) {
    document.getElementById('songTitle').textContent = song.title;
    document.getElementById('artistName').textContent = song.artist;
    document.getElementById('audioSource').src = song.source;
    audioPlayer.load();

    // Update album art
    if (currentSongIndex === 0) {
        albumArt1.style.display = 'block';
        albumArt2.style.display = 'none';
    } else if (currentSongIndex === 1) {
        albumArt1.style.display = 'none';
        albumArt2.style.display = 'block';
    }
}

// Play/Pause functionality
function playPauseSong() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = 'Play';
    }
}

// Go to next song
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playPauseSong();
}

// Go to previous song
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playPauseSong();
}

// Event Listeners
playPauseBtn.addEventListener('click', playPauseSong);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

// Load the first song
loadSong(songs[currentSongIndex]);

// Search functionality
function searchSong() {
    const searchQuery = searchBar.value.trim().toLowerCase(); // Get search input, remove leading/trailing spaces, and convert to lowercase

    // Debugging: log the search query
    console.log("Searching for: " + searchQuery);

    const foundSongIndex = songs.findIndex(song => song.title.toLowerCase() === searchQuery);

    if (foundSongIndex !== -1) {
        currentSongIndex = foundSongIndex;
        loadSong(songs[currentSongIndex]);
        playPauseSong();
    } else {
        console.log("Song not found.");  // Debugging: log if the song is not found
        alert("Song not found. Please check your spelling.");
    }
}

// Event listener for search functionality
searchBar.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchSong();  // Trigger search when Enter is pressed
    }
});
