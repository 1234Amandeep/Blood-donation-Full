const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const bloodGroupInput = document.getElementById("blood-group");

const btn = document.querySelector("button");

// Event handler
const handleSubmit = (e) => {
  e.preventDefault();

  const reqDataPacket = {
    name: nameInput.value,
    email: emailInput.value,
    bloodGroup: bloodGroupInput.value,
  };

  // Sending form data...
  sendFormData(reqDataPacket);

  nameInput.value = null;
  emailInput.value = null;
  bloodGroupInput.value = null;
};

btn.addEventListener("click", handleSubmit);

// declaring fetch method
const sendFormData = async (reqDataPacket) => {
  // req. packet
  const data = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqDataPacket),
  };

  // posting data
  const response = await fetch("http://localhost:4000/form", data);

  const jsonRes = await response.json();

  console.log(jsonRes);
};
