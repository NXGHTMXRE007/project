let words = [
 { eng: "cat", ru: "кот", category: "animals" },
  { eng: "dog", ru: "собака", category: "animals" },
  { eng: "mouse", ru: "мышь", category: "animals" },
  { eng: "bird", ru: "птица", category: "animals" },
  { eng: "fish", ru: "рыба", category: "animals" },
  { eng: "horse", ru: "лошадь", category: "animals" },
  { eng: "cow", ru: "корова", category: "animals" },
  { eng: "pig", ru: "свинья", category: "animals" },
  { eng: "rabbit", ru: "кролик", category: "animals" },
  { eng: "fox", ru: "лиса", category: "animals" },

  { eng: "apple", ru: "яблоко", category: "food" },
  { eng: "bread", ru: "хлеб", category: "food" },
  { eng: "meat", ru: "мясо", category: "food" },
  { eng: "milk", ru: "молоко", category: "food" },
  { eng: "cheese", ru: "сыр", category: "food" },
  { eng: "egg", ru: "яйцо", category: "food" },
  { eng: "sugar", ru: "сахар", category: "food" },
  { eng: "salt", ru: "соль", category: "food" },
  { eng: "butter", ru: "масло", category: "food" },
  { eng: "juice", ru: "сок", category: "food" },

  { eng: "mother", ru: "мама", category: "people" },
  { eng: "teacher", ru: "учитель", category: "people" },
  { eng: "father", ru: "папа", category: "people" },
  { eng: "brother", ru: "брат", category: "people" },
  { eng: "sister", ru: "сестра", category: "people" },
  { eng: "doctor", ru: "врач", category: "people" },
  { eng: "student", ru: "студент", category: "people" },
  { eng: "friend", ru: "друг", category: "people" },
  { eng: "child", ru: "ребёнок", category: "people" },
  { eng: "woman", ru: "женщина", category: "people" },

  { eng: "table", ru: "стол", category: "objects" },
  { eng: "phone", ru: "телефон", category: "objects" },
  { eng: "chair", ru: "стул", category: "objects" },
  { eng: "door", ru: "дверь", category: "objects" },
  { eng: "window", ru: "окно", category: "objects" },
  { eng: "book", ru: "книга", category: "objects" },
  { eng: "pen", ru: "ручка", category: "objects" },
  { eng: "cup", ru: "чашка", category: "objects" },
  { eng: "computer", ru: "компьютер", category: "objects" },
  { eng: "key", ru: "ключ", category: "objects" },

  { eng: "red", ru: "красный", category: "colors" },
  { eng: "blue", ru: "синий", category: "colors" },
  { eng: "green", ru: "зелёный", category: "colors" },
  { eng: "yellow", ru: "жёлтый", category: "colors" },
  { eng: "black", ru: "чёрный", category: "colors" },
  { eng: "white", ru: "белый", category: "colors" },
  { eng: "gray", ru: "серый", category: "colors" },
  { eng: "brown", ru: "коричневый",category: "colors" },
  { eng: "pink", ru: "розовый", category: "colors" },
  { eng: "orange", ru: "оранжевый", category: "colors" }
];

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("themeToggle");

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggle.checked = true;
  }

  toggle.addEventListener("change", function () {
    document.body.classList.toggle("dark");

    if (toggle.checked) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});

let currentLearnWord = null;

function nextLearnWord() {
  const category = document.getElementById("learnCategory").value;

  let filteredWords = words;

  if (category !== "all") {
    filteredWords = words.filter(word => word.category === category);
  }

  if (filteredWords.length === 0) return;

  const randomIndex = Math.floor(Math.random() * filteredWords.length);
  currentLearnWord = filteredWords[randomIndex];

  document.getElementById("learnWord").textContent = currentLearnWord.eng;

 
  document.getElementById("learnTranslation").textContent = "";
}

function showTranslation() {
  if (!currentLearnWord) return;

  document.getElementById("learnTranslation").textContent =
    currentLearnWord.ru;
}

document.addEventListener("DOMContentLoaded", function () {
  nextLearnWord();

  document.getElementById("learnCategory").onchange = nextLearnWord;
});

