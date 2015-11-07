
document.getElementById('logo').setAttribute('class','slideanimation');

function reset() {
  document.getElementById('logo').setAttribute('class','none');
}
window.setTimeout(reset, 3000)
