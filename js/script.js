AFRAME.registerComponent('update-score-text', {
    schema: {type: 'string'
        
    },

    init: function () {
      // Do something when component first attached.
      var stringToPrint = this.data;
      var textBox = document.queryselector("scoreText");
      textBox.setAttribute('value', stringToPrint);
    },

    update: function () {
      // Do something when component's data is updated.
    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
});

window.addEventListener('DOMContentLoaded', () => {
  const BlueBox = document.querySelector('#Blue');
  const RedBox = document.querySelector('#Red');
  
  
  RedBox.addEventListener('click', () => {
  alert('You found the red key');
  BlueBox.setAttribute('visible', false);
  });
}); 