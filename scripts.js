$(document).ready(function(){
    
})

dieArray=[]

var Die=function(value){
    this.value=value
    var diceRoll=Math.floor(Math.random() * 6);
    var div=document.createElement('div')
    div.className='dice'
    document.body.appendChild(div)
    if(diceRoll>0){
    div.innerHTML=diceRoll
    }
    else{
        div.remove()
    }
    dieArray.push(diceRoll)

}

//value to array
var d=new Die(Math.floor(Math.random() * 6))

Die.prototype.roll=function(){
    console.log(this.value)
}

$('#btn').on('click',function(){
    Die()
    console.log(dieArray)
})
$('#roll').on('click',function(){
    d.roll()
})