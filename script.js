var sketchProc = function(processingInstance) {
    with (processingInstance) {
      size(window.innerWidth, window.innerHeight);
      var Tile = function(x, y, width, height, label, id, image) {
          this.x = x;
          this.y = y;
          this.width = width;
          this.height = height;
          this.label = label;
          this.isFaceUp = false;
          this.id = id;
          this.image = null;
          if (image) {
            var myImage = loadImage(image);
            this.image = myImage;
          }
          this.imgSize = min(this.width, this.height) * .8;
          this.widthOffset = (this.width - this.imgSize) / 2
          this.heightOffset = (this.height - this.imgSize) / 2
          this.color = "yellow";
      };
  
      Tile.prototype.draw = function() {
        if (this.isFaceUp && this.color == "green") {
          fill(152, 251, 152);
          rect(this.x, this.y, this.width, this.height, 10);
        } else if (this.isFaceUp && this.color == "yellow") {
          fill(255, 237, 0);
          rect(this.x, this.y, this.width, this.height, 10);
        } else {
          fill(255, 255, 255);
          rect(this.x, this.y, this.width, this.height, 10);
        }
        if (this.image) {
          image(this.image, this.x + this.widthOffset, this.y + this.heightOffset, this.imgSize, this.imgSize);
        } else {
          strokeWeight(2);
          textSize(32);
          textAlign(CENTER, CENTER);
          fill(50);
          text(this.label, this.x, this.y, this.width, this.height);
        }
      };
  
      var Timer = function(x, y, width, height, duration) {
        this.initialDuration = duration;
        this.timeRemaining = duration;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.running = false;
      };
  
      Timer.prototype.start = function() {
        this.reset();
        this.running = true;
      }
  
      Timer.prototype.reset = function() {
        this.running = false;
        this.timeRemaining = this.initialDuration;
      }
  
      Timer.prototype.draw = function() {
        fill(255, 255, 255);
        rect(this.x, this.y, this.width, this.height);
        textSize(18);
        textAlign(CENTER, CENTER);
        fill(50);
        text("Page "+(n_items+1)+" / " + items.length, this.x, this.y, this.width-5, this.height);
      };
  
      var Button = function(x, y, width, height, color, text) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.text = text;
      };
  
      Button.prototype.draw = function() {
        if (this.color == "yellow") {
          fill(255, 237, 0);
        } else if (this.color == "green") {
          fill(152, 251, 152);
        } else if (this.color == "red") {
          fill(255, 0, 48);
        }
        rect(this.x, this.y, this.width, this.height, 10);
              strokeWeight(2);
        textSize(14);
        textAlign(CENTER, CENTER);
        fill(50);
        text(this.text, this.x, this.y, this.width, this.height);
      }
  
      var isUnderMouse = function(obj, x, y) {
        return x >= obj.x && x <= obj.x + obj.width  &&
          y >= obj.y && y <= obj.y + obj.height;
      };
  
  
                    
      var items = [
        [
          {word: "1你好"},
          {word: "1我"},
          {word: "1你"},
          {word: "1在"},
          {word: "1这"},
          {word: "1是"},
          {word: "1不"},
          {word: "1一"},
          {word: "1今"},
          {word: "1天"},
          {word: "1有"},
          {word: "1有"},
          {word: "1们"},
          {word: "1那"},
          {word: "1谢谢"},
          {word: "1您"},
          {word: "1关"},
          {word: "1心"},
          {word: "1一下"},
          {word: "1身"},
          {word: "1边"},
          {word: "1朋"},
          {word: "1友"},
          {word: "1就"},
          {word: "1都"},
          {word: "1高"},
          {word: "1文"},
          {word: "1中"},
          {word: "1林"},
          {word: "1学"},
          {word: "1鳕"},
          {word: "1美"},
          {word: "1话"},
          {word: "1花"},
          {word: "1星"},
          {word: "1期"},
          {word: "1欧坤"},
        ],[
          {word: "2你好"},
          {word: "2我"},
          {word: "2你"},
          {word: "2在"},
          {word: "2这"},
          {word: "2是"},
          {word: "2不"},
          {word: "2一"},
          {word: "2今"},
          {word: "2天"},
          {word: "2有"},
          {word: "2有"},
          {word: "2们"},
          {word: "2那"},
          {word: "2谢谢"},
          {word: "2您"},
          {word: "2关"},
          {word: "2心"},
          {word: "2一下"},
          {word: "2身"},
          {word: "2边"},
          {word: "2朋"},
          {word: "2友"},
          {word: "2就"},
          {word: "2都"},
          {word: "2高"},
          {word: "2文"},
          {word: "2中"},
          {word: "2林"},
          {word: "2学"},
          {word: "2鳕"},
          {word: "2美"},
          {word: "2话"},
          {word: "2花"},
          {word: "2星"},
          {word: "2期"},
          {word: "2欧坤"},
        ],[
          {word: "3你好"},
          {word: "3我"},
          {word: "3你"},
          {word: "3在"},
          {word: "3这"},
          {word: "3是"},
          {word: "3不"},
          {word: "3一"},
          {word: "3今"},
          {word: "3天"},
          {word: "3有"},
          {word: "3有"},
          {word: "3们"},
          {word: "3那"},
          {word: "3谢谢"},
          {word: "3您"},
          {word: "3关"},
          {word: "3心"},
          {word: "3一下"},
          {word: "3身"},
          {word: "3边"},
          {word: "3朋"},
          {word: "3友"},
          {word: "3就"},
          {word: "3都"},
          {word: "3高"},
          {word: "3文"},
          {word: "3中"},
          {word: "3林"},
          {word: "3学"},
          {word: "3鳕"},
          {word: "3美"},
          {word: "3话"},
          {word: "3花"},
          {word: "3星"},
          {word: "3期"},
          {word: "3欧坤"},
        ],
      ];
  
      var shuffleArray = function(array) {
        var counter = array.length;
  
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            var ind = Math.floor(Math.random() * counter);
            // Decrease counter by 1
            counter--;
            // And swap the last element with it
            var temp = array[counter];
            array[counter] = array[ind];
            array[ind] = temp;
        }
      };
  
      // Create the array of tiles at appropriate positions
      var tiles = [];
      var n_items = 0;
      var NUM_COLS = 6;
      var NUM_ROWS = 6;
      var tileWidth = window.innerWidth / NUM_COLS;
      var tileHeight = (window.innerHeight - 40) / NUM_ROWS;
      var initTiles = function() {
        shuffleArray(items[n_items]);
        var itemIdx = 0;
        for (var i = 0; i < NUM_COLS; i++) {
            for (var j = 0; j < NUM_ROWS; j++) {
                var tileX = i * tileWidth;
                var tileY = j * tileHeight;
                if (itemIdx < items[n_items].length) {
                  tiles.push(new Tile(tileX, tileY, tileWidth, tileHeight, items[n_items][itemIdx].word, items[n_items][itemIdx].id, items[n_items][itemIdx].image));
                }
                itemIdx += 1;
            }
        }
      }
      initTiles();
  
      // Start by drawing them all face down
      for (var i = 0; i < tiles.length; i++) {
          tiles[i].draw();
      }
  
      // Create timer
      var timer = new Timer(tileWidth*2, window.innerHeight - 40, tileWidth * 2, 40, 10);
  
      // Create buttons
      var startButton = new Button(window.innerWidth-tileWidth, window.innerHeight - 40, tileWidth, 40, "green", "Green Team");
  
      var resetButton = new Button(window.innerWidth-tileWidth*2, window.innerHeight - 40, tileWidth, 40, "yellow", "Yellow Team");
  
      var prevButton = new Button(0, window.innerHeight - 40, tileWidth, 40, "red", "Prev Page");
  
      var nextButton = new Button(tileWidth, window.innerHeight - 40, tileWidth, 40, "green", "Next Page");
  
      var colorToSet = "yellow";
  
      // Draw stuff
      // timer.draw();
      startButton.draw();
      resetButton.draw();
      nextButton.draw();
      prevButton.draw();
      timer.draw();
  
      mouseClicked = function() {
        for (var i = 0; i < tiles.length; i++) {
          var tile = tiles[i];
          if (isUnderMouse(tile, mouseX, mouseY)) {
            tile.color = colorToSet;
            tile.isFaceUp = !tile.isFaceUp;
          }
        }
        if (isUnderMouse(startButton, mouseX, mouseY)) {
          colorToSet = "green";
        } else if (isUnderMouse(resetButton, mouseX, mouseY)) {
          colorToSet = "yellow";
        } else if (isUnderMouse(nextButton, mouseX, mouseY)) {
          if (n_items < items.length - 1) {
            n_items++;
            initTiles();
          }
        } else if (isUnderMouse(prevButton, mouseX, mouseY)) {
          if (n_items > 0) {
            n_items--;
            initTiles();
          }
        }
      };
  
      draw = function() {
        for (var i = 0; i < tiles.length; i++) {
          tiles[i].draw();
        }
        timer.draw();
        startButton.draw();
        resetButton.draw();
        nextButton.draw();
        prevButton.draw();
  };
  }};
  
  // Get the canvas that Processing-js will use
  var canvas = document.getElementById("mycanvas");
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight; 
  // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
  var processingInstance = new Processing(canvas, sketchProc);