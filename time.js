var destination = new Date('may 25, 2022 10:00:00').getTime();



var x = setInterval(function(){
      var now = new Date().getTime();

      var deference = destination - now;
      
      var days = Math.floor(deference / (1000 * 60 * 60 * 24)) ;
      var hours = Math.floor((deference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((deference % (1000 * 60 * 60) / (1000 * 60)));
      var seconds = Math.floor((deference % (1000 * 60)) / 1000);
      let catchElement = document.querySelector('#countdown');

      return catchElement.innerHTML = `${days}d : ${hours}hr : ${minutes}min : ${seconds}sec`
}, 1000);     
