let images = [];
let i = 0;
let timer = 2000;

images[0] = './images/bg-img.jpg';
images[1] = './images/kanchanara-GnWfl_nnZro-unsplash.jpg';
images[2] = './images/kanchanara-OqEPgkdX3RA-unsplash.jpg';
images[3] = './images/traxer-ZAIbez5LTrg-unsplash.jpg';

const changeImage = () => {
	document.slide.src = images[i];
	//document.querySelector('.carousel').src = images[i];

	if (i < images.length - 1) {
		i++;
	} else {
		i = 0;
	}

	setTimeout('changeImage()', timer);
};

window.onload = changeImage;
