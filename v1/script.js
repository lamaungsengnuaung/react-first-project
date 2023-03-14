const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];
const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];
// database join
async function loadFact() {
  const res = await fetch(
    "https://adwbuftybabpvvkyshlx.supabase.co/rest/v1/fact",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkd2J1ZnR5YmFicHZ2a3lzaGx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0MTc2NzMsImV4cCI6MTk5Mjk5MzY3M30.EwLa3FJI0cFTZpkwo3akSi5Ns50cV-F_aRhALDFqLqk",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkd2J1ZnR5YmFicHZ2a3lzaGx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0MTc2NzMsImV4cCI6MTk5Mjk5MzY3M30.EwLa3FJI0cFTZpkwo3akSi5Ns50cV-F_aRhALDFqLqk",
      },
    }
  );
  const dataJSON = await res.json();
  const dataFilter = dataJSON.filter((el) => el.category === "society");
  // console.log(dataJSON);
  createFactElement(dataJSON);
  console.log(dataFilter);
}
loadFact();

const btnOpen = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factList = document.querySelector(".fact-list");

factList.innerHTML = "";
function createFactElement(dataArray) {
  const factHTML = dataArray
    .map(
      (data) => `<li class="fact">
              <p>
                ${data.text}
                <a
                  class="source"
                  href="${data.source}"
                  target="_blank"
                  >(Source)</a
                >
              </p>
              <span class="tag" style="background-color: ${
                CATEGORIES.find((cat) => cat.name === data.category).color
              }">${data.category}</span>
              <div class="vote-buttons">
                <button>👍<strong>24</strong></button>
                <button>🤯<strong>9</strong></button>
                <button>⛔️<strong>4</strong></button>
              </div>
            </li>`
    )
    .join("");
  factList.insertAdjacentHTML("afterbegin", factHTML);
}
createFactElement(initialFacts);

// factList.insertAdjacentHTML("beforebegin", "<li>Hello BMPS1</li>");
// factList.insertAdjacentHTML("beforebegin", "<li>Hello BMPS2</li>");

btnOpen.addEventListener("click", function () {
  // console.log("click");
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btnOpen.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btnOpen.textContent = "Share A Fact";
  }
});

let voteIntresting = 24;
let voteMindBlowning = 9;
let voteFalse = 4;
let totalUpVote = voteIntresting + voteMindBlowning;
// console.log("Total Up Vote : ", totalUpVote);

// const isCorrect = totalUpVote === falseVote;
// console.log(isCorrect);
const message =
  totalUpVote > voteFalse ? "The Fact Is True" : "Might Be False, Check Back!";
console.log(message);

// const factAge = function (factYear) {
//   const age = 2023 - factYear;
//   if (age > 0) {
//     return console.log(age);
//   } else {
//     return console.log("sory");
//   }
// };
// factAge(2002);
// // console.log(factAge(2022));

// const arr = [2, 4, 6, 8];
// const allStudents = [1, 2, 3, 4, 6, 7, 10];
// console.log(allStudents.length);
// console.log(arr);

// const factData = [
//   "React is being developed by Meta (formerly facebook)",
//   "https://opensource.fb.com/",
//   "TECHNOLOGY",
//   24,
//   9,
//   4,
// ];

// const factObj = {
//   text: "React is being developed by Meta (formerly facebook)",
//   category: "technology",
//   createIn: 2015,
//   inCorrect: true,
//   summary: function () {
//     return `This is Testing Function in Object.`;
//   },
// };
// // console.log(factObj.text);
// // console.log(factObj["text"]); // when it is needed to comput
// const { text, inCorrect } = factObj;
// console.log(text);
// console.log(inCorrect);
// console.log(factObj.summary());

// const [text, source, category] = factData;
// console.log(text);
// console.log(source);
// console.log(category);
// // const allArr = arr + allStudents; // simple addition like string => string
// const allArr = [...arr, ...allStudents]; // spread operator => array
// console.log(allArr);

// const factText = factData[1];
// console.log(factText);

// forEach / map
// [4, 6, 7, 9, 0].forEach((val) => console.log(val));
// const arrX = [4, 6, 7, 9, 0].map((val) => {
//   return val * 2;
// });
// console.log(arrX);

const object = CATEGORIES.find((cat) => cat.name === "society").color;
console.log(object);

// // map
// const colorValues = CATEGORIES.map((obj) => obj.color);
// console.log(colorValues);

// const factAge = initialFacts.map((el) => 2023 - el.createdIn);
// console.log(factAge);
// filter
// const newArr = [7, 64, 3.2, -23, 12].filter((el) => el > 10);
const value = [7, 64, 3.2, -23, 12].find((el) => el > 10);
console.log(value);
// console.log(newArr);
