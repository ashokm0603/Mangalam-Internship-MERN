//named function
function test() {
    console.log("This is test Function");
}
test()
test()
// named function arguments/parameter 
function display(name, age, phone) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Phone:", phone);
}

display('ayan', 25, 9874561230);
display('Sai', 45, 8874561230);
display('Teja', 35, 6874561230);



//arrow function 
const arrow = (a, b, c) => {
    console.log(a, b, c);
    console.log("This is arrow function");

    const result = a + b + c;

    return result;
}


arrow(true, 20, "java")
console.log(arrow(50,20,30));


function HomePage(Register, Login){
    console.log("User Visited Successfully after login");
    
}
function Login(){
    console.log("User Login Successfully");   
}
function Register(){
    console.log("User Login Register");   
}

HomePage(Register(), Login())


