//first way:function for multiple languages
const addLanguage1=(langName)=>{
    const addli=document.createElement("li");
    addli.innerHTML=`${langName}`;
    document.querySelector(".language").appendChild(addli);

} ;
addLanguage1("C++");
addLanguage1("Python");

//second way to use appendchild function rather than innerHTML
const addLanguage2=(langName)=>{
    const addli=document.createElement("li");
    addli.appendChild(document.createTextNode(langName));
    document.querySelector(".language").appendChild(addli);
};
addLanguage2("golang");
addLanguage2("solidity");

//third way:replacing the li
const replacingLang=document.querySelector("li:nth-child(2)");
const newli=document.createElement("li");
newli.textContent="java";
replacingLang.replaceWith(newli);

// Fourth Way: using outerHTML
const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = "<li>TypeScript</li>";

// Remove a language or delete a language:
const removeLang = document.querySelector("li:last-child");
removeLang.remove();