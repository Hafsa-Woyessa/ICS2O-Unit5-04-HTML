document.getElementById('change-image').addEventListener('click', image)
document.getElementById('change-text').addEventListener('click', text)
document.getElementById('hide').addEventListener('click', hide)
document.getElementById('show').addEventListener('click', show)
document.getElementById('bg').addEventListener('click', background)

function image () {
  document.getElementById('picture').src = 'images/dog.jpg'
}

function text () {
  document.getElementById('text').innerHTML = 'Sour'
}

function hide () {
  document.getElementById('text').style.display = 'none'
}

function show () {
  document.getElementById('text').style.display = 'block'
}


function background () {
  document.body.style.backgroundColor = 'lightblue'
} 

// This line hides a message
alert('The computer displays an alert')

alert('Click the button to get an alert') // This line displays a  message
