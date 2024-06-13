const redSlider = document.getElementById('redslider');
const greenSlider = document.getElementById('greenslider');
const blueSlider = document.getElementById('blueslider');

const redValueSpan = document.getElementById('redvalue');
const greenValueSpan = document.getElementById('greenvalue');
const blueValueSpan = document.getElementById('bluevalue');

const colorBox= document.getElementById('color-box');
const copyButton= document.getElementById('copyButton');
const inputtype = document.getElementById('inputType');


redSlider.addEventListener('input',updateColor);
greenSlider.addEventListener('input',updateColor);
blueSlider.addEventListener('input',updateColor);
copyButton.addEventListener('click',copyRGBValue);


function updateColor() {
  const redValue = redSlider.value;
  const greenValue = greenSlider.value;
  const blueValue = blueSlider.value;

  const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`;

  colorBox.style.backgroundColor = rgbColor;

  
  redValueSpan.textContent = redValue;
  greenValueSpan.textContent = greenValue;
  blueValueSpan.textContent = blueValue;

  inputType.innerHTML=`rgb(${redValue},${greenValue},${blueValue})`;


}

updateColor();



function copyRGBValue()
{
  const rgbText = inputType.textContent;
  const tempInput = document.createElement('input');
  tempInput.value = rgbText;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  alert(`Copied: ${rgbText}`);
  
  
}







