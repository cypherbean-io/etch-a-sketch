const container = document.querySelector('#container');
let divCount = 1;
while (divCount <= 256) {
  const div = document.createElement('div');
  container.appendChild(div);
  divCount++;
}