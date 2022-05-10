/*
============================================
Vanila Javascript Projects, up to 30 for beginners: https://www.vanillajavascriptprojects.com/
  
This pen was a recreation of the project(link) below (for recreation only):
https://vanilla-js-basic-project-3-reviews.netlify.app/
===========================================
*/


const photo = document.getElementById('photo');
const name = document.getElementById('name');
const role = document.getElementById('role');
const review = document.getElementById('review');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const surpriseBtn = document.getElementById('surprise-btn');
let currentIndex = 0;
    
// Read-only template function for customer
function customer(name, role, review, photoUrl) {
  return {
    _name: name,
    _role: role,
    _review: review,
    _photoUrl: photoUrl,
    
    get name() { return this._name; },
    get role() { return this._role; }, 
    get review() { return this._review; },
    get photoUrl() { return this._photoUrl; }
  };
   
  
}

console.clear();

//List of customers who made reviews
let customers = [ 
  customer('Susan Smith', 'web developer', 'I\'m baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry', 'https://images.unsplash.com/photo-1571355104663-60567c828084?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'), 
  customer('ana johnson', 'web designer', 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.', 'https://images.unsplash.com/flagged/photo-1575806984790-b829dc7bd3c1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'),  
  customer('peter jones', 'intern', 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.', 'https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b? ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'),
  customer('bill anderson', 'the boss', 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.', 'https://images.unsplash.com/photo-1516202648085-f93e477d1300?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'),
  
];
//Initializes the DOM with the first customer portfolio on the list
renderInDOM(queryCustomer(0));


//Triggered when the Next button(Right Chevron) is clicked: Moves to the next customer review
nextBtn.addEventListener('click', (e) => {
  let currentCustomer;
  if(currentIndex === (customers.length - 1)) {
    currentIndex = 0;    
  }
  else {
    currentIndex++;
  } 
  currentCustomer = queryCustomer(currentIndex);
  
  // console.log(`index is: ${currentIndex}`);
  renderInDOM(currentCustomer);
});

//Triggered when the Previous button(Left Chevron) is clicked: Moves to the previous customer review
prevBtn.addEventListener('click', (e) => {
  let currentCustomer;
  if(currentIndex === 0) {
    currentIndex = customers.length - 1;
  }
  else {
    currentIndex--;   
  }
  
  currentCustomer = queryCustomer(currentIndex);
  // console.log(`index is: ${currentIndex}`);
  renderInDOM(currentCustomer);
  
})

//Triggered when the 'Surprise Me' button is clicked: Chooses a random customer review
surpriseBtn.addEventListener('click', (e) => {
  currentIndex = Math.floor(Math.random() * customers.length);
  const currentCustomer = queryCustomer(currentIndex);
  
  // console.log(`index is: ${currentIndex}`);
  renderInDOM(currentCustomer);
});

//returns a customer object similar to that in the customers datalist with the given index. 
function queryCustomer(customerIndex=0, customerList=customers) { 
  return customerList[customerIndex];
}
//Updates the DOM with the current customer portfolio
function renderInDOM(currentCustomer) {
  photo.src = currentCustomer.photoUrl;
  name.textContent = currentCustomer.name;
  role.textContent = currentCustomer.role;
  review.textContent = currentCustomer.review;
 
}