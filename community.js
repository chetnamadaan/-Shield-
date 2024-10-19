var modal = document.getElementById("feedbackModal");
var btn = document.querySelector(".feedback-button");
var span = document.getElementById("closeModal");


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


document.getElementById("feedbackForm").onsubmit = function(event) {
  event.preventDefault(); 

  const userName = document.getElementById("userName").value;
  const userReport = document.getElementById("userReport").value;

  const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
  feedbacks.push({ name: userName, report: userReport });
  localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

  alert("Feedback submitted! Thank you.");
  modal.style.display = "none"; 
  this.reset(); 
}
function displayFeedback() {

  const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    const feedbackList = document.getElementById("feedbackList");
  

    feedbackList.innerHTML = "";
  

    if (feedbacks.length === 0) {
      feedbackList.innerHTML = "<p>No feedback available.</p>";
      return;
    }
  
    feedbacks.forEach(feedback => {
      const feedbackItem = document.createElement("div");
      feedbackItem.innerHTML = `<strong>Name:</strong> ${feedback.name}<br><strong>Report:</strong> ${feedback.report}<br><hr>`;
      feedbackList.appendChild(feedbackItem);
    });
  }
  
  