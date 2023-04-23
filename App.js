// library application

//dark mode aplly
const modes = document.getElementById("dark");
const body = document.getElementById("bodys");

modes.addEventListener("click", function(){
    if(body.style.backgroundColor == "white")
    {
        body.style.backgroundColor = "black";
        const add = document.getElementById("add");
        add.style.color = "white";
    }
    else{
        body.style.backgroundColor = "white";
        const add = document.getElementById("add");
        add.style.color = "black";
    }
});

// grabing the html input elements
const autor = document.getElementById("author");
const titl = document.getElementById("title");
const page = document.getElementById("pages");

const read_or_not = document.getElementById("read_or_not");
const submit = document.getElementById("sub_btn");

// grabing the output provider elements
const ca_author = document.getElementById("card-author"); 
const ca_title = document.getElementById("card-title");
const ca_page = document.getElementById("card-page");

const ca_status = document.getElementById("card-status");

submit.addEventListener("click", function(){
    

   // alert("alewwwwwwwwwwwwwwwww");
   // input values
   ca_author.textContent = `Author: ${autor.value}`;
   ca_title.textContent = `Title: ${titl.value}`;
   ca_page.textContent = `Pages: ${page.value}`;
   ca_status.textContent = `status: ${read_or_not.value}`;

   // creating the virtual card for our data
   let actual_card = document.getElementById("card");
   // let actual_card = document.getElementById("box"); 
   let virtual_card = document.createElement("div");
   // virtual_card.style.overflow = "hidden";
   virtual_card.style.margin = "20px";
   virtual_card.style.paddingTop = "20px";
   virtual_card.style.width = "366px";
   virtual_card.style.Height = "350px";
   virtual_card.style.background = "rgb(242, 242, 242)";
   virtual_card.style.border = "1px solid rgb(217, 217, 217)";
   virtual_card.style.borderRadius = "8px";
   virtual_card.style.borderTopLeftRadius = "12px";
   virtual_card.style.borderBottomLeftRadius = "12px";
   virtual_card.style.borderLeft = "0px solid rgb(102, 255, 102)";
   virtual_card.style.boxShadow = "2px 2px 14px gray";



   let el1 = document.createElement("div");
   el1.style.fontSize = "24px";
   el1.style.textAlign = "center";
   el1.style.marginBottom = "4px";
   el1.style.color = "rgb(140, 140, 140)";
   el1.style.fontWeight = "bold";



   let el2 = document.createElement("div");
   el2.style.fontSize = "24px";
   el2.style.textAlign = "center";
   el2.style.marginBottom = "4px";
   el2.style.color = "rgb(140, 140, 140)";
   el2.style.fontWeight = "bold";



   let el3 = document.createElement("div");
   el3.style.fontSize = "24px";
   el3.style.textAlign = "center";
   el3.style.marginBottom = "4px";
   el3.style.color = "rgb(140, 140, 140)";
   el3.style.fontWeight = "bold";



   // creating remove button
   let el4 = document.createElement("button");
   el4.textContent = "Remove";
   el4.style.marginLeft = "10px";
   el4.style.borderRadius = "8px";
   el4.style.border = "1px solid white";
   el4.style.padding = "12px";
   el4.style.fontWeight = "bold";
   el4.style.letterSpacing = "1px";
   el4.style.color = "black";
   el4.style.backgroundColor = "rgb(255, 0, 0)";
   el4.style.width = "321px";
   el4.style.marginTop = "80px";
   el4.style.marginBottom = "10px";
   //el4.style.borderBottomLeftRadius = "10px";



// attaching onclick event to the remove button   
el4.addEventListener("click", function (){
    let conformation = confirm("Do you want to remove this Content ?");

    if(conformation === true){
        actual_card.removeChild(virtual_card);
    }
    else{
        Window.href.location = "index.html";
    }
    
})



  // creating an element for reading status displayer
   let el5 = document.createElement("button");
   el5.style.borderRadius = "5px";
   el5.style.marginLeft = "10px";
   el5.style.border = "1px solid white";
   el5.style.borderRadius = "8px";
   el5.style.padding = "12px";
   el5.style.fontWeight = "bold";
   el5.style.letterSpacing = "1px";
   el5.style.color = "black";
   el5.style.backgroundColor = "rgb(255, 128, 255)";
   el5.style.width = "320px";
   el5.style.marginTop = "-115px";



// attaching the onclick event to dynamically change the reading status
el5.addEventListener("click", function (){
   // to check the checkbox clicked or not
   if(el5.textContent == "Reading Status: Yes" || el5.textContent == "Yes"){
    el5.style.backgroundColor = "rgb(255, 128, 255)";
    el5.style.border = "1px solid rgb(255, 128, 255)";
    el5.style.color = "black";
    el5.textContent = "Reading Status: No";      
   }
   else if(el5.textContent == "Reading Status: No" || el5.textContent == "No"){
    el5.style.backgroundColor = "rgb(140, 255, 26)";
    el5.style.border = "1px solid rgb(233, 233, 233)";
    el5.style.color = "black";
    el5.textContent = "Reading Status: Yes";      
   }
});



       el1.textContent = `Author: ${autor.value}`;
       //el1.textContent = `Author: ${localStorage.getItem("autorr")}`;
       el2.textContent = `Title: ${titl.value}`;
       el3.textContent = `Pages: ${page.value}`;
       el5.textContent =  `${read_or_not.value}`;
    

        actual_card.appendChild(virtual_card);
        virtual_card.appendChild(el1);
        virtual_card.appendChild(el2);
        virtual_card.appendChild(el3);
        virtual_card.appendChild(el4);
        virtual_card.appendChild(el5);


    //    // asigning the object for our constructor
    //    const ins = new book_store(autor.value, Titl.value, page.value, read_or_not.value);
    //    // log the result
    //    // localStorage.setItem("items", autor.value, Titl.value, page.value, read_or_not.value);
    //       console.log(ins.show_me_res());

});

