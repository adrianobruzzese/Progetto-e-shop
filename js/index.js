const generateCards = function (wineCatalog) {
  // manipolazione del DOM
  wineCatalog.forEach((wine) => {
    const newCol = document.createElement('div');
    newCol.classList.add('col', 'col-12', 'col-md-4', 'col-lg-3');
    newCol.innerHTML = `
        <div class="card h-100">
            <img src="https://www.freepik.com/free-photo/male-customer-holding-bottle-red-wine-close-up_57622858.htm#query=bottles%20of%20wine&position=6&from_view=search&track=ais&uuid=099aee8d-629c-41eb-af43-95da825f5042" alt="...">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${wine.name}</h5>
                <p class="card-text flex-grow-1">${wine.brand}</p>
                <p class="card-text">${wine.description}</p>
                <a href="#" class="btn btn-primary"><i class="bi bi-cart-check me-2"></i>€${
                  wine.price || '?'
                }</a>
                <a href="./details.html?wineId=${
                  wine._id
                }" class="btn btn-success mt-2"><i class="bi bi-caret-right"></i></i>
                 Scopri di più 
                </a>
            </div>
        </div>
        `;
    const winesRow = document.getElementById('wines-row');
    winesRow.appendChild(newCol);
  });
};

const addWine = function () {
  const myURL = 'https://striveschool-api.herokuapp.com/api/product';
  fetch(myURL)
    .then((response) => {
      console.log('response', response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('errore nella chiamata');
      }
    })
    .then((data) => {
      console.log('DATA', data);
     
      generateWineCards(data);
    })
    .catch((err) => {
      
      console.log(err);
    });
};

addWine();
