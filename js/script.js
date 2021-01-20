var show = function (elem) {
    elem.style.display = 'flex';
   
};

var hide = function (elem) {
    elem.style.display = 'none';
    
};

var toggle = function (elem) {

	// If the element is visible, hide it
	if (window.getComputedStyle(elem).display === 'flex') {
        hide(elem);
		return;
	}

	// Otherwise, show it
    show(elem);

    
};


document.addEventListener('click', function (event) {

	// Make sure clicked element is our toggle
    if (!event.target.classList.contains('toggle')) return;
    
	// Prevent default link behavior
    event.preventDefault();
    

	// Get the content
	var content = document.querySelector(event.target.hash);
    if (!content) return;
    
	// Toggle the content
    toggle(content);
        
    document.querySelector('#choice_box1').style.display = 'none';
    document.querySelector('#next1').style.display = 'flex';
}, false);

document.addEventListener('click', function (event) {

	// Make sure clicked element is our toggle
    if (!event.target.classList.contains('toggle2')) return;
    
	// Prevent default link behavior
    event.preventDefault();
    

	// Get the content
	var content = document.querySelector(event.target.hash);
    if (!content) return;
    
	// Toggle the content
    toggle(content);

    document.querySelector('#choice_box2').style.display = 'none';
    document.querySelector('#next2').style.display = 'flex';
        
}, false);

document.addEventListener('click', function (event) {

	// Make sure clicked element is our toggle
    if (!event.target.classList.contains('toggle3')) return;
    
	// Prevent default link behavior
    event.preventDefault();
    

	// Get the content
	var content = document.querySelector(event.target.hash);
    if (!content) return;
    
	// Toggle the content
    toggle(content);

    document.querySelector('#choice_box3').style.display = 'none';
    document.querySelector('#next3').style.display = 'flex';
        
}, false);

document.addEventListener('click', function (event) {

	// Make sure clicked element is our toggle
    if (!event.target.classList.contains('toggle4')) return;
    
	// Prevent default link behavior
    event.preventDefault();
    

	// Get the content
	var content = document.querySelector(event.target.hash);
    if (!content) return;
    
	// Toggle the content
    toggle(content);

    document.querySelector('#choice_box4').style.display = 'none';
    document.querySelector('#next4').style.display = 'flex';
        
}, false);

document.addEventListener('click', function (event) {

	// Make sure clicked element is our toggle
    if (!event.target.classList.contains('toggle5')) return;
    
	// Prevent default link behavior
    event.preventDefault();
    

	// Get the content
	var content = document.querySelector(event.target.hash);
    if (!content) return;
    
	// Toggle the content
    toggle(content);

    document.querySelector('#choice_box5').style.display = 'none';
    document.querySelector('#next5').style.display = 'flex';
        
}, false);

document.addEventListener('click', function (event) {

	// Make sure clicked element is our toggle
    if (!event.target.classList.contains('toggle6')) return;
    
	// Prevent default link behavior
    event.preventDefault();
    

	// Get the content
	var content = document.querySelector(event.target.hash);
    if (!content) return;
    
	// Toggle the content
    toggle(content);

    document.querySelector('#choice_box6').style.display = 'none';
    document.querySelector('#next6').style.display = 'flex';
        
}, false);

document.addEventListener('click', function (event) {

	// Make sure clicked element is our toggle
    if (!event.target.classList.contains('toggle7')) return;
    
	// Prevent default link behavior
    event.preventDefault();
    

	// Get the content
	var content = document.querySelector(event.target.hash);
    if (!content) return;
    
	// Toggle the content
    toggle(content);

    document.querySelector('#choice_box7').style.display = 'none';
    document.querySelector('#next7').style.display = 'flex';
        
}, false);

document.addEventListener('click', function (event) {

	// Make sure clicked element is our toggle
    if (!event.target.classList.contains('toggle8')) return;
    
	// Prevent default link behavior
    event.preventDefault();
    

	// Get the content
	var content = document.querySelector(event.target.hash);
    if (!content) return;
    
	// Toggle the content
    toggle(content);

    document.querySelector('#choice_box8').style.display = 'none';
    document.querySelector('#next8').style.display = 'flex';
        
}, false);

document.addEventListener('click', function (event) {

	// Make sure clicked element is our toggle
    if (!event.target.classList.contains('toggle9')) return;
    
	// Prevent default link behavior
    event.preventDefault();
    

	// Get the content
	var content = document.querySelector(event.target.hash);
    if (!content) return;
    
	// Toggle the content
    toggle(content);

    document.querySelector('#choice_box9').style.display = 'none';
    document.querySelector('#next9').style.display = 'flex';
        
}, false);

document.addEventListener('click', function (event) {

	// Make sure clicked element is our toggle
    if (!event.target.classList.contains('toggle10')) return;
    
	// Prevent default link behavior
    event.preventDefault();
    

	// Get the content
	var content = document.querySelector(event.target.hash);
    if (!content) return;
    
	// Toggle the content
    toggle(content);

    document.querySelector('#choice_box10').style.display = 'none';
    document.querySelector('#next10').style.display = 'flex';
        
}, false);

document.addEventListener('click', function (event) {

	// Make sure clicked element is our toggle
    if (!event.target.classList.contains('toggle11')) return;
    
	// Prevent default link behavior
    event.preventDefault();
    

	// Get the content
	var content = document.querySelector(event.target.hash);
    if (!content) return;
    
	// Toggle the content
    toggle(content);

    document.querySelector('#choice_box11').style.display = 'none';
    document.querySelector('#next11').style.display = 'block';
        
}, false);