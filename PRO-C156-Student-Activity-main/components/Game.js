AFRAME.registerComponent("game-play", {
  schema: {
    elementId: { type: "string", default: "#ring1" },    
  },
  update: function () {
    this.isCollided(this.data.elementId);
  },

  init: function () {
    var duration = 120;
    const timerEl = document.querySelector("#timer");
    this.startTimer(duration, timerEl);
  },

  startTimer: function (duration, timerEl) {
    var minutes;
    var seconds;

    var timer = setInterval(countDown, 1000);

    function countDown() {
      if (duration >= 0) {
        minutes = parseInt(duration / 60);
        seconds = parseInt(duration % 60);

        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        timerEl.setAttribute("text", {
          value: minutes + ":" + seconds,
        });

        duration -= 1;
      } 
      else {
        clearInterval(timer);        
      }
    }
  },
 updateTargets:function (){
element = document.querySelector(elementId)
element.addEventListener("collid", (e)=> {
  if (elementId.includes("ring")){

  element.setAttribute{"visible","false"}
  this.updateScore
  this.updateTargets
  
  }
  else {
    this.gameOver()
  }
})
 }
 updateScore: function(){
   element = document.querySelector(elementId)
   element.addEventListener("collid", (e)=> {
     if (elementId.includes("ring")){
       element.setAttribute{"visible","false"}
       var currentScore = count
       currentScore -=1
       element.setAttribute
     }
   })
 }
 gameOver: function(){
   playingElement = document.querySelector(elementId)
   element.addEventListener("collid", (addText)=>{
     element.setAttribute = invisible: true
     playingElement1.setAttribute(dynamicBody)
   })

 }
 
  isCollided: function (elemntId) {
    const element = document.querySelector(elemntId);
    element.addEventListener("collide", (e) => {
      if (elemntId.includes("#ring")) {
        
      } else {
        
      }
    });
  },
  
});
