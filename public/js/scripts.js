const cardList = [
  {
    title: "Kitten 1",
    image: "images/kitten.jpg",
    link: "About Kitten 1",
    description: "This is kitten 1. It is very cute and playful. Kittens are known for their playful nature and curiosity."
  },
  {
    title: "Kitten 2",
    image: "images/kitten-2.jpg",
    link: "About Kitten 2",
    description: "This is kitten 2. It loves naps and playing with yarn balls. Adorable and curious!"
  },
  {
    title: "Kitten 3",
    image: "images/kitten-3.jpg",
    link: "About Kitten 3",
    description: "Kitten 3 enjoys sunny windows and gentle head pats. Very affectionate and friendly."
  }
];

const clickMe = () => {
  alert("Thanks for clicking me. Hope you have a nice day!");
};

const submitForm = () => {
  let formData = {
    first_name: $('#first_name').val(),
    last_name: $('#last_name').val(),
    password: $('#password').val(),
    email: $('#email').val()
  };
  console.log("Form Data Submitted:", formData);
};



const addCards = (items) => {
  items.forEach(item => {
    console.log("Card description:", item.description); 
    let itemToAppend = `
      <div class="col s4 center-align">
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${item.image}">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              ${item.title}<i class="material-icons right">more_vert</i>
            </span>
            <p><a href="#">${item.link}</a></p>
          </div>
          <div class="card-reveal" style="background-color: #fff0f5; color: #333;">
            <span class="card-title grey-text text-darken-4">
              ${item.title}<i class="material-icons right">close</i>
            </span>
            <p class="card-text">${item.description}</p>
          </div>
        </div>
      </div>
    `;
    $("#card-section").append(itemToAppend);
  });
};

$(document).ready(function(){
  $('.materialboxed').materialbox();
  $('#formSubmit').click(() => submitForm());
  addCards(cardList);
  $('.modal').modal();
});