// reset button function
let reset_btn = document.getElementById("reset");
reset_btn.addEventListener("click", function(){
    autor.value = "";
    titl.value = "";
    page.value = "";
});






























// // function constructor to hold books information
// let MyLibrary = [];
//         function book_store(Author, titles, pages, status){
//             this.Author = Author
//             this.titles = titles
//             this.pages = pages
//             this.status = status
//     }

//  // constructor function
//  submit.addEventListener("click", function(){
    
//     let local_content = localStorage.getItem("MyLibrary");

//     if(local_content === null){
//         MyLibrary = [];
//     }
//     else{
//         MyLibrary = JSON.parse(local_content);
//     }

//     MyLibrary.push(autor.value);
//     MyLibrary.push(titl.value);
//     MyLibrary.push(page.value);
//     MyLibrary.push( read_or_not.value);

//     localStorage.setItem("MyLibrary", JSON.stringify( MyLibrary ));

//     book_store.prototype.show_me_res = function (){
//         return `Author: ${this.Author} title: ${this.titles} pages: ${this.pages} status: ${this.status}`;
//         }

//     // asigning the object for our constructor
//     const ins = new book_store(autor.value, titl.value, page.value, read_or_not.value);
//     // log the result
//     console.log(ins.show_me_res());
// });

//    // input values
// //    ca_author.textContent = `Author: ${localStorage.getItem("books")}`;
// //    ca_title.textContent = `Title: ${localStorage.getItem("books")}`;
// //    ca_page.textContent = `Pages: ${localStorage.getItem("books")}`;
// //    ca_status.textContent = `status: ${localStorage.getItem("books")}`;

// //    alert(ca_title.value);

//    // creating the virtual card for our data
//    let actual_card = document.getElementById("card");
//    // let actual_card = document.getElementById("box"); 
//    let virtual_card = document.createElement("div");
//    // virtual_card.style.overflow = "hidden";
//    virtual_card.style.margin = "20px";
//    virtual_card.style.paddingTop = "20px";
//    virtual_card.style.width = "320px";
//    virtual_card.style.height = "280px";
//    virtual_card.style.background = "rgb(242, 242, 242)";
//    virtual_card.style.border = "1px solid rgb(217, 217, 217)";
//    virtual_card.style.borderRadius = "4px";
//    virtual_card.style.borderTopLeftRadius = "12px";
//    virtual_card.style.borderBottomLeftRadius = "12px";
//    virtual_card.style.borderLeft = "0px solid rgb(102, 255, 102)";
//    virtual_card.style.boxShadow = "2px 2px 14px gray";



