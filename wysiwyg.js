console.log("hi");
var txtinput = document.getElementById("txinput");
var people = document.getElementById("people");
var rem = 1;

var famousPeople = [{

    title: " Indian film actor",
    name: "Amitabh Bachchan",

    bio: "Amitabh Harivansh Rai Shrivastava Bachchan is an Indian film actor. He first gained popularity in the early 1970s for movies.Then he appeared in over 190 Indian films in a career spanning almost five decades. Bachchan is widely regarded as one of the greatest and most influential actors in the history of Indian cinema.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/98/BACHCHAN_Amitabh_03-24x30-2009.jpg",
    lifespan: "birth: 1942",

}, {
    title: "Indian film actress",
    name: "Aishwarya Rai",
    bio: "Aishwarya Rai (born 1 November 1973), also known by her married name Aishwarya Rai Bachchan, is an Indian actress, model and the winner of the Miss World 1994 pageant. Rai has received numerous awards and accolades, including two Filmfare Awards from eleven nominations, and she was awarded the Padma Shri by the Government of India.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/78/Aishwarya_Rai_Cannes.jpg",
    lifespan: "birth: 1973",
}, {
    title: "Wrestler",

    name: "The Great Khali",
    bio: "Dalip Singh Rana(born 27 August 1972),better known by his ring name The Great Khali, is an Indian and American promoter, actor, powerlifter and professional wrestler best known for his time with WWE. Known for his great height, in 2014 he was described as the eighth tallest professional wrestler in history.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/27/Greatkhali.jpg",
    lifespan: "birth: 1972",
}, {
    title: "Indian cricketer",
    name: "MS Dhoni",
    bio: "Mahendra Singh Dhonicommonly known as MS Dhoni is an Indian cricketer who captained the Indian team in limited-overs formats from 2007 to 2016 and in Test cricket from 2008 to 2014. An attacking right-handed middle-order batsman and wicket-keeper, he is widely regarded as one of the greatest finishers in limited-overs cricket.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/70/Mahendra_Singh_Dhoni_January_2016_%28cropped%29.jpg",
    lifespan: "birth: 1981",
}];




famousPeople.forEach(function(i) {


    people.innerHTML += `<div id=newdiv${rem}>${i.title}<br>${i.name}<br><p>${i.bio}</p><br><img src=${i.image}>${i.lifespan}</div>`;
    if (rem % 2 === 0) {
        document.getElementById("newdiv" + rem).style.background = "LightYellow";

    } else {
        document.getElementById("newdiv" + rem).style.background = "LightBlue";
    }

    rem = rem + 1
    console.log(rem);

});
for (i = 1; i < famousPeople.length + 1; i++) {
    var d = document.getElementById("newdiv" + i);
    d.addEventListener("click", dottedborder);

}

function dottedborder(event) {
    clicktarget = event.currentTarget;
    clicktarget.classList.toggle("clicked")
    txtinput.focus();
}

function addingbio(event) {
    var newbio = clicktarget.getElementsByTagName("p")[0];
    newbio.innerHTML += txtinput.value;
    txtinput.value = "";

}

txtinput.addEventListener("keyup", addingbio);
