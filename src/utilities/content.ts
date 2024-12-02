// ***************************************
//
//   Star Rating
//
// ***************************************

export const getStarRating = (
	number: number,
	maximum = 5,
	hasEmptyStars = true
) => {
	let rating = "";
	number = Number(number);

	for (let i = 1; i <= maximum; i++) {
		if (i <= number) {
			rating += "★";
		} else if (i > number + 0.5) {
			if (hasEmptyStars) {
				rating += "☆";
			}
		} else {
			rating += "½";
		}
	}

	return rating;
};
