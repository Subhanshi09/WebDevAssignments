const myButton = document.getElementById('button');
const val = document.querySelector('textarea');
const myList= document.getElementById('list');
const deleteButton= document.getElementsByClassName('dltbtn');

let arr=[];
let temp;

function show(){
    let html="";
    arr.forEach((element,id) => {
        html+=`
        <div class="noteCard my-2 mx-2 card" style="width: 20rem; ">
        <div class="cardbody" >
          <h5 class="card-title">Note ${id+1}</h5>
          <p class="card-text">${element}</p>
          <button class="dltbtn" onclick="deletee(${id})">🗑</button> &nbsp &nbsp<button onclick="moveupp(${id})" class="mbtn">☚</button>  &nbsp &nbsp<button onclick="movedownn(${id})" class="dbtn">☛</button>&nbsp &nbsp<button onclick="editing(${id})" class="ebtn">&#9998;</button>
        </div>
      </div>
    `;
    });
    myList.innerHTML=html;

}

myButton.addEventListener("click",(e)=>{
    
    if(val!=="")
    {
        arr.push(val.value);
        show();
    }
    else{
        alert('Value is empty');
        show();
    }
    
    val.value="";

});

function deletee(id){
    arr.splice(id,1);
    show();
}
function moveupp(id)
{
    temp=arr[id];
    arr[id]=arr[id-1];
    arr[id-1]=temp;
    
    show();
}
function movedownn(id)
{
    temp=arr[id];
    arr[id]=arr[id+1];
    arr[id+1]=temp;
    
    show();
}

function editing(id){
    const temp=arr[id];
    val.value=temp;
    deletee(id);
    
}


