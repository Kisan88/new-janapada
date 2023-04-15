const form = document.querySelector("form");
// const successMessage = document.querySelector('.success-message');
// const errorMessage = document.querySelector('.error-message');

form.addEventListener("submit", (event) => {

  // Get the form fields
  const eventDate = document.getElementById("eventDate").value;
  const eventTime = document.getElementById("eventTime").value;

  const organizationName = document.getElementById("organizationName").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const group = document.getElementById("group");
  const individual = document.getElementById("individual");

  group.onclick = function () {
    console.log("asd");
  };

  // Validate the form
  let isValid = true;
  const errors = [];

  if (!eventDate) {
    isValid = false;
    errors.push("Event Date is required");
  }

  if (!eventTime) {
    isValid = false;
    errors.push("Event Time is required");
  }

  

  if (!organizationName) {
    isValid = false;
    errors.push("Organization Name is required");
  }

  if (!phone) {
    isValid = false;
    errors.push("Phone is required");
  } else if (!/^[0-9]{10}$/.test(phone)) {
    isValid = false;
    errors.push("Phone number is invalid");
  }

  if (email && !/\S+@\S+\.\S+/.test(email)) {
    isValid = false;
    errors.push("Email is invalid");
  }

  // Show success or error message
  //   if (isValid) {
  //     successMessage.style.display = 'block';
  //     errorMessage.style.display = 'none';
  //     form.reset();
  //   } else {
  //     successMessage.style.display = 'none';
  //     errorMessage.style.display = 'block';
  //     errorMessage.innerHTML = errors.join('<br>');
  //   }
});

// Everything except weekend days
const validate = (dateString) => {
  console.log("dcdwc");
  const day = new Date(dateString).getDay();
  if (day == 2) {
    alert("The mueseum is closed on that day");
    return false;
  }
  return true;
};

// Sets the value to '' in case of an invalid date
document.querySelector(".date-picker").onchange = (evt) => {
  if (!validate(evt.target.value)) {
    evt.target.value = "";
  }
};
