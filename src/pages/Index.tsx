import { useState } from "react";
import Icon from "@/components/ui/icon";

const IMAGES = {
  hero: "https://cdn.poehali.dev/projects/d10351c8-7d02-4640-88a6-6eb0167bcf8d/files/08b59ac0-a7f6-4cdf-83e5-9203baa008ae.jpg",
  film1: "https://cdn.poehali.dev/projects/d10351c8-7d02-4640-88a6-6eb0167bcf8d/files/b22e3b1f-0bd0-485b-ab5c-d194542a7b02.jpg",
  film2: "https://cdn.poehali.dev/projects/d10351c8-7d02-4640-88a6-6eb0167bcf8d/files/d53a8976-de31-4b80-bf71-5a60f95addaf.jpg",
  film3: "https://cdn.poehali.dev/projects/d10351c8-7d02-4640-88a6-6eb0167bcf8d/files/256d888e-44bb-4a23-9351-ad478b192b67.jpg",
  film4: "https://cdn.poehali.dev/projects/d10351c8-7d02-4640-88a6-6eb0167bcf8d/files/24aab8d0-7f06-4ca0-ae83-acf82a0d9e1e.jpg",
  film5: "https://cdn.poehali.dev/projects/d10351c8-7d02-4640-88a6-6eb0167bcf8d/files/08b59ac0-a7f6-4cdf-83e5-9203baa008ae.jpg",
};

