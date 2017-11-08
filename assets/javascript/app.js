const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setDate = () => {
	const now = new Date();
	const seconds = now.getSeconds();
	/* this to get the date now with it we get the seconds now*/
	// console.log(seconds);
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	/* this how we convert seconds to degrees to be applied on second hand and add 90 to offset the default*/
	// console.log(secondsDegrees);
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	/* when we select the second-hand and apply styles to it */
	/* rotate added here is usually 100 deg but instead select secondDegrees */

	const minutes = now.getMinutes();
	// console.log(minutes);
	const minDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
	// console.log(minDegrees);
	minHand.style.transform = `rotate(${minDegrees}deg)`;

	const hours = now.getHours();
	// console.log(hours);
	const hourDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
	// console.log(hourDegrees);
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);