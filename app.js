const boy = {
  name: "Daniel Parrick",
  img: "s01.webp",
  designation: "CEO Founder at Google Inch",
  msg: `“Kelly Chandler is definitely an expert in digital marketing! She is always doing a great job and takes time to explain her thoughts and her process. She doesn't hesitate to share new ideas and be proactive all the time, which is great when you want to grow your business.”`,
};

const girl = {
  name: "Julia Steve",
  img: "s02.webp",
  designation: "Manger at Spotify LLC",
  msg: `“We’ve been with higher visibility for about two months now and with the help of our account manager Lauren Moscato, we’ve been able to improve our website and rankings dramatically. We will be continuing business with them and are excited to see what’s to come.”`,
};

let state = 1;

const nameBox = document.getElementById("name");
const designationBox = document.getElementById("designation");
const imgBox = document.getElementById("profile-picture");
const msgBox = document.getElementById("msg");

const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

function changeInfo() {
  if (state === 1) {
    imgBox.setAttribute("src", girl.img);
    msgBox.innerText = girl.msg;
    nameBox.innerText = girl.name;
    designationBox.innerText = girl.designation;

    state++;
  } else {
    imgBox.setAttribute("src", boy.img);
    msgBox.innerText = boy.msg;
    nameBox.innerText = boy.name;
    designationBox.innerText = boy.designation;

    state--;
  }
}

btnLeft.addEventListener("click", changeInfo);
btnRight.addEventListener("click", changeInfo);
