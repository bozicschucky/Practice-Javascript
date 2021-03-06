// Book constructor
function Book(title,author,isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// Ui Constructor
function Ui() {
    
}
// Add Book to list
Ui.prototype.addBookToList = function(book){
    // console.log(book)
    const  list = document.getElementById('book-list');

    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class='delete'>X</a></td>
    
        `;
    list.appendChild(row)

}

// show Alert
Ui.prototype.showAlert = function (message,className) {
    // create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    // Get form
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div,form);
    // Timeout after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000);
}

// Delete Book
Ui.prototype.deleteBook = function(target){
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

// Clear fileds
Ui.prototype.clearFields = function () {
  document.getElementById('title').value = '';  
  document.getElementById('author').value = '';  
  document.getElementById('isbn').value = '';  
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit',function (e) {
    // console.log('test');
    // Get form Values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value
    // console.log(title,author,isbn)

    // instantiate Book
    const book = new Book(title,author,isbn);

    // Intantiate UI
    const ui = new Ui();

    // Validate
    if ( title === '' || author === '' || isbn === '') {
        // alert('failed')
        //Errpr alert
        ui.showAlert('Please fill in all fields', 'error');
    } else{
            // Add Book to list
            ui.addBookToList(book);

            // show success
            ui.showAlert('Book Added', 'success');
            // Clear fields
            ui.clearFields();

            
    }



    e.preventDefault();

})

// Event listener for delete 
document.getElementById('book-list').addEventListener('click', function (e) {
    // Intantiate UI
    const ui = new Ui();
    ui.deleteBook(e.target);

    // Show alert message

    ui.showAlert('Book removed!', 'success');

    e.preventDefault();
})

