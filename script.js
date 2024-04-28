const popup = document.querySelector('.popup')
const addButton = document.querySelector('#addBook')
const entryButton = document.querySelector('#entry')

const main = document.querySelector('main')

const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // The books create ids but with no use right now
    // this.bookid = () => {
    //     let bookId = ''
    //     for(let i = 0; i < 10; i++){
    //         bookId += Math.floor(Math.random()*10)
    //     }
    //     return bookId
    // }
};

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read)
    myLibrary.push(book)
    let divContainer = document.createElement('div')
    divContainer.className = 'divContainer'

    let h11 = document.createElement('h1')
    let h12 = document.createElement('h1')
    let h13 = document.createElement('h1')
    let h14 = document.createElement('h1')

    h11.className = 'bookInfoText'
    h12.className = 'bookInfoText'
    h13.className = 'bookInfoText'
    h14.className = 'bookInfoText'

    h11.innerText = title
    h12.innerText = author
    h13.innerText = pages
    h14.innerText = read

    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')
    let p4 = document.createElement('p')
    
    p1.innerText = 'name:'
    p2.innerText = 'author:'
    p3.innerText = 'pages:'
    p4.innerText = 'read:'

    const buttonInBook = document.createElement('button')
    buttonInBook.className = 'buttonInBook'
    buttonInBook.innerText = '🗑️'

    buttonInBook.addEventListener('click', ()=>{
        divContainer.remove()
    })

    divContainer.append(p1, h11, p2, h12, p3, h13, p4, h14, buttonInBook)

    main.appendChild(divContainer)

    return
}

addButton.addEventListener('click', ()=>{
    popup.style.visibility = 'visible'
})

entryButton.addEventListener('click', ()=>{
    const titleOfBook = document.querySelector('#titleOfBook')
    const authorOfBook = document.querySelector('#authorOfBook')
    const pagesRead = document.querySelector('#pagesRead')
    const readStatus = document.querySelector('#readStatus')

    // console.log(titleOfBook.value, authorOfBook.value, pagesRead.value, readStatus.value)

    if(titleOfBook.value == '' || authorOfBook.value == '' || pagesRead.value == '' || readStatus.value == ''){
        entryButton.textContent = 'error'
    } else {
        popup.style.visibility = 'hidden'

        addBookToLibrary(titleOfBook.value, authorOfBook.value, pagesRead.value, readStatus.value)
        // console.log(myLibrary)

        entryButton.textContent = ''
        titleOfBook.value = ''
        authorOfBook.value = ''
        pagesRead.value = ''
        readStatus.value = ''
    }
})
