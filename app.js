// to search a movie in the list
function myfunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName("name")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        };
    };
};

// to hide the list when checkbox is checked
function myFunction() {
  var checkBox = document.getElementById("hide");
  var text = document.getElementById("movie-list");
  if (checkBox.checked == true){
    text.style.display = "none";
  } else {
    text.style.display = "block";
  }
}

// to add a movie to the list
var add = document.querySelector('#add-movie button');
add.addEventListener('click',function(e){
    e.preventDefault();
    var name = document.getElementById('movie');
    if(name.value!="")
        {
            var add1 = document.querySelector('#movie-list ul');
            var node = document.createElement("li");
            var el = document.createElement("span");
            el.setAttribute("class","name");
            var text = document.createTextNode(name.value);
            el.appendChild(text);
            var el1 = document.createElement("span");
            el1.setAttribute("class","delete");
            var text1 = document.createTextNode("delete");
            el1.appendChild(text1);
            
            node.appendChild(el);
            node.appendChild(el1);
            
            add1.appendChild(node);              
        }
                  
});

// to delete a movie from the list
var list = document.querySelector('#movie-list ul');
list.addEventListener('click', function(e){
    if(e.target.className === 'delete'){          // We want to get where did the click happened, so className
        console.log(e.target);
        const li = e.target.parentElement;         // this is the li which is the parent to the delete and we want to delete it.
        console.log(li);
        li.parentNode.removeChild(li);
        list.removeChild(li);
       }
})
