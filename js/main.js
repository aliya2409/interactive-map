let currentPoint;
const backdrop = document.querySelector('.backdrop');

$('.part').on("click", function() {
	currentPoint = this.id;
	const images = document.getElementsByClassName('diagram');
    Array.from(images).forEach(el => {
        	const newValue = el.getAttribute("src").replace("#", this.id);
        	el.setAttribute("src", newValue);
      });
    	backdrop.classList.add('open');
	$('.description').fadeIn();
})

$('.backdrop').on("click", function() {
    backdrop.classList.remove('open');
    const images = document.getElementsByClassName('diagram');
    Array.from(images).forEach(el => {
             const newValue = el.getAttribute("src").replace(currentPoint, "#");
             el.setAttribute("src", newValue);
      });
    $('.description').fadeOut();
})