//    let el1 = document.createElement("div");
//    el1.style.fontSize = "24px";
//    el1.style.textAlign = "center";
//    el1.style.marginBottom = "4px";
//    el1.style.color = "rgb(140, 140, 140)";
//    el1.style.fontWeight = "bold";



//    let el2 = document.createElement("div");
//    el2.style.fontSize = "24px";
//    el2.style.textAlign = "center";
//    el2.style.marginBottom = "4px";
//    el2.style.color = "rgb(140, 140, 140)";
//    el2.style.fontWeight = "bold";



//    let el3 = document.createElement("div");
//    el3.style.fontSize = "24px";
//    el3.style.textAlign = "center";
//    el3.style.marginBottom = "4px";
//    el3.style.color = "rgb(140, 140, 140)";
//    el3.style.fontWeight = "bold";



//    // creating remove button
//    let el4 = document.createElement("button");
//    el4.textContent = "Remove";
//    el4.style.borderRadius = "5px";
//    el4.style.border = "1px solid white";
//    el4.style.padding = "12px";
//    el4.style.fontWeight = "bold";
//    el4.style.letterSpacing = "1px";
//    el4.style.color = "black";
//    el4.style.backgroundColor = "rgb(255, 0, 0)";
//    el4.style.width = "321px";
//    el4.style.marginTop = "97px";
//    //el4.style.borderBottomLeftRadius = "10px";



// // attaching onclick event to the remove button   
// el4.addEventListener("click", function (){
//     let conformation = confirm("Do you want to remove this Content ?");

//     if(conformation === true){
//         actual_card.removeChild(virtual_card);
//     }
//     else{
//         Window.href.location = "index.html";
//     }
    
// })



//   // creating an element for reading status displayer
//    let el5 = document.createElement("button");
//    el5.style.borderRadius = "5px";
//    el5.style.border = "1px solid white";
//    el5.style.padding = "12px";
//    el5.style.fontWeight = "bold";
//    el5.style.letterSpacing = "1px";
//    el5.style.color = "black";
//    el5.style.backgroundColor = "white";
//    el5.style.width = "320px";
//    el5.style.marginTop = "-97px";


//     // attaching the onclick event to dynamically change the reading status
//     el5.addEventListener("click", function (){
//    // to check the checkbox clicked or not
//    if(el5.textContent == "Reading Status: Yes" || el5.textContent == "Yes"){
//     el5.style.backgroundColor = "rgb(179, 179, 179)";
//     el5.style.border = "1px solid rgb(233, 233, 233)";
//     el5.style.color = "black";
//     el5.textContent = "Reading Status: No";      
//    }
//    else if(el5.textContent == "Reading Status: No" || el5.textContent == "No"){
//     el5.style.backgroundColor = "rgb(140, 255, 26)";
//     el5.style.border = "1px solid rgb(233, 233, 233)";
//     el5.style.color = "black";
//     el5.textContent = "Reading Status: Yes";      
//    }
// });

// el1.textContent = `Author: ${localStorage.getItem("MyLibrary")}`;
// //el1.textContent = `Author: ${localStorage.getItem("autorr")}`;
// el2.textContent = `Title: ${localStorage.getItem("MyLibrary")}`;
// el3.textContent = `Pages: ${localStorage.getItem("MyLibrary")}`;
// el5.textContent =  `${localStorage.getItem("MyLibrary")}`;


//  actual_card.appendChild(virtual_card);
//  virtual_card.appendChild(el1);
//  virtual_card.appendChild(el2);
//  virtual_card.appendChild(el3);
//  virtual_card.appendChild(el4);
//  virtual_card.appendChild(el5);

//  function display_items(items){
//     let len = items.length
//         for(let i = 0; i < len; i++){
//                 console.log(items[i]);
//  }
// }

//  let storage = localStorage.getItem("MyLibrary");

//  display_items(storage);