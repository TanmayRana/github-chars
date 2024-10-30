const name = "Tanmay Rana";
console.log(name);

const age = 21;
const dob = "20/06/2003";

const sayName = () => {
  console.log("My name is " + name);
  console.log("I am " + age + " years old");
};

sayName();

const sum = (a, b) => {
  return a + b;
};

function Hello(data) {
  const { naem, email } = data;
  console.log("Hello 👋" + naem + " your email is " + email);
}

Hello({ naem: "Tanmay", email: "tanmay@gmail.com" });
