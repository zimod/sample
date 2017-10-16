

function print(message) {
  var outputDiv = document.getElementById('output');
  //DOM object a node hold the reference to the tag
  outputDiv.innerHTML = message;
}

function printStudent(obj){
  var html='';//declare html with '' or it is undefined
  for(var key in obj){
    if(key ==='name'){
      html+= '<h2>Student: '+obj[key]+'</h2>';
    }else{
      html+='<h3>'+ key+': '+obj[key]+'</h3>';
    }
  }
  return html;
}

function main(){
//   var list ='' ;
//
//   for(var i = 0;i<student.length;i++){
//     list+=printStudent(student[i]);
//   }
//   print(list);
// }
//
// main();
var list = '';
while(true){
  var user_input = prompt("Search student records:type a name [Jody]"
  +"or type [quit] to end");
  if(user_input===null||user_input.toLowerCase() ==="quit"){
    break;
  }else{
    for(var i = 0;i<students.length;i++){
      if(user_input===students[i].name){
        list+=printStudent(students[i]);
        print(list);
        console.log(list);
      }
    }
  }
 }
}

main();
