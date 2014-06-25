/// Following references are required by Resharper test runner.
/// <reference path="SpecHelper.js" />
/// <reference path="../../AspNetMvcJasminIntegration/Scripts/src/Player.js" />
/// <reference path="../../AspNetMvcJasminIntegration/Scripts/src/Song.js" />

///=============
/// Another Player tests added to drive sample functionality
///=============

describe("Player currently playing", function() {
    var player;
    var song;

    beforeEach(function () {
        player = new Player();
        song = new Song();
    });

    it("should return song name when song is played", function () {
        song.name = 'Awesome song name';
        player.play(song);
        expect(player.currentlyPlaying()).toEqual('Awesome song name');
    });

    it("should return inform that song is paused", function () {
        song.name = 'Awesome song name';
        player.play(song);
        player.pause();
        var currentlyPlaying = player.currentlyPlaying();
        expect(currentlyPlaying).toEqual('(paused) Awesome song name');
    });

    it("should return proper info before played", function () {
        expect(player.currentlyPlaying()).toEqual('(nothing)');
    });
});