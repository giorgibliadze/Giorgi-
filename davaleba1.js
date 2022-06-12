
  //task 1
  let person1 = {
    name :'ანა',
    age : 28,
} //object

let person2 = {
    name :'ლევანი',
    age : 21,
} //object
let differenceOfAge=person1.age-person2.age;
let result=person1.name+" "+person2.name+"-ზე"+" "+differenceOfAge+" წლით უფროსია";
console.log(result);

//task 2
let StudentArr= ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
let MiddleNumber=((StudentArr.length-1)/2);
let StudentMiddleName=(StudentArr[MiddleNumber]);
console.log(StudentMiddleName);

//task 3
let student = {
    firstName : 'გიორგი',
    lastName : 'ბლიაძე',
    age : 25,
    subjects : ['მიკრო ეკონომიკა','მაკრო ეკონომიკა','კალკულუს 1','კალკულუს 2','სტატისტიკა'],
    roommate : {
        fullname : 'ვალერი ბლიაძე' ,
        age : 23
    }
}
let SubjectsLength=subjects.length

for (var i=0 ; i < SubjectsLength;i++){
    console.log(subjects[i])
}
let FullName=student.firstName+' '+student.lastName
var result3 = FullName + ' ' + 'არის' + ' ' + student.age + ' ' + 'წლის და მისი რუმმეითი არის'+ ' ' + student.roommate.fullname ;
console.log(result);

//task 4

let TableArr=["Banana", "Orange", "Apple", "Mango",2,12]
i = 0 ;

while ( typeof TableArr[i] == 'string'){
    
    console.log(TableArr[i]);
    i++
}

//task 5

var arr = [12,23,43,11,9,2,121,90]

for (var i = 0 ; i < arr.length ; i++){
    if (arr[i] > 31 && arr[i] % 2 == 0 ){
        console.log('Element is greater than provided value and is EVEN');
    }else{
        console.log('Element is less than provided value and is ODD');
    }
}