const REVIEWS = [
  {
    id: 1,
    title: "Опасный метод",
    director: "Дэвид Кроненберг",
    year: 2011,
    genre: "Драма",
    rating: 8.2,
    image: IMAGES.film1,
    excerpt: "Психоанализ как поле боя. Кроненберг препарирует отношения Юнга и Фрейда с хирургической точностью, обнажая за теориями живую плоть страстей.",
    tag: "Классика",
    author: "Анна Соколова",
    date: "18 мая 2026",
    readTime: "9 мин",
    country: "Великобритания / Германия / Канада",
    duration: "99 мин",
    scores: { сценарий: 8, режиссура: 9, актёрская_игра: 9, визуальный_ряд: 8, музыка: 7 },
    fullText: [
      { type: "lead", text: "Дэвид Кроненберг давно известен своим интересом к телу как к полю сражения — но в «Опасном методе» телесность уступает место психическому. Режиссёр берётся за историю треугольника Юнг–Фрейд–Шпильрейн и создаёт из неё интеллектуальную камерную драму, в которой каждый диалог — это поединок идей." },
      { type: "h2", text: "Идеи в плоти" },
      { type: "p", text: "Кроненберг снимает кино о теориях, но никогда не позволяет ему стать лекционным. Напряжение между Юнгом (Фассбендер) и Фрейдом (Мортенсен) существует не в абстракции — оно разворачивается в паузах, взглядах, тщательно выверенных репликах. Оба актёра демонстрируют высший класс: Мортенсен — монументальный, самоуверенный Фрейд, Фассбендер — Юнг, которому тесно в рамках учителя." },
      { type: "p", text: "Кира Найтли в роли Сабины Шпильрейн поначалу кажется избыточной — её физическая игра в сценах психоза на грани карикатуры. Но постепенно понимаешь: это намеренно. Шпильрейн — единственный персонаж, который позволяет себе не контролировать тело. На фоне двух мужчин, одержимых теориями самообладания, она живёт." },
      { type: "h2", text: "Метод как клетка" },
      { type: "p", text: "Центральный парадокс фильма: люди, создавшие инструменты для понимания бессознательного, оказываются в плену собственных теорий. Фрейд не может признать ограниченность своей системы. Юнг не может признать, что влюблён. Психоанализ здесь — не освобождение, а изощрённая форма самообмана." },
      { type: "quote", text: "Самое страшное — не то, что мы не понимаем других. Самое страшное — что мы не понимаем себя, даже имея для этого все инструменты." },
      { type: "p", text: "Говард Шор пишет намеренно сдержанную музыку — она никогда не подсказывает зрителю, что чувствовать. Операторская работа Питера Сушицки столь же аскетична: светлые, почти выбеленные интерьеры начала XX века создают ощущение лабораторной стерильности. Тело и страсть в этом мире — нечто, что нужно классифицировать, а не переживать." },
      { type: "h2", text: "Итог" },
      { type: "p", text: "«Опасный метод» — не самый зрелищный Кроненберг, но один из самых точных. Он берёт исторический материал и делает из него универсальную историю о том, как интеллект используется для уклонения от честности. Фильм, который становится интереснее с каждым просмотром." },
    ],
    verdict: "Интеллектуальная камерная драма о цене самопознания. Обязательна для всех, кто интересуется историей психологии и умным кино.",
  },
  {
    id: 2,
    title: "Прошлые жизни",
    director: "Селин Сон",
    year: 2023,
    genre: "Мелодрама",
    rating: 9.0,
    image: IMAGES.film2,
    excerpt: "Дебют Селин Сон — редкое кино о несостоявшемся. О том, как прошлое не исчезает, а живёт рядом, дышит в трубку и смотрит через двадцать лет.",
    tag: "Новинка",
    author: "Мария Ли",
    date: "25 мая 2026",
    readTime: "7 мин",
    country: "США / Южная Корея",
    duration: "106 мин",
    scores: { сценарий: 10, режиссура: 9, актёрская_игра: 9, визуальный_ряд: 9, музыка: 8 },
    fullText: [
      { type: "lead", text: "Бывает кино, которое не рассказывает историю — оно создаёт ощущение. «Прошлые жизни» Селин Сон именно такое: после просмотра остаётся не сюжет, а тихая, необъяснимая грусть о чём-то, чего никогда не было." },
      { type: "h2", text: "Любовь как параллельная вселенная" },
      { type: "p", text: "Два корейских ребёнка, Нора и Хэ Сон, дружат в детстве — и разлучаются, когда её семья эмигрирует в Канаду. Двадцать четыре года спустя они встречаются снова — через экраны, а потом в Нью-Йорке, где Нора теперь живёт с американским мужем. Звучит как мелодрама. Но Сон снимает нечто принципиально иное." },
      { type: "p", text: "Фильм не о любви, которая могла быть. Он о концепции ин-ён — корейском слове для обозначения связи между людьми через прошлые жизни. Каждая встреча — это нить из другого существования. Нора и Хэ Сон не упустили шанс: они просто живут в разных версиях реальности, и иногда эти версии пересекаются." },
      { type: "quote", text: "Ты уезжаешь. Значит, в этой жизни я буду тем, кто остался." },
      { type: "h2", text: "Режиссура тишины" },
      { type: "p", text: "Сон доверяет зрителю. Она не объясняет эмоции — она показывает, как люди не показывают эмоции. Долгие планы молчаливых лиц. Разговоры о том, о чём не говорят. Муж Норы, наблюдающий за ней и Хэ Соном из бара — и понимающий то, что не может назвать словами." },
      { type: "p", text: "Грета Ли играет так, словно весь фильм держит что-то в руках и боится сжать — а потом всё равно сжимает. Финальная сцена — одна из лучших в кино последних лет: ничего не происходит, и это разрывает." },
      { type: "h2", text: "Итог" },
      { type: "p", text: "«Прошлые жизни» — редкий дебют, который не пытается никому ничего доказать. Это кино о том, что некоторые истории не имеют конца — они просто продолжаются в следующей жизни." },
    ],
    verdict: "Один из лучших дебютов десятилетия. Тихое, точное кино о несостоявшемся — и о том, почему это не трагедия.",
  },
  {
    id: 3,
    title: "Зона интересов",
    director: "Джонатан Глейзер",
    year: 2023,
    genre: "Драма",
    rating: 8.7,
    image: IMAGES.film3,
    excerpt: "Глейзер не показывает ужас — он строит звуковой пейзаж нормальности на фоне уничтожения. Страшнее любого изображения.",
    tag: "Рекомендуем",
    author: "Игорь Павлов",
    date: "10 мая 2026",
    readTime: "11 мин",
    country: "Великобритания / Польша / США",
    duration: "105 мин",
    scores: { сценарий: 9, режиссура: 10, актёрская_игра: 9, визуальный_ряд: 10, музыка: 10 },
    fullText: [
      { type: "lead", text: "Джонатан Глейзер снял самый важный фильм об Холокосте за последние двадцать лет — и ни разу не показал то, о чём снимает. «Зона интересов» — это эксперимент с природой киноужаса, и он удаётся полностью." },
      { type: "h2", text: "За забором" },
      { type: "p", text: "Семья коменданта Освенцима Рудольфа Хёсса живёт в доме с садом прямо у стен лагеря. Дети купаются в бассейне. Жена выращивает розы. За забором — Освенцим. Глейзер не переходит за этот забор ни разу." },
      { type: "p", text: "Вместо этого он строит звуковой мир: весь фильм за кадром — крики, выстрелы, гудение печей. Звук смешивается с детским смехом и разговорами о садовых цветах так органично, что начинаешь физически чувствовать нормализацию зла. Это и есть тезис фильма: банальность зла — не метафора. Это буквальное устройство жизни." },
      { type: "quote", text: "Я подала заявку на дом с садом. Мне его дали. Это всё, что мне нужно знать." },
      { type: "h2", text: "Провал эмпатии как художественный приём" },
      { type: "p", text: "Глейзер намеренно лишает зрителя привычной точки идентификации. Персонажи не монстры в привычном смысле — они скучные, деловые, озабоченные карьерой и бытом. Это делает фильм гораздо страшнее любого хоррора: мы узнаём в них не злодеев, а людей." },
      { type: "p", text: "Mica Levi написала саундтрек, который существует на границе между музыкой и шумом — иногда сложно понять, где заканчивается звуковой дизайн и начинается партитура. Это идеальное решение для фильма, в котором сама эстетика становится этической проблемой." },
      { type: "h2", text: "Итог" },
      { type: "p", text: "«Зона интересов» — не лёгкое кино. Но это важное кино. Глейзер создал радикально честный разговор о том, как люди умеют не видеть. И о том, что это умение не исчезло." },
    ],
    verdict: "Радикальный и необходимый фильм. Смотреть сложно — но именно поэтому обязательно.",
  },
  {
    id: 4,
    title: "Властелин колец",
    director: "Питер Джексон",
    year: 2001,
    genre: "Фэнтези",
    rating: 9.5,
    image: IMAGES.film3,
    excerpt: "Двадцать с лишним лет спустя — всё ещё эталон киноэпоса. Джексон создал не просто фильм, а целый мир, в который хочется возвращаться.",
    tag: "Золотая коллекция",
    author: "Дмитрий Орлов",
    date: "1 мая 2026",
    readTime: "10 мин",
    country: "Новая Зеландия / США",
    duration: "228 мин (режиссёрская версия)",
    scores: { сценарий: 9, режиссура: 10, актёрская_игра: 9, визуальный_ряд: 10, музыка: 10 },
    fullText: [
      { type: "lead", text: "Есть фильмы, которые меняют кино. «Властелин колец: Братство кольца» — один из них. Двадцать пять лет спустя он не просто не устарел — он остаётся эталоном того, каким может быть жанровый блокбастер, когда им занимается художник." },
      { type: "h2", text: "Мир как персонаж" },
      { type: "p", text: "Главное достижение Джексона — не спецэффекты и не батальные сцены (хотя и они безупречны). Главное — ощущение мира. Средиземье в его версии не декорация и не CGI-пейзаж: это место, в котором чувствуется история, запах и время. Новая Зеландия стала не натурой, а самим Средиземьем." },
      { type: "p", text: "Говард Шор написал для трилогии музыку, которую невозможно отделить от образов. Каждый народ, каждая земля имеет свою тему — и все они сплетаются в единую симфонию, которая работает и в кино, и отдельно как произведение." },
      { type: "quote", text: "Даже самый маленький человек может изменить ход будущего." },
      { type: "h2", text: "О чём это на самом деле" },
      { type: "p", text: "Толкин писал о потере — о том, что прекрасное уходит и его не вернуть. Джексон это понял. «Братство» — элегия: по ходу фильма мы видим мир на закате, полный величия, которое обречено исчезнуть. Именно эта меланхолия делает его не просто приключенческим фильмом, а чем-то большим." },
      { type: "h2", text: "Итог" },
      { type: "p", text: "Пересматривать «Братство» — значит каждый раз находить что-то новое: деталь в декорации, интонацию актёра, отсвет в операторском кадре. Это кино, сделанное с любовью к каждому пикселю — и зритель это чувствует." },
    ],
    verdict: "Непревзойдённый кинематографический эпос. Обязательно в режиссёрской версии.",
  },
  {
    id: 5,
    title: "Тар",
    director: "Тодд Филд",
    year: 2022,
    genre: "Драма",
    rating: 8.1,
    image: IMAGES.film4,
    excerpt: "Портрет власти и падения. Кейт Бланшетт создаёт персонажа, которого невозможно ни оправдать, ни забыть.",
    tag: "Рецензия",
    author: "Анна Соколова",
    date: "5 апреля 2026",
    readTime: "8 мин",
    country: "США / Германия",
    duration: "158 мин",
    scores: { сценарий: 8, режиссура: 9, актёрская_игра: 10, визуальный_ряд: 8, музыка: 9 },
    fullText: [
      { type: "lead", text: "«Тар» — это фильм про власть. Не про то, как её завоёвывают, а про то, что она делает с человеком — и что человек готов сделать ради её сохранения. Кейт Бланшетт играет так, что хочется зажмуриться." },
      { type: "h2", text: "Антигерой нашего времени" },
      { type: "p", text: "Лидия Тар — дирижёр, гений, хищник. Тодд Филд намеренно не делает её однозначной: мы видим её таланты раньше, чем видим преступления. К моменту, когда картина её падения становится очевидной, мы уже успели ею восхититься. Это очень неудобное чувство — и это именно то, что нужно фильму." },
      { type: "quote", text: "Если вы позволяете личным чувствам влиять на интерпретацию партитуры — вы уже не музыкант. Вы просто человек с инструментом." },
      { type: "p", text: "Бланшетт выучила немецкий, освоила дирижирование и создала персонажа, существующего в каждой сцене с такой плотностью присутствия, что остальные актёры вынуждены реагировать на неё, а не действовать сами. Это диктатура в кадре — в точности то, о чём фильм." },
      { type: "h2", text: "Формальное совершенство" },
      { type: "p", text: "Тодд Филд снимал 16 лет между фильмами — и это чувствуется. «Тар» сделан без единой лишней сцены. Каждый план работает на двух-трёх уровнях одновременно. Темп намеренно медленный: зритель должен почувствовать себя в той же клетке, что и персонажи Тар." },
      { type: "h2", text: "Итог" },
      { type: "p", text: "Сложный, требовательный фильм, который не даёт лёгких ответов. Смотреть обязательно — но будьте готовы к дискомфорту." },
    ],
    verdict: "Бланшетт на пике карьеры в истории о цене гениальности и цене власти. Один из лучших фильмов 2022 года.",
  },
  {
    id: 6,
    title: "Джокер",
    director: "Тодд Филлипс",
    year: 2019,
    genre: "Триллер",
    rating: 8.4,
    image: IMAGES.film5,
    excerpt: "Не супергеройское кино — это траектория распада. Хоакин Феникс растворяется в роли настолько, что граница между актёром и персонажем исчезает.",
    tag: "Разбор",
    author: "Игорь Павлов",
    date: "20 марта 2026",
    readTime: "9 мин",
    country: "США",
    duration: "122 мин",
    scores: { сценарий: 8, режиссура: 8, актёрская_игра: 10, визуальный_ряд: 9, музыка: 9 },
    fullText: [
      { type: "lead", text: "Называть «Джокера» супергеройским фильмом — значит не понять ни фильм, ни жанр. Это траектория распада человека в системе, которая его сломала. Хоакин Феникс делает это зрелище невыносимо реальным." },
      { type: "h2", text: "Тело как документ" },
      { type: "p", text: "Феникс похудел на двадцать килограммов для роли — и это не трюк. Его тело в кадре несёт информацию: каждое движение Артура Флека говорит о человеке, которого жизнь скрутила в вопросительный знак. Смех-плач, которым Феникс наделил персонажа — не актёрский приём, а медицинский симптом, и это разница." },
      { type: "quote", text: "Я думал, моя жизнь — трагедия. Но теперь понимаю: это комедия." },
      { type: "h2", text: "Город как соучастник" },
      { type: "p", text: "Готэм-Сити в версии Филлипса — это Нью-Йорк начала 80-х, времён до Джулиани: мусор, забастовки, классовая ненависть. Город не фон — он персонаж, который активно производит Джокеров. Это политическое прочтение многие сочли опасным. Но фильм не оправдывает Артура — он объясняет механизм. Это разные вещи." },
      { type: "p", text: "Хильдур Гудна́доттир написала один из лучших саундтреков десятилетия: виолончель как нерв, как боль, как нечто живое под кожей кадра. Музыка не иллюстрирует — она существует параллельно с изображением, создавая двойное дно." },
      { type: "h2", text: "Итог" },
      { type: "p", text: "«Джокер» — неудобный фильм. Он заставляет смотреть на человека, которого проще назвать монстром, чем понять. В этом его ценность — и его провокация." },
    ],
    verdict: "Психологический портрет на грани выносимого. Феникс в лучшей роли своей карьеры.",
  },
];

