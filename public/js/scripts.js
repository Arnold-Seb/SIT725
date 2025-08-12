const clickMe = () => {
  alert("Thanks for clicking me. Hope you have a nice day!");
};

const submitForm = () => {
  const formData = {
    first_name: $('#first_name').val(),
    last_name: $('#last_name').val(),
    email: $('#email').val(),
    password: $('#password').val()
  };

  fetch('/api/form', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(() => M.toast({ html: 'Form submitted successfully!', classes: 'green' }))
    .catch(() => M.toast({ html: 'Failed to submit form.', classes: 'red' }));
};

const addCards = (items) => {
  $("#card-section").empty();
  items.forEach(item => {
    const card = `
      <div class="col s12 m6 l4 center-align">
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
          <div class="card-reveal" style="background-color:#fff0f5;color:#333;">
            <span class="card-title grey-text text-darken-4">
              ${item.title}<i class="material-icons right">close</i>
            </span>
            <p class="card-text">${item.description}</p>
          </div>
        </div>
      </div>
    `;
    $("#card-section").append(card);
  });
};

const getProjects = () => {
  fetch('/api/projects')
    .then(res => res.json())
    .then(response => {
      if (response.statusCode === 200) addCards(response.data);
    });
};

$(document).ready(function () {
  $('.materialboxed').materialbox();
  $('.modal').modal();
  $('#formSubmit').click(() => submitForm());
  getProjects();
});
