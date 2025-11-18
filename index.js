alert("Assalomu alaykum");
alert("Mini Profile Dashboard 2 ga xush kelibsiz !");
alert("Ushbu loyihada style lar huddi oldingisiga o'xshaydi ");
alert("Biroq ushbu loyihada boshqa interaktiv funksiyalar ham qo'shilgan");
const nameInput = document.querySelector(".input_1");
const ageInput = document.querySelector(".input_2");
const emailInput = document.querySelector(".input_3");
const hobbyInput = document.querySelector(".input_4");
const birthInput = document.querySelector(".input_5");

const saveBtn = document.querySelector(".profile__button");
const clearBtn = document.querySelector(".profile__btn");
const output = document.querySelector(".output");

function normalizeName(name) {
  name = name.trim().toLowerCase();        
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function validateEmail(email) {
  return email.includes("@");
}

function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

saveBtn.addEventListener("click", () => {
  
  const name = nameInput.value;
  const age = Number(ageInput.value);
  const email = emailInput.value;
  const hobby = hobbyInput.value;
  const birth = Number(birthInput.value.slice(0, 4)); 
  const genderInput = document.querySelector("#gender");

  if(!name || !age || !email || !hobby || !birth ) {
        return alert("inputlarni to'ldiring");
    } else {
        alert("Tizimga muvaffaqiyatli kirildi !");
        window.location.href = "https://github.com/sarvaribrokhimov001?tab=repositories";
    }

  if (!validateEmail(email)) {
    output.innerHTML = `<p style="color:red;"> Email da @ belgisi bo‘lishi shart! </p>`;
    return;
  }

  const fixedName = normalizeName(name);
  const realAge = calculateAge(birth);
  const hobbies = hobby.trim();
  const gender = genderInput.value;

  output.innerHTML = `
    <p style="color: white; margin-left:200px;">
      <strong> Ism: </strong> ${fixedName} <br>
      <strong> Email: </strong> ${email.toLowerCase()} <br>
      <strong> Yosh: </strong> ${realAge} <br>
      <strong> Hobby: </strong> ${hobbies} <br>
      <strong> Tug‘ilgan yil: </strong> ${birth} <br>
      <strong> gender: </strong> ${gender}
    </p>
  `;

  // if(!name || !age || !email || !hobby || !birth ) {
  //       return alert("inputlarni to'ldiring");
  //   } else {
  //       alert("Tizimga muvaffaqiyatli kirildi !");
  //       window.location.href = "https://github.com/sarvaribrokhimov001?tab=repositories";
  //   }
});

let genderText = "";
  switch (gender) {
    case "Male":
      genderText = "Male";
      break;
    case "Female":
      genderText = "Female";
      break;
    default:
      genderText = "Other";
  }

clearBtn.addEventListener("click", () => {
  nameInput.value = "";
  ageInput.value = "";
  emailInput.value = "";
  hobbyInput.value = "";
  birthInput.value = "";
  output.innerHTML = "";
  genderInput.value = "";
});