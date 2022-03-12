// initialized display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in the storage
let numVisits = Number(window.localStorage.getItem("visits-list"));

// determine if this is the first visit or display the number of visits
if (numVisits !== 0){
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits
numVisits++;

// store the new number of visits value
localStorage.setItem("visits-list", numVisits);

// show todays date
const d = Date.now();
const newd = new Date(d);
todayDisplay.textContent = newd;
