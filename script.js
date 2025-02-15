const quotes = [
  { text: "Учиться, учиться и учиться", author: "Ленин" },
  { text: "Честному человеку жить везде безопасно", author: "Эпиктет" },
  {
    text: "Умен тот, кто не печалится о том, чего нет, а доволен настоящим",
    author: "Эпиктет",
  },
  {
    text: "В горе нужно призывать на помощь рассудок, как хорошего врача",
    author: "Эпиктет",
  },
  { text: "Зависть — враг счастливых", author: "Эпиктет" },
  {
    text: "Помни, что такое человек, и будешь равнодушен ко всему происходящему",
    author: "Эпиктет",
  },
  { text: "Без музыки жизнь была бы заблуждением", author: "Ницше" },
  {
    text: "Великое светило! К чему свелось бы твое счастье, если б не было у тебя тех, кому ты светишь!",
    author: "Ницше",
  },
  {
    text: "Человек – это канат, натянутый между животным и сверхчеловеком, – канат над пропастью",
    author: "Ницше",
  },
  {
    text: "Надо быть морем, чтобы принять в себя грязный поток и не сделаться нечистым",
    author: "Ницше",
  },
  {
    text: "Для одного одиночество есть бегство больного; для другого одиночество есть бегство от больных",
    author: "Ницше",
  },
  {
    text: "Я бы поверил только в такого Бога, который умел бы танцевать",
    author: "Ницше",
  },
  {
    text: "Кто поднимается на высочайшие горы, тот смеется над всякой трагедией сцены и жизни",
    author: "Ницше",
  },
  {
    text: "Не раб ли ты? Тогда ты не можешь быть другом. Не тиран ли ты? Тогда ты не можешь иметь друзей",
    author: "Ницше",
  },
  {
    text: "Богатство подобно соленой воде, чем больше ее пьешь, тем сильнее жажда. Это относится и к славе",
    author: "Шопенгауэр",
  },
  {
    text: "Каждый человек может вполне быть самим собою только пока он одинок",
    author: "Шопенгауэр",
  },
  {
    text: "Счастье – вещь нелегкая: его очень трудно найти внутри себя и невозможно найти где-либо в ином месте.",
    author: "Шопенгауэр",
  },
  {
    text: "Умные люди учатся на всем и у всех, средние люди на своем опыте, глупые люди уже знают ответы на все вопросы",
    author: "Сократ",
  },
  {
    text: "Секрет счастья, как видите, не в поиске большего, а в развитии способности наслаждаться меньшим",
    author: "Сократ",
  },
  {
    text: "В любом случае, женись. Если у тебя будет хорошая жена, ты станешь счастливым; если у тебя будет плохая жена, ты станешь философом",
    author: "Сократ",
  },
  {
    text: "Одно знаю только я, а именно то, что я ничего не знаю",
    author: "Сократ",
  },
  {
    text: "Предпочитайте знание богатству, ибо одно преходяще, а другое вечно",
    author: "Сократ",
  },
  { text: "Высшая мудрость — различать добро и зло.", author: "Сократ" },
  { text: "Заговори, чтобы я тебя увидел.", author: "Сократ" },
  { text: "Кто мудр, тот и добр.", author: "Сократ" },
  { text: "Нельзя врачевать тело, не врачуя души.", author: "Сократ" },
  {
    text: "Мудрые люди говорят, потому что им есть что сказать, дураки, потому что должны сказать что-то.",
    author: "Платон",
  },
  {
    text: "Бедность заключается не в уменьшении имущества, а в увеличении ненасытности.",
    author: "Платон",
  },
  { text: "Никто не становится хорошим человеком случайно", author: "Платон" },
  {
    text: "Человек - игрушка бога. Этому - то и надо следовать. Надо жить играя",
    author: "Платон",
  },
  { text: "Почести меняют нравы, но редко в лучшую сторону", author: "Платон" },
  {
    text: "Хороший план сегодня лучше очень хорошего плана завтра",
    author: "Платон",
  },
  {
    text: "Сила речи состоит в умении выразить многое в немногих словах",
    author: "Платон",
  },
  { text: "Счастливая жизнь начинается со спокойствия ума", author: "Цицерон" },
  {
    text: "Человек должен научиться подчиняться самому себе и повиноваться своим решениям",
    author: "Цицерон",
  },
  {
    text: "Хвастливые речи — первый признак слабости, а те, кто способен на большие дела, держат язык за зубами",
    author: "Цицерон",
  },
  {
    text: "Если стремиться стать первым, то не позорно быть и вторым и третьим",
    author: "Цицерон",
  },
  {
    text: "Благодеяния, оказанные недостойному, я считаю злодеяниями",
    author: "Цицерон",
  },
  {
    text: "Глупости свойственно видеть чужие пороки, а о своих забывать",
    author: "Цицерон",
  },
  { text: "Величайшая победа – победа над самим собой", author: "Цицерон" },
];

function getRandomDarkColor() {
  let color = "#";
  for (let i = 0; i < 3; i++) {
    const component = Math.floor(Math.random() * 51);
    color += component.toString(16).padStart(2, "0");
  }
  return color;
}

const loadQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  const quoteElement = document.getElementById("quote");
  quoteElement.innerHTML = `<p>${quote.text}</p> <cite>${quote.author}</cite>`;

  const randomDarkColor = getRandomDarkColor();
  document.querySelector("body").style.backgroundColor = randomDarkColor;
  quoteElement.style.color = randomDarkColor;

  quoteElement.classList.remove("visible");
  setTimeout(() => {
    quoteElement.classList.add("visible");
  });
};

document.addEventListener("DOMContentLoaded", loadQuote);

document.getElementById("generate-btn").addEventListener("click", loadQuote);
