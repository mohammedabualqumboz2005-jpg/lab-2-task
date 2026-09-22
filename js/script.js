const userForm = document.getElementById('userForm');
const tableContainer = document.getElementById('tableContainer');
const dataTableBody = document.querySelector('#dataTable tbody');


userForm.addEventListener('submit', function(e) {
   e.preventDefault(); 
   
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    

   
    dataTableBody.innerHTML = '';
     
   
    const row = document.createElement('tr');
    
    
    row.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${age}</td>
        <td>
            <button class="btn-edit">Edit</button>
            <button class="btn-delete">Delete</button>
        </td>
    `;

   
    dataTableBody.appendChild(row);

    
    tableContainer.classList.remove('hidden');

  
    userForm.reset();

    
    const deleteBtn = row.querySelector('.btn-delete');
    deleteBtn.addEventListener('click', function() {
       
        tableContainer.classList.add('hidden');
        dataTableBody.innerHTML = ''; 
    });

    // Edit button event listener
    const editBtn = row.querySelector('.btn-edit');
    editBtn.addEventListener('click', function() {
        document.getElementById('name').value = name;
        document.getElementById('email').value = email;
        document.getElementById('age').value = age;
        tableContainer.classList.add('hidden');
    });
});








