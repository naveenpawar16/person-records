var rec = [];
var idd = 0;
function myFunction() {

  var errDescription = "";
  var nameValid = document.getElementById("f1").elements[0].value
  var ageValid = document.getElementById("f1").elements[1].value
  var sexValid = document.querySelector('input[name="gender"]:checked')

  if (nameValid.trim() != "" && isNaN(nameValid) == true && ageValid != "" && ageValid > 0 && ageValid <= 100 && sexValid != null) {
    rec.push({ name: nameValid.trim(), age: ageValid, sex: sexValid.value });
    document.getElementById("f1").reset();
    addTable(nameValid, ageValid, sexValid.value, rec.length - 1);
    document.getElementById("tableDiv").style.display = "block";
    document.getElementById("colorDiv").style.display = "block";
  }
  else {
    if (nameValid.trim() == "") { errDescription += "Name should not be empty\n" }
    if (nameValid.trim() != "" && isNaN(nameValid) == false) { errDescription += "Name should not be Number\n" }
    if (ageValid > 100 || ageValid < 1) { errDescription += "Age is not Valid Enter Between 1 to 100\n" }
    if (ageValid == "") { errDescription += "Age should not be empty\n" }
    if (sexValid == null) { errDescription += "Please select a gender" }

    alert(errDescription);

  }
}
function editRow(x) {

  document.getElementById("name").value = rec[x].name;
  document.getElementById("age").value = rec[x].age;
  document.getElementById(rec[x].sex).checked = true;
  document.getElementById(rec[x].name + x).style.display = "none";
  delete rec[x];
}

function deleteRow(g) {
  document.getElementById(rec[g].name + g).style.display = "none";
  delete rec[g];
}
function colorChange() {

  for (var i = 0; i < rec.length; i++) {
    var c = document.getElementById("colorPick").value;
    if (rec[i] == null) { continue; }
    document.getElementById(rec[i].name + i).style.backgroundColor = c;

  }

}

function colorInput() {
  for (var i = 0; i < rec.length; i++) {
    // console.log(rec[i].name+i);
    var c = document.getElementById("colorInp").value;
    if (rec[i] == null) { continue; }
    document.getElementById(rec[i].name + i).style.backgroundColor = c;

  }
}
