//Author Esther Dzifa Mensah
//Date 01/05/2020
var todoList = [];
var a= " ";

function todoApp(){
    
    todoList.push({
        key : document.getElementById('dateTime').value,
        value :document.getElementById('item').value + "-------" + document.getElementById('severity').value
        
    })    

    console.log(todoList);
    alert (JSON.stringify(todoList));
        var x = todoList.length - 1;
        
        a += "<br />"+ JSON.stringify(todoList[x].key + "-------" + todoList[x].value)+ "<br />"; 
    
        document.getElementById('display').innerHTML = a;
        todoList.sort();
    //console.log(todoList);
        
    //Sorting list in descending order
    //Using recurssion
   
    
  };
}
