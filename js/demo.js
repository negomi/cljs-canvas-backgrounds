var Demo = (function() {
  var canvas = document.getElementById("demo-canvas");
  var buttons = document.querySelector(".buttons");
  var defaultBackground = "checkerboard";

  return {
    setCanvasSize: function() {
      canvas.width = window.innerWidth;
      canvas.height = 660;
    },
    setCanvasBackground: function(background) {
      html5_canvas_backgrounds[background].draw({ id: "demo-canvas" });
    },
    setLogo: function(background) {
      var logos = document.getElementsByClassName("logo");

      Array.prototype.forEach.call(logos, function(logo) {
        if (Array.prototype.indexOf.call(logo.classList, background) > -1) {
          logo.style.display = "block";
        } else {
          logo.style.display = "none";
        }
      });
    },
    run: function() {
      this.setCanvasSize();
      this.setCanvasBackground(defaultBackground);
      this.setLogo(defaultBackground);

      buttons.addEventListener("click", function(e) {
        e.preventDefault();
        this.setCanvasBackground(e.target.id);
        this.setLogo(e.target.id);
      }.bind(this));
    }
  }
})();

Demo.run();
