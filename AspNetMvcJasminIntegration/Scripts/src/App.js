var player;

var refreshPlayStatus = function () {
    $('#playingStatus').html(player.currentlyPlaying());
}


$(document).ready(function () {
    player = new Player();
    refreshPlayStatus();

    $('#play').click(function() {
        player.play(new Song("Metallica - Whiskey In The Jar"));
        refreshPlayStatus();
    });

    $('#pause').click(function () {
        player.pause();
        refreshPlayStatus();
    });
});
