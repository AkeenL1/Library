let count = 0;
let myLibrary = [];
function book(title,author,pages,read,index) 
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function()
    {
        console.log(title+" "+author+" "+pages+" "+read);
    }
}
function addBooktoLibrary(title,author,pages,read)
{
    myLibrary[count] = new book(title,author,pages,read);
    count++; 
}

function display()
{
    document.getElementById("displayCard").innerHTML = "";
    
    for(let i = 0;i<count;i++)
    {
        let dlt = document.createElement("BUTTON"); 
        dlt.innerHTML="Delete";
        dlt.className= "deleteBtn";
        dlt.id = i;
        let red = document.createElement("BUTTON"); 
        red.innerHTML="Read";
        red.className= "readBtn";
        red.id = i;
        document.getElementById("displayCard").innerHTML += myLibrary[i].title+" "+myLibrary[i].author+" "+myLibrary[i].pages+" "+myLibrary[i].read+" ";
        document.getElementById("displayCard").appendChild(dlt);
        document.getElementById("displayCard").appendChild(red);
        document.getElementById("displayCard").innerHTML += "<br>";
        deleteFunctionality();
        redFunctionality();
    }
}
let deleteButton = document.getElementsByClassName("deleteBtn");
let redButton = document.getElementsByClassName("readBtn");
redFunctionality();
deleteFunctionality();
const GoT = new book("Game of Thrones","George",100000,false);
myLibrary[0] = GoT;
count++;
display();
const Lor = new book("Lord of the Rings","Tolkein",100001,true);
myLibrary[1] = Lor;
count++;
display();
const newBookButton = document.getElementById("newBookBtn");
newBookButton.addEventListener('click',()=>
{
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    addBooktoLibrary(title,author,pages,read);
    display();
})

function deleteFunctionality()
{
    for(let i = 0;i<deleteButton.length;i++)
    {
        deleteButton[i].addEventListener('click',() =>
        {
            let x = parseInt(deleteButton[i].id);
            myLibrary.splice(x,1);
            let btn = document.getElementById(deleteButton[i].id);
            btn.parentNode.removeChild(btn);
            if(count>0)
                count--;
            display();
            console.log(myLibrary.length);
        })
    }
}

function redFunctionality()
{
    for(let i = 0;i<redButton.length;i++)
    {
        redButton[i].addEventListener('click',() =>
        {
            let x = parseInt(redButton[i].id);
            myLibrary[i].read = !myLibrary[i].read;
            display();
        })
    }
}
