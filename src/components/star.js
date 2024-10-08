const star = "★";
//const noStar = "☆";


export default function starRating(rating) {
    let stars = "";
    for (let i = 0; i < rating; i++) {
        stars += star;
    }
    return stars;

}