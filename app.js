function addProject() {
  const name = document.getElementById("projectName").value;
  const status = document.getElementById("status").value;
  const team = document.getElementById("team").value;

  if (name === "" || status === "" || team === "") {
    alert("Please fill all fields");
    return;
  }

  const table = document.getElementById("projectTable");

  const row = table.insertRow();

  row.insertCell(0).innerText = name;
  row.insertCell(1).innerText = status;
  row.insertCell(2).innerText = team;

  const actionCell = row.insertCell(3);
  actionCell.innerHTML = `<button onclick="deleteRow(this)">Delete</button>`;

  // clear inputs
  document.getElementById("projectName").value = "";
  document.getElementById("status").value = "";
  document.getElementById("team").value = "";
}

function deleteRow(btn) {
  const row = btn.parentNode.parentNode;
  row.remove();
}