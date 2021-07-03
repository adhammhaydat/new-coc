let table =document.getElementById('table');
let form =document.getElementById('form');
let submitBtn=document.getElementById('submitBtn');

function Phone(user,type,price,condition){
  this.user=user;
  this.type=type;
  this.price=price;
  this.condition=condition;
Phone.all.push(this);
}
Phone.all=[];

function render(){
  let data = JSON.parse(localStorage.getItem('phone'));
  if(data){
    Phone.all=data;
    for (let i = 0; i < data.length; i++) {
      let tr =document.createElement('tr');
    table.appendChild(tr);
      let td =document.createElement('td');
      tr.appendChild(td);
      td.textContent=data[i].user;
      console.log(data[i])
      let td2 =document.createElement('td');
      tr.appendChild(td2);
      td2.textContent=data[i].type;
      let td3 =document.createElement('td');
      tr.appendChild(td3);
      td3.textContent=data[i].price;
      let td4 =document.createElement('td');
      tr.appendChild(td4);
      td4.textContent=data[i].condition;
      
  }
 
}

}
render();
function getData(e){
  e.preventDefault();
  let user=e.target.user.value;
  let selectOption=e.target.selectOption.value;
  let price = getRandomInt(100, 500);
    let condition = check(price);
  new Phone(user , selectOption,price,condition);
  
  localStorage.setItem('phone',JSON.stringify(Phone.all))
  
  
  
    let tr =document.createElement('tr');
  table.appendChild(tr);
    let td =document.createElement('td');
    tr.appendChild(td);
    td.textContent=user;
    console.log(Phone.all)
    let td2 =document.createElement('td');
    tr.appendChild(td2);
    td2.textContent=selectOption;
    let td3 =document.createElement('td');
    tr.appendChild(td3);
    td3.textContent=price;
    let td4 =document.createElement('td');
    tr.appendChild(td4);
    td4.textContent=condition;
    
  
    

}
form.addEventListener('submit',getData);


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function check(value){
 if(value>= 200){
   return 'new';
 }else{return 'used';}
}