const form = document.querySelector('.login-form');

const onFormSubmit = (event) => {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

   if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }

  const formObj = {
    email,
    password,
  }
  console.log(formObj);

  // const formData = new FormData(event.currentTarget);

  // formData.forEach((value, name) => {
  // console.log(name);
  // console.log(value);
  // })
}

form.addEventListener('submit', onFormSubmit);

