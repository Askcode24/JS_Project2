let count = 0;

const countSpan = document.getElementById('count');
const decreaseBtn = document.getElementById('decrease-btn');
const increaseBtn = document.getElementById('increase-btn');
const resetBtn = document.getElementById('reset-btn');

function updateCount() {
  countSpan.innerText = count;
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
