class Book{
    constructor(title,author,isbn){
        this.title =title;
        this.author = author;
        this.isbn = isbn;
    }
}

class Ui{
    addBookToList(book){
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

    showAlert(message,className){
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

    deleteBook(target){
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields(){
        document.getElementById('title').value = '';  
        document.getElementById('author').value = '';  
        document.getElementById('isbn').value = ''; 

    }
}

// Local storage class
class store{
    static getBooks(){
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];     
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static displayBooks(){
        const books = store.getBooks();

        books.forEach(function (book) {
            const ui = new Ui;

            // Add Book to ui
            ui.addBookToList(book);
        })

    }

    static addBook(book){
        const books = store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));

    }

    static removeBook(isbn){
        const books = store.getBooks();
        books.forEach(function(book,index) {
            if (book.isbn === isbn) {
                books.splice(index,1);
            } 
        });
        
        localStorage.setItem('books', JSON.stringify(books));
    }
}


// Dom Load Event
document.addEventListener('DOMContentLoaded', store.displayBooks);

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

            // Add to local storage
            store.addBook(book);

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

    // Remove from local storage
    store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // Show alert message

    ui.showAlert('Book removed!', 'success');

    e.preventDefault();
})
