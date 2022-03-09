function radio() {
  let x = document.getElementsByName("Gender");
  let y;
  for (let i = 0; i < x.length; i++) {
    if (x[i].checked) {
      y = x[i].value;
    }
  }
  console.log(y);
  return y;
}

function food() {
  let food = document.getElementsByName("food");
  let temp = " ";
  for (let x of food) {
    if (x.checked) {
      temp = x.value +" "+ temp;
    }
  }
  console.log(food);
  return temp;
}

function tagCreate(tag, attribute, value) {
  variable = document.createElement(tag);
  variable.setAttribute(attribute, value);
  return variable;
}

/*---------Outer Container----------*/
var container = tagCreate("div", "class", "container");
var row1 = tagCreate("div", "class", "row");

/*---------Left Content-------------*/
var for_inp = tagCreate("div", "class", "col-md-4 left_container");

// var form = tagCreate("form", "action", "#");
var form = tagCreate("form", "id", "myform");
// form.setAttribute("onsubmit", "execute()");
// form.setAttribute("Id", "myform");
for_inp.append(form);

//-----------> First Name

var h1 = document.createElement("h1");
h1.innerHTML = "Form <br>Submission:";

var fir_nameR = tagCreate("div", "class", "row contain");
var fir_name = tagCreate("label", "for", "fir_name");
fir_name.innerHTML = "First Name";
fir_name.style.width = "100%";
var fir_nameT = tagCreate("input", "type", "text");
fir_nameT.setAttribute("id", "fir_name");
fir_nameT.setAttribute("placeholder", "First Name");
fir_nameT.setAttribute("required", "");

form.append(fir_nameR);
fir_nameR.append(h1, fir_name, fir_nameT);

//----------->Last Name

var last_nameR = tagCreate("div", "class", "row contain");
var last_name = tagCreate("label", "for", "last_name");
last_name.innerHTML = "Last Name";
var last_nameT = tagCreate("input", "type", "text");
last_nameT.setAttribute("id", "last_name");
last_nameT.setAttribute("required", "");
last_nameT.setAttribute("placeholder", "Last Name");

form.append(last_nameR);
last_nameR.append(last_name, last_nameT);

//----------->Address 1
var address1R = tagCreate("div", "class", "row contain");
var address1 = tagCreate("label", "for", "address1");
address1.innerHTML = "Address Line 1:";
var address1T = tagCreate("input", "type", "text");
address1T.setAttribute("id", "address1");
address1T.setAttribute("placeholder", "Address Line");
address1T.setAttribute("required", "");

form.append(address1R);
address1R.append(address1, address1T);

//----------->Address 2
var address2R = tagCreate("div", "class", "row contain");
var address2 = tagCreate("label", "for", "address2");
address2.innerHTML = "Address Line 2:";
var address2T = tagCreate("input", "type", "text");
address2T.setAttribute("id", "address2");
address2T.setAttribute("placeholder", "Address Line2");

form.append(address2R);
address2R.append(address2, address2T);

//----------->Pin Code

var pinR = tagCreate("div", "class", "row contain");
var pin = tagCreate("label", "for", "pin");
pin.innerHTML = "PIN:";
var pinT = tagCreate("input", "type", "number");
pinT.setAttribute("id", "pin");
pinT.setAttribute("required", "");
pinT.setAttribute("placeholder", "PIN Code");

form.append(pinR);
pinR.append(pin, pinT);

//----------->Gender

var genderR = tagCreate("div", "class", "row contain");
var gender = tagCreate("label", "for", "gender");
gender.innerHTML = "Gender:";
var genderRow = tagCreate("div", "class", "row");
var genderR1 = tagCreate("input", "type", "radio");
genderR1.setAttribute("value", "Male");
genderR1.setAttribute("id", "Gender");
genderR1.setAttribute("class", "rad");
genderR1.setAttribute("name", "Gender");
var genderS = tagCreate("pr", "class", "gender");
genderS.innerHTML = "Male";

var genderR2 = tagCreate("input", "type", "radio");
genderR2.setAttribute("value", "Female");
genderR2.setAttribute("class", "rad");
genderR2.setAttribute("id", "Gender");
genderR2.setAttribute("name", "Gender");
var genderS1 = tagCreate("pr", "class", "gender");
genderS1.innerHTML = "Female";

genderR.append(gender);
// genderR.append(genderRow);
genderRow.append(genderR1, genderS, genderR2, genderS1);

// genderRow.append(divg1,divg2);
// divg1.append(genderR1, genderS);
// divg2.append(genderR2, genderS1);
form.append(genderR,genderRow);

//--------------->Choice of Food
var cofR = tagCreate("div", "class", "row contain");
var cof = tagCreate("label", "for", "cof");
cof.innerHTML =
  "Choice of Food: (<i>must choose at least 2 out of 5 option</i>)";
