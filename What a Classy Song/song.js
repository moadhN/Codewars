class Song {
    constructor(title, artist) {
        this.views = []
        this.title = title;
        this.artist = artist;
        this.howMany = function (array) {
            let count = 0;
            for (const item of array) {
                const currentItem = item.toString().toLowerCase();
                if (!this.views.includes(currentItem)) {
                    this.views.push(currentItem)
                    count++
                }
            }
            return count;
        }

    }
}
const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');
mountMoose.howMany([1, 2, 3, 4, 5, 6, 7, 8])
console.log(mountMoose.howMany([1, 2, 3, 4, 5, 6, 7, 8, 9]))

const hsin = new Song('hsin', 'eddik')