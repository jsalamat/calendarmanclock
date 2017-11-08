const setDate = () => {
	const now = new Date();
	const seconds = now.getSeconds();
	/* this to get the date now with it we get the seconds now*/
	console.log(seconds);
	const secondsDegrees = ((seconds / 60) * 360);
	/* this how we convert seconds to degrees to be applied on second hand */
	console.log(secondsDegrees);
}

setInterval(setDate, 1000);