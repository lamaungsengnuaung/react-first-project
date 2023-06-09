import { Fragment, useState } from "react";
import "./style.css";

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

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? <NewFactForm /> : null}
      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

function Header({ showForm, setShowForm }) {
  const appTitle = "React Project"; // Vanilla Javascript
  return (
    <header className="header">
      <div className="logo">
        <img src="./logo.png" alt="My Website Logo" />
        <h1>{appTitle}</h1>
      </div>
      <button
        className="btn btn-large btn-open"
        onClick={() => setShowForm((show) => !show)}
      >
        {showForm ? "Close" : "Share a Face"}
      </button>
    </header>
  );
}
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
function NewFactForm() {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");

  const textLength = text.length;

  function handleSubmit(e) {
    e.preventDefault();
    if (text && source && category && textLength)
      console.log(text, source, category);
  }

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Share A Fact with The Words ..."
        value={text}
        onChange={(eve) => setText(eve.target.value)}
      />
      <span className="counting-words">{200 - textLength} </span>
      <input
        type="text"
        placeholder="Trustworthy Source ..."
        value={source}
        onChange={(eve) => setSource(eve.target.value)}
      />
      <select
        name=""
        id=""
        value={category}
        onChange={(eve) => setCategory(eve.target.value)}
      >
        <option value="">Choose Category:</option>
        {CATEGORIES.map((cat) => (
          <option value={cat.name}>{cat.name.toUpperCase()}</option>
        ))}
      </select>
      <button className="btn btn-large">Post</button>
    </form>
  );
}

function CategoryFilter() {
  return (
    <aside>
      <ul>
        <li class="category">
          <button class="btn btn-all-category btn-large">All</button>
        </li>
        {CATEGORIES.map((cat) => (
          <li key={cat.name} className="category">
            <button
              class="btn btn-category"
              style={{ backgroundColor: cat.color }}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function FactList() {
  const facts = initialFacts;
  return (
    <section>
      <ul class="fact-list">
        <section>
          <ul className="fact-list">
            {facts.map((fact) => (
              <Fact key={fact.id} fact={fact} />
            ))}
          </ul>
        </section>
      </ul>
      <p>There are {facts.length} posts</p>
    </section>
  );
}
function Fact({ fact }) {
  console.log(fact);
  return (
    <li className="fact">
      <p>
        {fact.text}
        <a className="source" href={fact.source} target="_blank">
          {fact.source}
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category)
            .color,
        }}
      >
        {fact.category}
      </span>
      <div className="vote-buttons">
        <button>
          👍<strong>{fact.votesInteresting}</strong>
        </button>
        <button>
          🤯<strong>{fact.votesMindblowing} </strong>
        </button>
        <button>
          ⛔️<strong>{fact.votesFalse}</strong>
        </button>
      </div>
    </li>
  );
}
export default App;

// function Counter() {
//   const [count, setCount] = useState(10);
//   // console.log(x);
//   return (
//     <div>
//       <span style={{ fontSize: "40px" }}>{count}</span>
//       <button className="btn btn-large" onClick={() => setCount((c)=>c+1)}>
//         +
//       </button>
//     </div>
//   );
// }
