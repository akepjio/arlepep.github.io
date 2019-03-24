function init(){
    //task 4
    let image = document.createElement("img");
    image.src="flower2.png";
    var sroc = document.getElementById("new_element");
    sroc.appendChild(image);

    
    //task5
    console.log("colors[i]");
    let spans = document.getElementsByClassName("rain");
    var length = document.getElementsByClassName("rain").length;
let colors = ["red", "orange","yellow","green","blue","violet","pink"];
for (var i = length - 1; i >= 0; i--) {
	spans[i].style.color = colors[i];
}

    //task 6
    var changeSrc = function(event) {
        if (event.target.src) {
            let filename = event.target.src.replace(/^.*[\\\/]*$/, 'flower2.png');
            event.target.src = filename ;
          } 
    };
    var changeOut = function(event) {
        if (event.target.src) {
        let filename = event.target.src.replace(/^.*[\\\/]*$/, 'flower1.png');
        event.target.src = filename ;
         }
        
    };
     
      document.getElementById("event").addEventListener("mouseover", changeSrc);
      document.getElementById("event").addEventListener("mouseout", changeOut);
    
}

function addItem(){
    var ul = document.getElementById("element");
    var hu = document.getElementById("hu");
    var li = document.createElement("li");
    li.setAttribute('id',hu.value);
    li.appendChild(document.createTextNode(hu.value));
    ul.appendChild(li);

    var check = document.getElementById("impo").checked
    var check1 = document.getElementById("bou").checked
            if (check){
                li.style.color="red";
            }
            else  {
                  if (check1){
                    li.style["text-decoration"]="underline";
                  }
            }
    }


function removeItems(){
var num = document.getElementById('num').value;
var lis = document.getElementById("element");
lis.removeChild(lis.childNodes[num]);
}