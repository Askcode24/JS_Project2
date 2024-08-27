let count = 0;

const countSpan = document.getElementById('count');
const messageDiv = document.getElementById('message');
const decreaseBtn = document.getElementById('decrease-btn');
const increaseBtn = document.getElementById('increase-btn');
const resetBtn = document.getElementById('reset-btn');

function updateCount() {
  countSpan.innerText = count;
  
  if (count === 0) {
    countSpan.style.color = 'black';
  } else if (count > 0) {
    countSpan.style.color = 'green';
  } else {
    countSpan.style.color = 'red';
  }
  
  if (count % 10 === 0 && count !== 0) {
    messageDiv.innerText = 'You have reached a milestone!';
    messageDiv.style.border = '2px solid green';
    messageDiv.style.display = 'block';
    messageDiv.style.color = 'green';
  } else {
    messageDiv.style.display = 'none';
  }
  
  if (count < 0) {
    messageDiv.innerText = '⚠ Warning: Negative count detected!';
    messageDiv.style.border = '2px solid red';
    messageDiv.style.display = 'block';
    messageDiv.style.color = 'red';
  }
}

decreaseBtn.addEventListener('click', () => {
  count--;
  updateCount();
  console.log('Count Decreasing');
});

increaseBtn.addEventListener('click', () => {
  count++;
  updateCount();
  console.log('Count Increasing');
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateCount();
  console.log('Count Reset');
});

updateCount();
