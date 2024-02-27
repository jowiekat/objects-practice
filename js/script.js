const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");


// Create a new variable called learning and assign it an empty object
let learning = {};

// Create a property of your learning object called topic with a value of "JS"
learning.topic = "JS";

// Create another object property named learning goals and assign it an array
// that contains four learning goals as elements
learning.learningGoals = ["Build JS Programs", "Understand JS Concepts", "Master JS Frameworks", "Practice JS Algorithms"];

// Create an object property called category with a value of "Front End Development"
learning.category = "Front End Development";

// Create another object property called topicImportance and give it a value of "High"
learning.topicImportance = "High";

// Log out the learning object in the console to check for the four properties
console.log(learning);

// Change the value of the topic property to “JavaScript”
learning.topic = "JavaScript";

// Remove the second item from the learning goals property array
learning.learningGoals.splice(1, 1);

// Log out the learning object to make sure your changes worked
console.log(learning);
// Set the innerText of the topicElement using template literals
topicElement.innerText = `I'm learning ${learning.topic}`

topicElement.classList.remove("hide");

countElement.innerText = `✔️ I have ${learning.learningGoals.length} learning goals.`;

countElement.classList.remove("hide");
