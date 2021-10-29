function songDecoder(song) {
    song = song.replace(/WUB/g, ' ').trim();
    return song.replace(/\s+/g, ' ');
}