const AFISHA = [
  { title: "Дюна: Часть вторая", genre: "Фантастика", date: "В прокате", rating: 8.8, image: IMAGES.film2 },
  { title: "Конклав", genre: "Триллер", date: "В прокате", rating: 8.3, image: IMAGES.film4 },
  { title: "Анора", genre: "Драма", date: "7 июня", rating: 9.1, image: IMAGES.film1 },
  { title: "Лимонов: Баллада", genre: "Биография", date: "14 июня", rating: 7.9, image: IMAGES.film3 },
];

const GENRES = ["Все", "Драма", "Триллер", "Мелодрама", "Фэнтези", "Фантастика", "Комедия"];
const YEARS = ["Все годы", "2024", "2023", "2022", "2021", "2020", "2010-е", "2000-е", "До 2000"];
const RATINGS = ["Любая", "9+", "8+", "7+", "6+"];

type Section = "home" | "reviews" | "afisha" | "archive" | "gold" | "opinion" | "review-detail";

function StarRating({ rating }: { rating: number }) {
  const filled = Math.round(rating / 2);
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Icon
          key={i}
          name="Star"
          size={12}
          className={i <= filled ? "text-gold fill-current" : "text-white/20"}
        />
      ))}
      <span className="ml-1 text-gold text-sm font-body font-semibold">{rating.toFixed(1)}</span>
    </div>
  );
}

