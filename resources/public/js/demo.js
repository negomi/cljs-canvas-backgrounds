var Demo = (function() {
  return {
    buttons: document.querySelector(".buttons"),
    headers: document.getElementsByTagName("header"),
    setCanvasSize: function(canvas) {
      canvas.width = window.innerWidth;
      canvas.height = 660;
    },
    setCanvasBackground: function(background, id) {
      html5_canvas_backgrounds[background].draw({ id: id });
    },
    initializeHeaders: function(defaultBackground) {
      Array.prototype.forEach.call(this.headers, function(header) {
        var canvasId = header.className + "-canvas";
        var canvas = document.getElementById(canvasId);
        this.setCanvasSize(canvas);
        this.setCanvasBackground(header.className, canvasId);
      }.bind(this));
      this.updateHeader(defaultBackground);
      document.getElementById("loader").style.display = "none";
    },
    updateHeader: function(activeBackground) {
      Array.prototype.forEach.call(this.headers, function(header) {
        if (header.className === activeBackground) {
          header.style.display = "block";
        } else {
          header.style.display = "none";
        }
      });
    },
    run: function() {
      this.initializeHeaders("checkerboard");
      this.buttons.addEventListener("click", function(e) {
        e.preventDefault();
        if (e.target.nodeName === "A") {
          this.updateHeader(e.target.id);
        }
      }.bind(this));
    }
  }
})();

Demo.run();
