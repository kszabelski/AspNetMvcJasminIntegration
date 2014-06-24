$(document).ready(function() {
    var player = new Player();
    player.play(new Song());
    $('#playingStatus').html(player.isPlaying);
});