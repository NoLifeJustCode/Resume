function isVisible(element){
    var h=document.body.clientHeight;
    var rect=element.getBoundingClientRect();
    return rect.top<h	&&rect.bottom>0
}
function fill(){
console.log('filling')
var temp=document.querySelectorAll('.progress')
for(let i of temp){
if(isVisible(i)){
var width=i.getAttribute('skillLevel')
var color=i.getAttribute('skillColor')
i.style.width=width
i.style.backgroundColor=color;
}else{
i.style.width=0;
i.style.backgroundColor="none"

}
}
}

window.onload=function(){
    window.onscroll=fill;
    this.fill()
}