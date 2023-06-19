let loggedIn = false;

function addStudent() {
  const studentName = document.getElementById('studentName').value;
  if (studentName !== '') {
    const table = document.getElementById('attendanceTable');
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    cell1.innerHTML = studentName;
    cell2.innerHTML = new Date().toLocaleTimeString();
    cell3.innerHTML = '';
    cell4.innerHTML = '<button onclick="logout(this)">Logout</button>';
    document.getElementById('studentName').value = '';
  }
}

function logout(button) {
  const row = button.parentNode.parentNode;
  row.cells[2].innerHTML = new Date().toLocaleTimeString();
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username === 'admin' && password === 'password') {
    loggedIn = true;
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('attendanceForm').style.display = 'block';
  } else {
    alert('Invalid username or password');
  }
});
