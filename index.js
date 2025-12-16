// for 1 to 100 numbers in a array
let a = 100;
let b = [];
for (let i = 1; i <= a; i++) {
    b.push(i);
}

// existing random variables.
let randomlyPickedNum=''

// Function to get a unique random number and remove it from the array
function getUniqueRandomNumber() {
  // Generate a random number
//   const randomIndex = Math.floor(Math.random() * b.length);
  const randomElement_array=parseInt(Math.random()*b.length)

// Math.random() generates a random float between 0 and 1
// Multiplying it by a.length scales it to the array length
// Math.floor(...) rounds it down to a valid index
// a[...] accesses the array element at that random index


  // Splice removes and returns the number at that index
  const randomNumber =b.splice(randomElement_array,1);

  return randomNumber;
}
//Generate unique random numbers
// console.log(getUniqueRandomNumber());


function speakText(text) {
      
      
      // Create a new SpeechSynthesisUtterance object
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Optional: Customize the voice, pitch, and rate
      utterance.pitch = 1;
      utterance.rate = 1;
      utterance.volume = 1;

      // Speak the text
      window.speechSynthesis.speak(utterance);
    }




function main(){
            const text =getUniqueRandomNumber();
            speakText(text);
            randomlyPickedNum+=text+','
            document.getElementById(text).style.background='red';
            document.getElementById(text).style.borderColor='gold';
            document.getElementById(text).style.color='white';
            document.getElementById('output').innerText=text;
            document.getElementById('RandHistory').innerText=randomlyPickedNum;
            // Save the history to localStorage so it's accessible from other pages
            localStorage.setItem('localStoragerandomHistory', randomlyPickedNum);
        }
// restore history when page loads
window.onload = () => {
  const history = localStorage.getItem('localStoragerandomHistory');
  if (history) {
    randomlyPickedNum = history;
    document.getElementById('RandHistory').innerText = randomlyPickedNum;

    // optionally re-color past numbers
    const nums = history.split(',').filter(Boolean);
    nums.forEach((n) => {
      const box = document.getElementById(n);
      if (box) {
        box.style.background = 'red';
        box.style.borderColor = 'gold';
        box.style.color = 'white';
      }
    });
  }
};

// reset button
function reset_web_page() {
  localStorage.removeItem('localStoragerandomHistory');
  location.reload();
}