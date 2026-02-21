const school = 'Raj UK Uttara Model School';

console.log(school); 
 console.log(school.toLowerCase());
 console.log(school.toUpperCase());

//uppercase: ABSCK
// lowercase: absk

const subject = 'Chemistry';
const book  = 'chemistry'; 

if(subject.toLocaleLowerCase() === book.toLocaleLowerCase()){
    console.log('I am reading book aibar porikhai fatai felmu');
     
}

else {
    console.log('Monira is my beautiful wife'); 
}

const drink = 'wat er';
const liquid = ' water';

if(drink.trim() === liquid.trim()){
    console.log('পানির অপর  নাম জীবন'); 
}

else {
    console.log('সুম্রদে পানি আছে খাইতে পারি না');
}