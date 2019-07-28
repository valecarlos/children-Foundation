(function(){
  var links = {
    option1: 'https://biz.payulatam.com/B0b286d6614AA3C',
    option2: 'https://biz.payulatam.com/B0b286dD3CA5E26',
    option3: 'https://biz.payulatam.com/B0b286d5F2C75A8',
    option4: 'https://biz.payulatam.com/B0b286d47D52EC0',
  }
  var prefix = ''
  document.querySelector('#donate-button').addEventListener('click', function(event){
    event.preventDefault();
    var selectedOption = document.querySelector('input[name="selector"]:checked').value;
    var url = prefix + links[selectedOption];
    window.location.href = url;
  })
})();