// get elements
const pledgeRadios = document.querySelectorAll('.pledge-radio');
const progressBar = document.querySelector('.progress-bar');
const totalMoneyRaised = document.querySelector('.total-money-raised');
const totalBackers = document.querySelector('.total-backers');
const bookmarkButton = document.querySelector('.bookmark-button');

// add event listeners
pledgeRadios.forEach((radio) => {
  radio.addEventListener('change', updatePledge);
});

bookmarkButton.addEventListener('click', toggleBookmark);

// update pledge
function updatePledge() {
  // calculate pledge amount and update progress bar and total money raised
  const pledgeAmount = Number(this.value);
  const progressPercent = 50; // replace with actual calculation
}