function ReviewCard({ review, index, onClick }: { review: typeof REVIEWS[0]; index: number; onClick?: () => void }) {
  return (
    <article
      className="card-hover opacity-0 animate-fade-in-up group cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "2/3" }}>
        <img
          src={review.image}
          alt={review.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="poster-overlay absolute inset-0" />
        <div className="absolute top-3 left-3">
          <span className="text-xs font-body font-medium px-2 py-1 bg-gold text-black">
            {review.tag}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <StarRating rating={review.rating} />
          <h3 className="font-display text-xl font-semibold text-white mt-1 leading-tight">
            {review.title}
          </h3>
          <p className="font-body text-xs text-white/60 mt-1">
            {review.director}, {review.year} · {review.genre}
          </p>
        </div>
      </div>
      <div className="mt-3 px-1">
        <p className="font-body text-sm text-white/70 leading-relaxed line-clamp-3">
          {review.excerpt}
        </p>
        <span className="mt-2 inline-flex items-center gap-1 text-gold text-xs font-body font-medium group-hover:gap-2 transition-all">
          Читать рецензию <Icon name="ArrowRight" size={12} />
        </span>
      </div>
    </article>
  );
}

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [selectedReview, setSelectedReview] = useState<typeof REVIEWS[0] | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [genreFilter, setGenreFilter] = useState("Все");
  const [yearFilter, setYearFilter] = useState("Все годы");
  const [ratingFilter, setRatingFilter] = useState("Любая");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");

  const openReview = (review: typeof REVIEWS[0]) => {
    setSelectedReview(review);
    setActiveSection("review-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems: { id: Section; label: string }[] = [
    { id: "home", label: "Главная" },
    { id: "reviews", label: "Рецензии" },
    { id: "afisha", label: "Афиша" },
    { id: "archive", label: "Киноархив" },
    { id: "gold", label: "Золотая коллекция" },
    { id: "opinion", label: "Мнение" },
  ];

  const filteredReviews = REVIEWS.filter((r) => {
    const matchGenre = genreFilter === "Все" || r.genre === genreFilter;
    const matchSearch =
      searchQuery === "" ||
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.director.toLowerCase().includes(searchQuery.toLowerCase());
    const matchRating =
      ratingFilter === "Любая" ||
      (ratingFilter === "9+" && r.rating >= 9) ||
      (ratingFilter === "8+" && r.rating >= 8) ||
      (ratingFilter === "7+" && r.rating >= 7) ||
      (ratingFilter === "6+" && r.rating >= 6);
    return matchGenre && matchSearch && matchRating;
  });

  return (
    <div className="min-h-screen bg-[hsl(0,0%,4%)] cinema-grain">
      {/* NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-md bg-[hsl(0,0%,4%)]/80">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => setActiveSection("home")}
              className="font-display text-2xl font-light tracking-widest text-gold"
            >
              КИН<span className="text-white">О</span>ВЗГЛЯД
            </button>

            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`nav-link font-body text-sm tracking-wide ${
                    activeSection === item.id ? "active text-gold" : "text-white/70"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="https://vk.com"
                target="_blank"
                rel="noreferrer"
                className="hidden md:flex items-center gap-2 text-xs font-body text-white/50 hover:text-gold transition-colors tracking-wide"
              >
                ВКонтакте
              </a>
              <button
                className="lg:hidden text-white/70 hover:text-gold transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={20} />
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/5 bg-[hsl(0,0%,4%)]/95 backdrop-blur-md">
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setActiveSection(item.id); setMobileMenuOpen(false); }}
                  className={`text-left py-3 font-body text-sm tracking-wide border-b border-white/5 ${
                    activeSection === item.id ? "text-gold" : "text-white/70"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="pt-16">

        {/* ====== HOME ====== */}
        {activeSection === "home" && (
          <>
            {/* Hero */}
            <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
              <img
                src={IMAGES.hero}
                alt="hero"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="hero-gradient absolute inset-0" />
              <div className="absolute inset-0 flex flex-col justify-end pb-20 px-8 md:px-16 max-w-7xl mx-auto left-0 right-0">
                <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                  <span className="font-body text-xs tracking-[0.3em] text-gold/80 uppercase">Авторское кино-СМИ</span>
                </div>
                <h1
                  className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white mt-4 leading-none opacity-0 animate-fade-in-up"
                  style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
                >
                  Смотреть<br />
                  <span className="text-gold italic">осмысленно</span>
                </h1>
                <p
                  className="font-body text-base md:text-lg text-white/60 mt-6 max-w-xl leading-relaxed opacity-0 animate-fade-in-up"
                  style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
                >
                  Авторские рецензии, аналитика и рекомендации для тех, кто ищет в кино больше, чем развлечение
                </p>
                <div
                  className="flex gap-4 mt-8 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}
                >
                  <button
                    onClick={() => setActiveSection("reviews")}
                    className="px-6 py-3 bg-gold text-black font-body text-sm font-semibold tracking-wide hover:bg-yellow-400 transition-colors"
                  >
                    Читать рецензии
                  </button>
                  <button
                    onClick={() => setActiveSection("afisha")}
                    className="px-6 py-3 border border-white/30 text-white font-body text-sm tracking-wide hover:border-gold hover:text-gold transition-colors"
                  >
                    Афиша недели
                  </button>
                </div>
              </div>
            </section>

            {/* Latest reviews */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
              <div className="flex items-end justify-between mb-10">
                <div>
                  <span className="font-body text-xs tracking-[0.25em] text-gold/70 uppercase">Последние публикации</span>
                  <h2 className="font-display text-4xl md:text-5xl font-light text-white mt-2">Рецензии</h2>
                </div>
                <button
                  onClick={() => setActiveSection("reviews")}
                  className="hidden md:flex items-center gap-2 font-body text-sm text-white/50 hover:text-gold transition-colors"
                >
                  Все рецензии <Icon name="ArrowRight" size={14} />
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
                {REVIEWS.slice(0, 4).map((r, i) => (
                  <ReviewCard key={r.id} review={r} index={i} onClick={() => openReview(r)} />
                ))}
              </div>
            </section>

            <div className="section-divider mx-8 md:mx-16" />

            {/* Afisha preview */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
              <div className="flex items-end justify-between mb-10">
                <div>
                  <span className="font-body text-xs tracking-[0.25em] text-gold/70 uppercase">Кинопремьеры</span>
                  <h2 className="font-display text-4xl md:text-5xl font-light text-white mt-2">Афиша</h2>
                </div>
                <button
                  onClick={() => setActiveSection("afisha")}
                  className="hidden md:flex items-center gap-2 font-body text-sm text-white/50 hover:text-gold transition-colors"
                >
                  Вся афиша <Icon name="ArrowRight" size={14} />
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {AFISHA.map((film, i) => (
                  <div key={i} className="card-hover group cursor-pointer">
                    <div className="relative overflow-hidden" style={{ aspectRatio: "2/3" }}>
                      <img src={film.image} alt={film.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="poster-overlay absolute inset-0" />
                      <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1">
                        <span className="text-gold text-xs font-semibold font-body">{film.rating}</span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="text-xs font-body text-gold/80">{film.date}</span>
                        <h3 className="font-display text-base font-semibold text-white mt-0.5 leading-tight">{film.title}</h3>
                        <span className="text-xs font-body text-white/50">{film.genre}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="section-divider mx-8 md:mx-16" />

            {/* Subscribe */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
              <div className="border border-white/10 p-8 md:p-16 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
                <div className="relative z-10 max-w-xl">
                  <span className="font-body text-xs tracking-[0.25em] text-gold/70 uppercase">Будьте в курсе</span>
                  <h2 className="font-display text-4xl font-light text-white mt-3">
                    Рассылка<br /><span className="italic text-gold">Киновзгляда</span>
                  </h2>
                  <p className="font-body text-sm text-white/50 mt-4 leading-relaxed">
                    Лучшие рецензии недели, анонсы премьер и авторские материалы — раз в неделю, без спама.
                  </p>
                  <div className="flex gap-3 mt-6">
                    <input
                      type="email"
                      placeholder="ваш@email.ru"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-white/5 border border-white/10 px-4 py-3 font-body text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                    />
                    <button className="px-6 py-3 bg-gold text-black font-body text-sm font-semibold hover:bg-yellow-400 transition-colors whitespace-nowrap">
                      Подписаться
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* ====== REVIEWS ====== */}
        {activeSection === "reviews" && (
          <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
            <div className="mb-10">
              <span className="font-body text-xs tracking-[0.25em] text-gold/70 uppercase">Архив</span>
              <h2 className="font-display text-5xl font-light text-white mt-2">Рецензии</h2>
            </div>

            <div className="bg-[hsl(0,0%,8%)] border border-white/5 p-5 mb-10 space-y-4">
              <div className="relative">
                <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="text"
                  placeholder="Фильм, режиссёр..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 pl-9 pr-4 py-2.5 font-body text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {GENRES.map((g) => (
                  <button
                    key={g}
                    onClick={() => setGenreFilter(g)}
                    className={`px-3 py-1 font-body text-xs tracking-wide border transition-colors ${
                      genreFilter === g
                        ? "bg-gold border-gold text-black"
                        : "border-white/10 text-white/50 hover:border-gold/40 hover:text-white/80"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <span className="font-body text-xs text-white/30">Год:</span>
                  <select
                    value={yearFilter}
                    onChange={(e) => setYearFilter(e.target.value)}
                    className="bg-white/5 border border-white/10 px-3 py-1.5 font-body text-xs text-white/70 focus:outline-none focus:border-gold/40"
                  >
                    {YEARS.map((y) => <option key={y} value={y} className="bg-[#1a1a1a]">{y}</option>)}
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-body text-xs text-white/30">Оценка:</span>
                  <div className="flex gap-1">
                    {RATINGS.map((r) => (
                      <button
                        key={r}
                        onClick={() => setRatingFilter(r)}
                        className={`px-3 py-1 font-body text-xs border transition-colors ${
                          ratingFilter === r
                            ? "bg-gold border-gold text-black"
                            : "border-white/10 text-white/50 hover:border-gold/40"
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {filteredReviews.length === 0 ? (
              <div className="text-center py-20">
                <Icon name="Film" size={40} className="mx-auto text-white/20 mb-4" />
                <p className="font-body text-white/40">Рецензий по вашему запросу не найдено</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
                {filteredReviews.map((r, i) => (
                  <ReviewCard key={r.id} review={r} index={i} onClick={() => openReview(r)} />
                ))}
              </div>
            )}
          </section>
        )}

        {/* ====== AFISHA ====== */}
        {activeSection === "afisha" && (
          <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
            <div className="mb-10">
              <span className="font-body text-xs tracking-[0.25em] text-gold/70 uppercase">Кинопремьеры</span>
              <h2 className="font-display text-5xl font-light text-white mt-2">Афиша</h2>
              <p className="font-body text-sm text-white/50 mt-3">Еженедельный обзор новинок кинопроката и стримингов</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {[...AFISHA, ...AFISHA].map((film, i) => (
                <div key={i} className="card-hover group cursor-pointer opacity-0 animate-fade-in-up" style={{ animationDelay: `${i * 0.08}s`, animationFillMode: "forwards" }}>
                  <div className="relative overflow-hidden" style={{ aspectRatio: "2/3" }}>
                    <img src={film.image} alt={film.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="poster-overlay absolute inset-0" />
                    <div className="absolute top-3 left-3 bg-gold px-2 py-0.5">
                      <span className="text-black text-xs font-body font-semibold">{film.date}</span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="font-display text-lg font-semibold text-white leading-tight">{film.title}</h3>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs font-body text-white/50">{film.genre}</span>
                        <span className="text-gold text-sm font-semibold font-body">{film.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ====== ARCHIVE ====== */}
        {activeSection === "archive" && (
          <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
            <div className="mb-12">
              <span className="font-body text-xs tracking-[0.25em] text-gold/70 uppercase">Тематические подборки</span>
              <h2 className="font-display text-5xl font-light text-white mt-2">Киноархив</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Кино о памяти и времени", count: 12, image: IMAGES.film1, desc: "От Бергмана до Малика — фильмы, в которых время становится главным персонажем" },
                { title: "Европейский арт-хаус 2020-х", count: 8, image: IMAGES.film2, desc: "Новое поколение европейских режиссёров, переосмысляющих язык кино" },
                { title: "Документальное кино года", count: 15, image: IMAGES.film3, desc: "Лучшие документальные картины, которые стоит увидеть каждому" },
                { title: "Режиссёры-дебютанты", count: 10, image: IMAGES.film4, desc: "Первые полнометражные работы, заявившие о новых именах в кино" },
                { title: "Южнокорейское кино", count: 18, image: IMAGES.film5, desc: "Феноменальный расцвет кинематографа Кореи — от Пон Джун-хо до молодых авторов" },
                { title: "Женский взгляд в кино", count: 14, image: IMAGES.film1, desc: "Фильмы, снятые женщинами-режиссёрами — новая волна голосов и историй" },
              ].map((collection, i) => (
                <div key={i} className="card-hover group cursor-pointer border border-white/5 flex overflow-hidden opacity-0 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}>
                  <div className="w-32 h-32 flex-shrink-0 relative overflow-hidden">
                    <img src={collection.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>
                  <div className="p-5 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white group-hover:text-gold transition-colors leading-tight">{collection.title}</h3>
                      <p className="font-body text-xs text-white/50 mt-2 leading-relaxed">{collection.desc}</p>
                    </div>
                    <span className="font-body text-xs text-gold/70">{collection.count} фильмов</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ====== GOLD ====== */}
        {activeSection === "gold" && (
          <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
            <div className="mb-12 text-center">
              <Icon name="Crown" size={32} className="mx-auto text-gold mb-4" />
              <span className="font-body text-xs tracking-[0.25em] text-gold/70 uppercase">Вне времени</span>
              <h2 className="font-display text-5xl font-light text-white mt-2">Золотая коллекция</h2>
              <p className="font-body text-sm text-white/50 mt-3 max-w-md mx-auto">
                Классические фильмы, которые необходимо увидеть — рецензии с детальным разбором
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
              {REVIEWS.slice(0, 4).map((r, i) => (
                <ReviewCard key={r.id} review={{ ...r, tag: "Классика" }} index={i} onClick={() => openReview(r)} />
              ))}
            </div>
          </section>
        )}

        {/* ====== OPINION ====== */}
        {activeSection === "opinion" && (
          <section className="max-w-4xl mx-auto px-4 md:px-8 py-12">
            <div className="mb-12">
              <span className="font-body text-xs tracking-[0.25em] text-gold/70 uppercase">Авторские колонки</span>
              <h2 className="font-display text-5xl font-light text-white mt-2">Мнение</h2>
            </div>
            <div className="space-y-8">
              {[
                { title: "Почему «Опасный метод» — лучший фильм Кроненберга", author: "Анна Соколова", date: "2 июня 2026", readTime: "8 мин", tag: "Редакция" },
                { title: "Конец эпохи супергероев: что пришло на смену", author: "Игорь Павлов", date: "29 мая 2026", readTime: "12 мин", tag: "Гостевой пост" },
                { title: "Три года «Прошлых жизней» — почему фильм не отпускает", author: "Мария Ли", date: "25 мая 2026", readTime: "6 мин", tag: "Редакция" },
                { title: "Зачем смотреть советское кино в 2026 году", author: "Дмитрий Орлов", date: "20 мая 2026", readTime: "10 мин", tag: "Гостевой пост" },
              ].map((article, i) => (
                <article
                  key={i}
                  className="card-hover border-b border-white/5 pb-8 cursor-pointer group opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}
                >
                  <span className={`inline-block font-body text-xs px-2 py-0.5 mb-3 ${article.tag === "Редакция" ? "bg-gold text-black" : "border border-gold/40 text-gold"}`}>
                    {article.tag}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-light text-white group-hover:text-gold transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="font-body text-sm text-white/50">{article.author}</span>
                    <span className="font-body text-xs text-white/30">{article.date}</span>
                    <span className="flex items-center gap-1 font-body text-xs text-white/30">
                      <Icon name="Clock" size={12} /> {article.readTime}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ====== REVIEW DETAIL ====== */}
        {activeSection === "review-detail" && selectedReview && (
          <>
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
              <img
                src={selectedReview.image}
                alt={selectedReview.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="hero-gradient absolute inset-0" />
              <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6 md:px-16 max-w-4xl mx-auto left-0 right-0">
                <button
                  onClick={() => setActiveSection("reviews")}
                  className="flex items-center gap-2 font-body text-xs text-white/40 hover:text-gold transition-colors mb-6 w-fit"
                >
                  <Icon name="ArrowLeft" size={14} /> Все рецензии
                </button>
                <span className="inline-block font-body text-xs px-2 py-0.5 mb-3 bg-gold text-black w-fit">
                  {selectedReview.tag}
                </span>
                <h1 className="font-display text-4xl md:text-6xl font-light text-white leading-tight opacity-0 animate-fade-in-up" style={{ animationFillMode: "forwards" }}>
                  {selectedReview.title}
                </h1>
                <p className="font-body text-sm text-white/50 mt-3 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>
                  {selectedReview.director} · {selectedReview.year} · {selectedReview.genre} · {selectedReview.country}
                </p>
              </div>
            </section>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 md:px-8 py-12">
              {/* Meta strip */}
              <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-white/8 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                    <Icon name="User" size={14} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-white">{selectedReview.author}</p>
                    <p className="font-body text-xs text-white/40">{selectedReview.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-white/40">
                  <Icon name="Clock" size={13} />
                  <span className="font-body text-xs">{selectedReview.readTime}</span>
                </div>
                <div className="flex items-center gap-1 text-white/40">
                  <Icon name="Timer" size={13} />
                  <span className="font-body text-xs">{selectedReview.duration}</span>
                </div>
                <div className="ml-auto">
                  <StarRating rating={selectedReview.rating} />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Main text */}
                <div className="lg:col-span-2 space-y-6">
                  {selectedReview.fullText.map((block, i) => {
                    if (block.type === "lead") return (
                      <p key={i} className="font-display text-xl md:text-2xl font-light text-white/90 leading-relaxed italic border-l-2 border-gold pl-5">
                        {block.text}
                      </p>
                    );
                    if (block.type === "h2") return (
                      <h2 key={i} className="font-display text-2xl md:text-3xl font-semibold text-white mt-10 mb-2">
                        {block.text}
                      </h2>
                    );
                    if (block.type === "quote") return (
                      <blockquote key={i} className="my-8 px-6 py-5 border border-gold/20 bg-gold/5 relative">
                        <Icon name="Quote" size={20} className="text-gold/40 mb-3" />
                        <p className="font-display text-lg md:text-xl font-light text-white/80 italic leading-relaxed">
                          {block.text}
                        </p>
                      </blockquote>
                    );
                    return (
                      <p key={i} className="font-body text-base text-white/65 leading-[1.8]">
                        {block.text}
                      </p>
                    );
                  })}

                  {/* Verdict */}
                  <div className="mt-10 p-6 bg-[hsl(0,0%,8%)] border border-gold/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="CheckCircle" size={16} className="text-gold" />
                      <span className="font-body text-xs tracking-widest text-gold uppercase">Вердикт</span>
                    </div>
                    <p className="font-display text-lg font-light text-white/85 italic leading-relaxed">
                      {selectedReview.verdict}
                    </p>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Score breakdown */}
                  <div className="bg-[hsl(0,0%,8%)] border border-white/5 p-5">
                    <h3 className="font-body text-xs tracking-widest text-white/30 uppercase mb-4">Оценка</h3>
                    <div className="text-center mb-5">
                      <span className="font-display text-5xl font-semibold text-gold">{selectedReview.rating.toFixed(1)}</span>
                      <span className="font-body text-white/30 text-sm">/10</span>
                    </div>
                    <div className="space-y-3">
                      {Object.entries(selectedReview.scores).map(([key, val]) => (
                        <div key={key}>
                          <div className="flex justify-between mb-1">
                            <span className="font-body text-xs text-white/50 capitalize">{key.replace(/_/g, " ")}</span>
                            <span className="font-body text-xs text-gold">{val}</span>
                          </div>
                          <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gold/70 rounded-full transition-all duration-700"
                              style={{ width: `${val * 10}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Info card */}
                  <div className="bg-[hsl(0,0%,8%)] border border-white/5 p-5 space-y-3">
                    <h3 className="font-body text-xs tracking-widest text-white/30 uppercase mb-4">О фильме</h3>
                    {[
                      { label: "Режиссёр", value: selectedReview.director },
                      { label: "Год", value: String(selectedReview.year) },
                      { label: "Жанр", value: selectedReview.genre },
                      { label: "Страна", value: selectedReview.country },
                      { label: "Длительность", value: selectedReview.duration },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex flex-col gap-0.5">
                        <span className="font-body text-xs text-white/30">{label}</span>
                        <span className="font-body text-sm text-white/80">{value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Other reviews */}
                  <div>
                    <h3 className="font-body text-xs tracking-widest text-white/30 uppercase mb-4">Другие рецензии</h3>
                    <div className="space-y-3">
                      {REVIEWS.filter(r => r.id !== selectedReview.id).slice(0, 3).map((r) => (
                        <button
                          key={r.id}
                          onClick={() => openReview(r)}
                          className="flex gap-3 w-full group text-left"
                        >
                          <img src={r.image} alt={r.title} className="w-12 h-16 object-cover flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                          <div>
                            <p className="font-display text-sm text-white/70 group-hover:text-gold transition-colors leading-tight">{r.title}</p>
                            <p className="font-body text-xs text-white/30 mt-1">{r.director}</p>
                            <p className="font-body text-xs text-gold mt-0.5">{r.rating.toFixed(1)}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 mt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="font-display text-2xl font-light tracking-widest text-gold mb-4">
                КИН<span className="text-white">О</span>ВЗГЛЯД
              </div>
              <p className="font-body text-xs text-white/40 leading-relaxed">
                Авторское интернет-СМИ о кино. Профессиональный взгляд на современный кинопоток.
              </p>
            </div>
            <div>
              <h4 className="font-body text-xs tracking-widest text-white/30 uppercase mb-4">Разделы</h4>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button key={item.id} onClick={() => setActiveSection(item.id)} className="block font-body text-sm text-white/50 hover:text-gold transition-colors">
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-body text-xs tracking-widest text-white/30 uppercase mb-4">Платформы</h4>
              <div className="space-y-2">
                <a href="#" className="block font-body text-sm text-white/50 hover:text-gold transition-colors">ВКонтакте</a>
                <a href="#" className="block font-body text-sm text-white/50 hover:text-gold transition-colors">Чат-бот</a>
                <a href="#" className="block font-body text-sm text-white/50 hover:text-gold transition-colors">Рассылка</a>
              </div>
            </div>
            <div>
              <h4 className="font-body text-xs tracking-widest text-white/30 uppercase mb-4">О проекте</h4>
              <div className="space-y-2">
                <a href="#" className="block font-body text-sm text-white/50 hover:text-gold transition-colors">О редакции</a>
                <a href="#" className="block font-body text-sm text-white/50 hover:text-gold transition-colors">Авторам</a>
                <a href="#" className="block font-body text-sm text-white/50 hover:text-gold transition-colors">Реклама</a>
              </div>
            </div>
          </div>
          <div className="section-divider mb-6" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-body text-xs text-white/25">© 2026 Киновзгляд. Все права защищены.</span>
            <span className="font-body text-xs text-white/25">cinema-view.ru</span>
          </div>
        </div>
      </footer>
    </div>
  );
}