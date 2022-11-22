const eyes = document.querySelector(".eyes");
const balls = document.getElementsByClassName('ball');

let existingText = eyes.innerHTML;
eyes.innerHTML = "";
for(let i=0; i<2; i++)
{
    eyes.innerHTML += existingText;
}

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for(let i=0; i<2; i++)
  {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};
