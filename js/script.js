const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

const learning = {
  topic: "JS",
  learningGoals: [
    "Build JS programs",
    "Become an actual coder",
    "Become good problem-solver",
    "Get a remote job as a front-end dev"
  ],
  category: "Front End Development",
  topicImportance: "High"
};

console.log(learning);

learning.topic = "JavaScript";
learning.learningGoals.splice(1, 1);

topicElement.innerText = `I am learning ${learning.topic}.`;
topicElement.classList.remove("hide");
countElement.innerText = `I have ${learning.learningGoals.length} goals.`;
countElement.classList.remove("hide");
