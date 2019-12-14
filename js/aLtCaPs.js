// change links to rickroll
// document.getElementsByTagName("BODY")[0].style.pointerEvents = "all";
let links = document.getElementsByTagName("a");
let inputs = document.getElementsByTagName("input");
// change text to altcaps 
console.log(inputs);
for(let i = 0; i < links.length; i++){
  links[i].setAttribute("href", "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  // let oldText = links.innerText;
  function swapCase(text=links[i].innerText) {
    return text.split('').map((c,i) => 
        i % 2 == 0 ? c.toLowerCase() : c.toUpperCase()
    ).join('');   
  }
  links[i].innerText = swapCase();
  //links[i].innerText = 'NoOoOoOo  '
}
console.log("loaded");
