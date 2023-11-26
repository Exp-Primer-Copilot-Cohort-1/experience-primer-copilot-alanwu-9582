function skillsMember() {
  var member = document.getElementById("member").value;
  var skills = document.getElementById("skills").value;
  var skillsArray = skills.split(",");
  var skillsList = "";
  for (var i = 0; i < skillsArray.length; i++) {
    skillsList += "<li>" + skillsArray[i] + "</li>";
  }
  document.getElementById("skillsList").innerHTML = skillsList;
  document.getElementById("memberName").innerHTML = member;
}