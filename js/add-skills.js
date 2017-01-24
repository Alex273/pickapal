function addSkills() {
var skill = document.getElementById("post-job-input-skills").value;

 var div = document.createElement('div');
  div.className = "one-skill";
  div.innerHTML = skill;

document.getElementById("skills-list").appendChild(div);
document.getElementById("post-job-input-skills").value = '';
}