var cofC = tagCreate("div", "class", "col");
var cofNI = tagCreate("input", "type", "checkbox");
cofNI.setAttribute("value", "North Indian");
cofNI.setAttribute("name", "food");
var cofNI_T = tagCreate("span", "class", "cofNI_T");
cofNI_T.innerHTML = "North Indian <br>";
var cofSI = tagCreate("input", "type", "checkbox");
cofSI.setAttribute("value", "South Indian");
cofSI.setAttribute("name", "food");
var cofSI_T = tagCreate("span", "class", "cofSI_T");
cofSI_T.innerHTML = "South Indian <br>";
var cofCH = tagCreate("input", "type", "checkbox");
cofCH.setAttribute("value", "Chinese");
cofCH.setAttribute("name", "food");
var cofCH_T = tagCreate("span", "class", "cofCH_T");
cofCH_T.innerHTML = "Chinese <br>";
var cofJAP = tagCreate("input", "type", "checkbox");
cofJAP.setAttribute("value", "Japanese");
cofJAP.setAttribute("name", "food");
var cofJAP_T = tagCreate("span", "class", "cofJAP_T");
cofJAP_T.innerHTML = "Japanese <br>";
var cofSF = tagCreate("input", "type", "checkbox");
cofSF.setAttribute("value", "Sea Food");
cofSF.setAttribute("name", "food");
var cofSF_T = tagCreate("span", "class", "cofSF_T");
cofSF_T.innerHTML = "Sea Food <br>";

form.append(cofR);
cofR.append(cof, cofC);
cofC.append(
  cofNI,
  cofNI_T,
  cofSI,
  cofSI_T,
  cofCH,
  cofCH_T,
  cofJAP,
  cofJAP_T,
  cofSF,
  cofSF_T
);

//--------------------> State

var stateR = tagCreate("div", "class", "row contain");
var state = tagCreate("label", "for", "state");
state.innerHTML = "State: ";
var stateT = tagCreate("input", "type", "text");
stateT.setAttribute("id", "state");
stateT.setAttribute("Placeholder", "State");

form.append(stateR);
stateR.append(state, stateT);

//--------------------> Country

var countryR = tagCreate("div", "class", "row contain");
var country = tagCreate("label", "for", "country");
country.innerHTML = "Country: ";
var countryT = tagCreate("input", "type", "text");
countryT.setAttribute("id", "country");
countryT.setAttribute("placeholder", "Country");
countryT.setAttribute("required", "");

form.append(countryR);
countryR.append(country, countryT);

//-----------------------> Submit
var submitR = tagCreate("div", "class", "row contain");
var submit = tagCreate("input", "type", "button");
submit.setAttribute("value", "Submit");
submit.setAttribute("onclick", "execute()");

form.append(submitR);
submitR.append(submit);

/*------------------------------------------------Right Content----------------------------------------*/

var for_out = tagCreate("div", "class", "col-md-8 right_container");

var right_con = tagCreate("div", "class", "right_container");
for_out.append(right_con);

var h1 = document.createElement("h1");
h1.innerHTML = "Database";
right_con.append(h1);

// ------------------------> Table

var table = tagCreate("table", "class", "table");
var thead = tagCreate("thead", "class", "thead-dark");
var th_FN = tagCreate("th", "scope", "col");
th_FN.innerHTML = "First Name";
var th_LN = tagCreate("th", "scope", "col");
th_LN.innerHTML = "Last Name";
var th_addr = tagCreate("th", "scope", "col");
th_addr.innerHTML = "Address";
var th_pin = tagCreate("th", "scope", "col");
th_pin.innerHTML = "Pincode";
var th_gend = tagCreate("th", "scope", "col");
th_gend.innerHTML = "Gender";
var th_food = tagCreate("th", "scope", "col");
th_food.innerHTML = "Food";
var th_state = tagCreate("th", "scope", "col");
th_state.innerHTML = "State";
var th_country = tagCreate("th", "scope", "col");
th_country.innerHTML = "Country";

table.append(thead);
thead.append(
  th_FN,
  th_LN,
  th_addr,
  th_pin,
  th_gend,
  th_food,
  th_state,
  th_country
);
right_con.append(table);
// ---------------------> Execustion

function execute() {
  var variable = document.createElement("tr");
  variable.innerHTML = `<td class=td>${document.getElementById("fir_name").value}</td>
    <td class=td>${document.getElementById("last_name").value}</td>
    <td class=td>${document.getElementById("address1").value +
      " " +
      document.getElementById("address2").value}</td>
    <td class=td>${document.getElementById("pin").value}</td>
    <td class=td>${radio()}</td>
    <td class=td>${food()}</td>
    <td class=td>${document.getElementById("state").value}</td>
    <td class=td>${document.getElementById("country").value}</td>`;
  table.append(variable);
  document.getElementById("myform").reset();
}

/*----------Appending Area-----------*/
row1.append(for_inp);
row1.append(for_out);
container.append(row1);
document.body.append(container);
