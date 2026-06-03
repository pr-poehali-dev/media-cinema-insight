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

type Section = "home" | "reviews" | "afisha" | "archive" | "gold" | "opinion";

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

function ReviewCard({ review, index }: { review: typeof REVIEWS[0]; index: number }) {
  return (
    <article
      className="card-hover opacity-0 animate-fade-in-up group cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [genreFilter, setGenreFilter] = useState("Все");
  const [yearFilter, setYearFilter] = useState("Все годы");
  const [ratingFilter, setRatingFilter] = useState("Любая");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");

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
                  <ReviewCard key={r.id} review={r} index={i} />
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
                  <ReviewCard key={r.id} review={r} index={i} />
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
                <ReviewCard key={r.id} review={{ ...r, tag: "Классика" }} index={i} />
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
