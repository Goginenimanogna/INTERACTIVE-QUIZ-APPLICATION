document.getElementById("enrollForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload
  
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector("input[name='gender']:checked").value;
  
    // Create a new row for the table
    const tableBody = document.getElementById("studentTableBody");
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${name}</td>
      <td>${email}</td>
      <td>${course}</td>
      <td>${dob}</td>
      <td>${gender}</td>
    `;
    tableBody.appendChild(row);
  
    // Clear the form after submission
    document.getElementById("enrollForm").reset();
  });
  