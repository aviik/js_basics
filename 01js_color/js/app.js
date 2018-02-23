let input = document.getElementById('myText');
let button = document.getElementById('myButton')
let para = document.getElementById('heads')


button.addEventListener('click', () => {
  para.style.color = input.value;
})
