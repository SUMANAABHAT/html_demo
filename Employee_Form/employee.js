let selectedRow = null

function onFormSubmit() {
    if (validate()) {
        let formData = readFormData();
    if (selectedRow == null) 
    insertNewRecord(formData);
    else
    updateRecord(formData);
    resetForm();
  }
}

function readFormData() {
    let formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["employeeId"] = document.getElementById("employeeId").value;
    formData["joiningDate"] = document.getElementById("joiningDate").value;
    formData["workedHours"] = document.getElementById("workedHours").value;
    formData["designation"] = document.getElementById("designation").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    let table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.employeeId;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.joiningDate;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.workedHours;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.designation;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.salary;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.city;
    cell7 = newRow.insertCell(7);
    cell7.innerHTML = `<a onclick="onEdit(this)">Edit/</a>
                       <a onclick="onDelete(this)">delete</a>`; 

}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("employeeId").value = "";
    document.getElementById("joiningDate").value = "";
    document.getElementById("workedHours").value = "";
    document.getElementById("designation").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("employeeId").value = selectedRow.cells[1].innerHTML;
    document.getElementById("joiningDate").value = selectedRow.cells[2].innerHTML;
    document.getElementById("WorkedHours").value = selectedRow.cells[3].innerHTML;
    document.getElementById("designation").value = selectedRow.cells[4].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[5].innerHTML;
    document.getElementById("city").value = selectedRow.cells[6].innerHTML;
}

    function updateRecord(formData) {
        selectedRow.cells[0].innerHTML = formData.fullName;
        selectedRow.cells[1].innerHTML = formData.employeeId;
        selectedRow.cells[2].innerHTML = formData.joiningDate;
        selectedRow.cells[3].innerHTML = formData.workedHours;
        selectedRow.cells[4].innerHTML = formData.designation;
        selectedRow.cells[5].innerHTML = formData.salary;
        selectedRow.cells[6].innerHTML = formData.city;
    }

function onDelete(td) {
    if (confirm("Are you sure you want to delete this record?")) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
         } else {
             isValid = true;
             if (document.getElementById("fullNameValidationError").classList.contains("hide"))
             document.getElementById("fullNameValidationError").classList.add("hide");
            }
            return isValid;
}