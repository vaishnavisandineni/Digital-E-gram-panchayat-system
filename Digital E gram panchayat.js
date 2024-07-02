const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Replace with your logic to validate username and password against a database or other mechanism
  if (username === 'admin' && password === 'password123') {
    // Login successful
    window.location.href = "dashboard.html"; // Redirect to dashboard page
  } else {
    errorMessage.textContent = 'Invalid username or password';
  }
});
const employeeTable = document.getElementById('employeeTable');
const searchInput = document.getElementById('searchInput');

// Sample employee data (replace with logic to fetch data from database)
const employees = [
  { id: 1, name: 'Employee1', email: 'employee1@panchayat.com', designation: 'Panchayat Secretary', mobile: '9786543310' },
  { id: 2, name: 'Employee1', email: 'employee2@panchayat.com', designation: 'Village Accountant', mobile: '8765943210' },
  { id: 3, name: 'Employee1', email: 'employee3@panchayat.com', designation: 'Panchayat Secretary', mobile: '9849543210' },
  { id: 4, name: 'Employee1', email: 'employee4@panchayat.com', designation: 'Village Accountant', mobile: '9837052704' },
  { id: 5, name: 'Employee1', email: 'employee5@panchayat.com', designation: 'Panchayat Secretary', mobile: '9873307438' },
  { id: 6, name: 'Employee1', email: 'employee6@panchayat.com', designation: 'Village Accountant', mobile: '9876543210' }
  // Add more employee data here
];

function displayEmployees(filteredEmployees = employees) {
  const tableBody = employeeTable.getElementsByTagName('tbody')[0];
  tableBody.innerHTML = '';

  filteredEmployees.forEach((employee) => {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `<td>${employee.id}</td>
                          <td>${employee.name}</td>
                          <td>${employee.email}</td>
                          <td>${employee.designation}</td>
                          <td>${employee.mobile}</td>`;
    tableBody.appendChild(tableRow);
  });
}

displayEmployees(); // Display all employees on page load

function searchEmployees() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredEmployees = employees.filter((employee) => {
    const name = employee.name.toLowerCase();
    return name.includes(searchTerm) || employee.id.toString().includes(searchTerm);
  });
  displayEmployees(filteredEmployees);
}

const designationForm = document.getElementById('designationForm');
const designationTable = document.getElementById('designationTable');

// Sample designation data (replace with logic to fetch data from database)
let designations = [
  { id: 1, name: 'Panchayat Secretary' },
  { id: 2, name: 'Village Accountant' },
  { id: 3, name: 'Panchayat Secretary' },
  { id: 4, name: 'Village Accountant' },
  { id: 5, name: 'Panchayat Secretary' },
  { id: 6, name: 'Village Accountant' },
  // Add more designation data here
];

function displayDesignations() {
  const tableBody = designationTable.getElementsByTagName('tbody')[0];
  tableBody.innerHTML = '';

  designations.forEach((designation) => {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `<td>${designation.id}</td>
                          <td>${designation.name}</td>
                          <td class="actions">
                            <button onclick="deleteDesignation(${designation.id})">Delete</button>
                          </td>`;
    tableBody.appendChild(tableRow);
  });
}

displayDesignations(); // Display all designations on page load

designationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const designationName = document.getElementById('designationName').value;

  // Replace with logic to save designation to database
  designations.push({ id: designations.length + 1, name: designationName });

  designationForm.reset(); // Clear form after submission
  displayDesignations();
});

function deleteDesignation(designationId) {
  // Replace with logic to delete designation from database
  designations = designations.filter((designation) => designation.id !== designationId);
  displayDesignations();
}

const connectionTypeForm = document.getElementById('connectionTypeForm');
const connectionTypeTable = document.getElementById('connectionTypeTable');

// Function to simulate fetching connection types from a backend (replace with your API call)
function fetchConnectionTypes() {
  // Simulate an API call that returns an array of connection types (replace with your actual data fetching logic)
  const connectionTypes = [
    { id: 1, name: 'Water Connection', description: 'Connection for water supply' },
    { id: 2, name: 'Electricity Connection', description: 'Connection for electricity supply' },
    { id: 3, name: 'Water Connection', description: 'Connection for water supply' },
    { id: 4, name: 'Electricity Connection', description: 'Connection for electricity supply' },
    { id: 5, name: 'Water Connection', description: 'Connection for water supply' },
    { id: 6, name: 'Electricity Connection', description: 'Connection for electricity supply' }
    // Add more connection types as needed
  ];
  return connectionTypes;
}

