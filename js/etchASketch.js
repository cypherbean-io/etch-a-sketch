const container = document.querySelector('#container');
let divCount = 1;
while (divCount <= 16) {
  const div = document.createElement('div');
  container.appendChild(div);
  divCount++;
}