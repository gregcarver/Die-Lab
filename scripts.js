$(document).ready(function(){
})

dieArray=[]

var Die=function(){
    var d = Math.floor(Math.random() * 6 + 1);
    this.value = d;
    this.div=document.createElement('div')
    this.div.id='dice'
    document.body.appendChild(this.div)
    this.div.innerHTML = d;
}

Die.prototype.roll=function(){
    this.value=Math.floor(Math.random() * 6 + 1)
    this.div.innerHTML=this.value;
}

$('#btn').on('click',function(){
    var newDie=new Die()
    dieArray.push(newDie)
    console.log(dieArray)
})
$('#roll').on('click',function(){
    dieArray.forEach(function(element) {
    element.roll()
       });
   //    console.log(dieArray)
})
/*$('#sum').on('click',function(){
    dieArray.join('')
 //   alert('sum here')
})*/
$('#dice').on('click',function(){
    console.log('i was clicked')
  //  this.div.roll()
})