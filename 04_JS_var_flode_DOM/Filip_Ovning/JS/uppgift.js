const img = document.createElement('img');
img.style.width = "500px";  


img.src = "../IMG/contactImg.jpg";


img.alt = 'Image'; 
img.title = 'Image Title'; 


document.body.appendChild(img);




const article = document.createElement(`article`);
article.style.border = "2px solid black";
article.style.marginTop = "50px";
article.style.height = "auto";
article.style.width = "50vh";
article.style.backgroundColor = "lightgray";



const heading = document.createElement(`h1`);
heading.style.border = "1px solid black";
heading.style.width = "40%";
heading.style.margin = "20px auto ";
heading.style.textAlign = "center";
heading.style.backgroundColor = "white";

heading.textContent = "Your Article Heading";



const p1 = document.createElement(`p`);
p1.style.border = "1px solid black";
p1.style.width = "60%";
p1.style.margin = "20px auto ";
p1.style.textAlign = "center";
p1.style.backgroundColor = "white";

p1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const p2 = document.createElement(`p`);
p2.style.border = "1px solid black";
p2.style.width = "60%";
p2.style.margin = "20px auto ";
p2.style.textAlign = "center";
p2.style.backgroundColor = "white";

p2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";




article.appendChild(heading);

article.appendChild(p1)
article.appendChild(p2)

document.body.appendChild(article);