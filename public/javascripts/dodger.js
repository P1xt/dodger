$(document).ready(function() {

    var game = new Phaser.Game(600, 500, Phaser.AUTO, 'dodger', { preload: preload, create: create, update: update }, true);
    var player;
    var baddies = [];

    function preload () {

        game.load.image('player', '/images/playerShip1_green.png');
        game.load.image('baddie', '/images/ufoBlue.png');

    }

    function create () {
        game.stage.backgroundColor = '#FFFFFF';
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.gravity.y = 100;

        // our hero
        player = game.add.sprite(350,350, 'player');
        //game.physics.enable(player, Phaser.Physics.ARCADE);
        player.enableBody = true;
        player.allowGravity = false;
        player.body.velocity.setTo(0, 0);
        player.body.acceleration.setTo(0, 0);
        player.body.collideWorldBounds = true;

        // baddies
        baddies = game.add.group();
        baddies.enableBody = true;
        baddies.physicsBodyType = Phaser.Physics.ARCADE;
    }
    function update () {
    }

});