$(document).ready(function() {

    var game = new Phaser.Game(600, 500, Phaser.AUTO, 'dodger', { preload: preload, create: create, update: update }, true);
    var player;
    var baddie;
    var baddies = [];
    var cursors, pauseKey, upKey, downKey, leftKey, rightKey;
    var timeCheck, lastBaddieTime;

    function preload () {

        game.load.image('player', '/images/playerShip1_green.png');
        game.load.image('baddie', '/images/ufoBlue.png');

    }

    function create () {
        game.stage.backgroundColor = '#FFFFFF';
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.gravity.y = 100;
        cursors = game.input.keyboard.createCursorKeys();

        // our hero
        player = game.add.sprite(350,350, 'player');
        game.physics.enable(player, Phaser.Physics.ARCADE);
        player.allowGravity = false;
        player.body.velocity.setTo(0, 0);
        player.body.acceleration.setTo(0, 0);
        player.body.collideWorldBounds = true;

        // baddies
        baddies = game.add.group();
        baddies.enableBody = true;
        baddies.physicsBodyType = Phaser.Physics.ARCADE;

        // controls
        pauseKey = game.input.keyboard.addKey(Phaser.Keyboard.P);
        upKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        downKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
        leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
        rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);

        timeCheck = game.time.now;
        lastBaddieTime = game.time.now;
    }
    function update () {
        if (baddies.total < 10 && (game.time.now - lastBaddieTime) > 1000) {
            var spawnX = Math.floor(Math.random()*(game.world.width-0+1)+0);
            baddie = game.add.sprite(spawnX,50, 'baddie');
            baddie.checkWorldBounds = true;
            baddie.outOfBoundsKill = true;
            baddies.add(baddie);
            lastBaddieTime = game.time.now;
            console.log(baddies);
        }

        if (player.alive) {
            player.body.velocity.setTo(0, 0);
            if (leftKey.isDown) {
                player.body.velocity.x = -400;
            } else if (rightKey.isDown) {
                player.body.velocity.x = 400;
            } else if (upKey.isDown) {
                player.body.velocity.y = -400;
            } else if (downKey.isDown) {
                player.body.velocity.y = 400;
            }

        }
        timeCheck = game.time.now;
    }
    function baddieGone (baddie) {
        console.log(baddie);
        console.log(baddies);
    }
});