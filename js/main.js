document.addEventListener("DOMContentLoaded", () => {
	//Burger Menu
	let headerLock = document.querySelector(".header");
	let burgerMenu = document.querySelector(".header__burger");
	let headMenu = document.querySelector(".header__menu");
	let body = document.querySelector("body");

	burgerMenu.addEventListener("click", () => {
		burgerMenu.classList.toggle('active');
		headMenu.classList.toggle('active');
		headerLock.classList.toggle('lock');
		body.classList.toggle('lock');
	});

	//Button Top
	let topBtn = document.querySelector('.back__top');

	window.addEventListener('scroll', trackScroll);
	topBtn.addEventListener('click', backToTop);	
	
	function trackScroll() {
		let scrolled = window.pageYOffset;
		let coords = document.documentElement.clientHeight;
	
		if (scrolled > coords) {
		  topBtn.classList.add('back__top-show');
		}
		if (scrolled < coords) {
		  topBtn.classList.remove('back__top-show');
		}
	  };

	function backToTop() {
		 if (window.pageYOffset > 0) {
		   window.scrollBy(0, -80);
		   setTimeout(backToTop, 0);
		 }
	  }


	// form

	const ajaxSend = async (formData) => {
        const fetchResp = await fetch('mail.php', {
            method: 'POST',
            body: formData
        });
        if (!fetchResp.ok) {
            alert('Ошибка при отпрвке');
        }
        return await fetchResp.text();
    };

    const form = document.getElementById("form");
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(form);

            ajaxSend(formData)
                .then((response) => {
                    console.log(response);
                    form.reset();
                })
                .catch((err) => console.error(err))
        });
});

//маска для номера телефона
$(function () {
    $("#phone").mask("8(999) 999-99-99");
});