// Function to populate the connection table with data
function populateConnectionTable(connectionTypes) {
  connectionTypeTable.innerHTML = ''; // Clear existing table content

  connectionTypes.forEach(connectionType => {
    const tableRow = document.createElement('tr');

    const idCell = document.createElement('td');
    idCell.textContent = connectionType.id;
    tableRow.appendChild(idCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = connectionType.name;
    tableRow.appendChild(nameCell);

    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = connectionType.description;
    tableRow.appendChild(descriptionCell);

    const actionsCell = document.createElement('td');
    // Add edit and delete buttons or links as needed based on your implementation
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      // Handle edit functionality (pre-populate the form with connection type data)
    });
    actionsCell.appendChild(editButton);

    const deleteButton = documentcreateElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      // Handle delete functionality (confirm and remove connection type from backend)
    });
    actionsCell.appendChild(deleteButton);

    tableRow.appendChild(actionsCell);

    connectionTypeTable.appendChild(tableRow);
  });
}

// Function to handle form submission for adding a new connection type
function handleAddConnectionType(event) {
  event.preventDefault(); // Prevent default form submission behavior

  const connectionTypeName = document.getElementById('connectionTypeName').value;

  // Simulate an API call to add the connection type to the backend (replace with your actual logic)
  console.log('Adding connection type:', connectionTypeName);

  // Clear the form after submission
  connectionTypeForm.reset();

  // Update the connection table after successful addition (assuming successful backend call)
  fetchConnectionTypes().then(connectionTypes => populateConnectionTable(connectionTypes));
}

connectionTypeForm.addEventListener('submit', handleAddConnectionType);

// Call the fetchConnectionTypes function to populate the table on page load
fetchConnectionTypes().then(connectionTypes => populateConnectionTable(connectionTypes));


const connectionTable = document.getElementById('connection-table');
const connectionTableBody = document.getElementById('connection-table').getElementsByTagName('tbody')[0];
const loadingMessage = document.getElementById('loading-message');
const errorMessage = document.getElementById('error-message');

// Function to fetch all connections from the backend
async function fetchAllConnections() {
    try {
        const response = await fetch('/api/connections'); // Replace with your actual API endpoint
        if (!response.ok) {
            throw new Error(`Error fetching connections: ${response.statusText}`);
        }
        const connections = await response.json();
        return connections;
    } catch (error) {
        console.error('Error fetching connections:', error);
        errorMessage.style.display = 'block';
        return []; // Return an empty array to prevent errors in table population
    } finally {
        loadingMessage.style.display = 'none';
    }
}

// Function to populate the connection table
function populateConnectionTable(connections) {
    connectionTableBody.innerHTML = ''; // Clear existing table content

    connections.forEach(connection => {
        const tableRow = document.createElement('tr');

        const connectionIdCell = document.createElement('td');
        connectionIdCell.textContent = connection.connectionId;
        tableRow.appendChild(connectionIdCell);

        const connectionTypeCell = document.createElement('td');
        connectionTypeCell.textContent = connection.connectionType;
        tableRow.appendChild(connectionTypeCell);

        const applicantNameCell = document.createElement('td');
        applicantNameCell.textContent = connection.applicantName;
        tableRow.appendChild(applicantNameCell);

        const applicantAddressCell = document.createElement('td');
        applicantAddressCell.textContent = connection.applicantAddress;
        tableRow.appendChild(applicantAddressCell);

        const statusCell = document.createElement('td');
        statusCell.textContent = connection.status; // Assuming 'status' property exists in connection object
        tableRow.appendChild(statusCell);

        const actionsCell = document.createElement('td');
        // Add view, edit, or other action buttons/links as needed based on your implementation

        tableRow.appendChild(actionsCell);

        connectionTableBody.appendChild(tableRow);
    });
}

// Fetch connections and populate the table on page load
fetchAllConnections().then(connections => populateConnectionTable(connections));

// Fetch announcements from server using a server-side script
// This example uses a placeholder function
function fetchAnnouncements() {
  // Replace with actual logic to fetch data from server
  const announcements = ["Announcement 1", "Announcement 2"];
  return announcements;
}

const announcementSection = document.querySelector('section h2 ~ *');
const announcements = fetchAnnouncements();

// Display announcements dynamically
announcementSection.innerHTML = announcements.map(announcement => `<p>${announcement}</p>`).join('');

function validateForm() {
  // Basic form validation (e.g., check if required fields are filled)
  const childName = document.getElementById('childName').value;
  const fatherName = document.getElementById('fatherName').value;
  const motherName = document.getElementById('motherName').value;
  const dateOfBirth = document.getElementById('dateOfBirth').value;
  const address = document.getElementById('address').value;

  if (!childName || !fatherName || !motherName || !dateOfBirth || !address) {
      document.getElementById('message').innerHTML = 'Please fill in all required fields.';
      return false;
  }

  // Send form data to server-side script using AJAX or fetch API
  // For example:
  const formData = new FormData(document.getElementById('birthRegistrationForm'));
  fetch('/submit-birth-registration', {
      method: 'POST',
      body: formData
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          document.getElementById('message').innerHTML = 'Registration submitted successfully!';
          // Clear the form
      } else {
          document.getElementById('message').innerHTML = 'An error occurred. Please try again.';
      }
  })
  .catch(error => {
      console.error(error);
      document
