import { useEffect, useRef, useState } from "react";

/* ====== SHU YERNI O'ZGARTIRING ====== */
const TELEGRAM = "kurbanov_ksh"; // buyurtmalar shu akkauntga tushadi
const INSTAGRAM = "kurbanov_ksh";
const BRAND = "kurbanov_ksh";

const services = [
  { t: "Vizitka va landing sayt", d: "Bir sahifali tezkor sayt: mijozlar sizni topadi va darrov bog'lanadi.", p: "tez va arzon" },
  { t: "Biznes va korporativ sayt", d: "Kompaniyangiz uchun ko'p sahifali, zamonaviy va ishonchli sayt.", p: "eng ko'p tanlanadi" },
  { t: "Internet-do'kon", d: "Katalog, savat va buyurtmalar bilan to'liq ishlaydigan onlayn do'kon.", p: "savdo uchun" },
  { t: "Telegram bot", d: "Buyurtma qabul qiluvchi, javob beruvchi va hisobot yuboruvchi botlar.", p: "avtomatlashtirish" },
  { t: "Web ilova va panel", d: "Admin panel, CRM va sizning jarayoningizga moslab yozilgan dasturlar.", p: "maxsus loyiha" },
  { t: "Sayt dizayni va tuzatish", d: "Eski saytni yangilash, tezlashtirish va telefonga moslashtirish.", p: "yangilash" },
];

const stats = [
  { n: "30+", l: "tugallangan loyiha" },
  { n: "24 soat", l: "ichida birinchi javob" },
  { n: "100%", l: "telefonga moslashgan" },
  { n: "1 oy", l: "bepul qo'llab-quvvatlash" },
];

const steps = [
  { t: "Gaplashamiz", d: "Nima kerakligini Telegramda tushuntirasiz, men narx va muddatni aytaman." },
  { t: "Dizayn tayyorlayman", d: "Ishni boshlashdan oldin ko'rinishini ko'rsataman, siz tasdiqlaysiz." },
  { t: "Kod yozaman", d: "Tez, xavfsiz va telefonlarda ham chiroyli ishlaydigan sayt yasayman." },
  { t: "Internetga chiqaraman", d: "Domen ulayman, sayt jonli bo'ladi va sizga hammasini topshiraman." },
];

const projects = [
  { t: "Go'zallik saloni", k: "Landing sayt", c: "linear-gradient(135deg,var(--ink2),var(--gold-mid))" },
  { t: "Kiyim do'koni", k: "Internet-do'kon", c: "linear-gradient(135deg,var(--ink2),var(--gold))" },
  { t: "O'quv markazi", k: "Biznes sayt + bron", c: "linear-gradient(135deg,var(--gold-lo),var(--gold-hi))" },
  { t: "Yetkazib berish boti", k: "Telegram bot", c: "linear-gradient(135deg,var(--ink2),var(--gold-lo))" },
];

const tech = ["React", "JavaScript", "Node.js", "Tailwind", "Telegram Bot", "Vercel", "Figma", "Git"];

const codeText = `const dasturchi = {
  ism: "${BRAND}",
  yasaydi: ["sayt", "bot", "web ilova"],
  tezlik: "juda tez",
  sifat: "zo'r",
};

// Sizning loyihangiz navbatda...
bronQil("sayt");`;

const css = `
@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@500;700;800&family=Manrope:wght@400;500;600;700&display=swap');

:root{
  --ink:#0c0a07; --ink2:#15110a; --ink-rgb:12,10,7;
  --gold:#d4a437; --gold-hi:#f6dd94; --gold-lo:#8f6a1c; --gold-mid:#b98a2c;
  --gold-rgb:212,164,55; --hi-rgb:246,221,148; --tint-rgb:255,236,180; --tint2-rgb:255,244,210;
  --text:#f4ecd8; --muted:#b7ab8f; --on-gold:#1a1204;
  --glass:linear-gradient(145deg,rgba(var(--tint-rgb),.10),rgba(var(--tint-rgb),.03));
  --line:rgba(var(--hi-rgb),.22);
  --display:'Unbounded','Trebuchet MS',sans-serif;
  --body:'Manrope','Segoe UI',system-ui,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:var(--ink);transition:background .5s,color .5s;color:var(--text);font-family:var(--body);line-height:1.6;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
:focus-visible{outline:2px solid var(--gold-hi);outline-offset:3px}

.site{position:relative;overflow:hidden;min-height:100vh}
.bg{position:fixed;inset:0;z-index:0;pointer-events:none}
.orb{position:absolute;border-radius:50%;filter:blur(70px);opacity:.55}
.orb.a{width:520px;height:520px;background:radial-gradient(circle,var(--gold),transparent 70%);top:-140px;right:-120px;animation:float 14s ease-in-out infinite}
.orb.b{width:420px;height:420px;background:radial-gradient(circle,var(--gold-lo),transparent 70%);top:45%;left:-160px;animation:float 18s ease-in-out infinite reverse}
.orb.c{width:380px;height:380px;background:radial-gradient(circle,var(--gold-mid),transparent 70%);bottom:-120px;right:20%;opacity:.35;animation:float 16s ease-in-out infinite}
@keyframes float{0%,100%{transform:translate(0,0)}50%{transform:translate(30px,40px)}}

.glass{
  background:var(--glass);
  border:1px solid var(--line);
  border-radius:22px;
  backdrop-filter:blur(20px) saturate(140%);
  -webkit-backdrop-filter:blur(20px) saturate(140%);
  box-shadow:inset 0 1px 0 rgba(var(--tint2-rgb),.18),0 20px 50px rgba(0,0,0,.35);
}
.wrap{position:relative;z-index:1;max-width:1120px;margin:0 auto;padding:0 22px}

/* nav */
.nav{position:fixed;top:14px;left:0;right:0;z-index:50}
.nav-in{max-width:1120px;margin:0 auto;padding:10px 12px 10px 20px;display:flex;align-items:center;justify-content:space-between;gap:12px;border-radius:999px}
.logo{font-family:var(--display);font-weight:700;font-size:15px;color:var(--gold-hi);white-space:nowrap}
.links{display:flex;gap:26px;font-size:14px;font-weight:600;color:var(--muted)}
.links a:hover{color:var(--gold-hi)}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:0;cursor:pointer;font-family:var(--body);font-weight:700;font-size:15px;padding:13px 26px;border-radius:999px;color:var(--on-gold);background:linear-gradient(135deg,var(--gold-hi),var(--gold) 55%,var(--gold-lo));box-shadow:0 8px 28px rgba(var(--gold-rgb),.38),inset 0 1px 0 rgba(255,255,255,.45);transition:transform .2s,box-shadow .2s}
.btn:hover{transform:translateY(-2px);box-shadow:0 12px 34px rgba(var(--gold-rgb),.55),inset 0 1px 0 rgba(255,255,255,.45)}
.btn.ghost{background:transparent;color:var(--gold-hi);border:1px solid var(--line);box-shadow:none}
.btn.ghost:hover{background:rgba(var(--hi-rgb),.08)}
.btn.sm{padding:10px 20px;font-size:14px}

/* hero */
.hero{padding:150px 0 90px;display:grid;grid-template-columns:1.1fr .9fr;gap:48px;align-items:center}
.pill{display:inline-flex;align-items:center;gap:10px;padding:8px 16px;border-radius:999px;font-size:13px;font-weight:600;color:var(--gold-hi);margin-bottom:24px}
.dot{width:8px;height:8px;border-radius:50%;background:#7CFF9B;box-shadow:0 0 0 0 rgba(124,255,155,.7);animation:pulse 2s infinite}
@keyframes pulse{70%{box-shadow:0 0 0 10px rgba(124,255,155,0)}100%{box-shadow:0 0 0 0 rgba(124,255,155,0)}}
h1{font-family:var(--display);font-weight:800;font-size:clamp(34px,5.4vw,60px);line-height:1.08;letter-spacing:-.02em}
h1 .gold{background:linear-gradient(120deg,var(--gold-hi),var(--gold) 50%,var(--gold-lo));-webkit-background-clip:text;background-clip:text;color:transparent;display:block}
.lead{margin:22px 0 32px;font-size:18px;color:var(--muted);max-width:520px}
.cta{display:flex;flex-wrap:wrap;gap:14px}

.code{padding:0;overflow:hidden}
.code-bar{display:flex;align-items:center;gap:8px;padding:14px 18px;border-bottom:1px solid var(--line)}
.code-bar i{width:11px;height:11px;border-radius:50%;background:var(--gold-lo);opacity:.8}
.code-bar i:nth-child(2){background:var(--gold)}
.code-bar i:nth-child(3){background:var(--gold-hi)}
.code-bar span{margin-left:auto;font-size:12px;color:var(--muted)}
.code pre{padding:22px;font-family:ui-monospace,'SFMono-Regular',Menlo,Consolas,monospace;font-size:14px;line-height:1.75;color:var(--gold-hi);min-height:270px;white-space:pre-wrap}
.caret{display:inline-block;width:8px;height:16px;background:var(--gold);vertical-align:middle;margin-left:2px;animation:blink 1s steps(1) infinite}
@keyframes blink{50%{opacity:0}}

/* stats */
.stats{display:grid;grid-template-columns:repeat(4,1fr);padding:10px}
.stat{padding:26px 18px;text-align:center}
.stat + .stat{border-left:1px solid var(--line)}
.stat b{display:block;font-family:var(--display);font-size:clamp(22px,3vw,32px);color:var(--gold-hi)}
.stat span{font-size:14px;color:var(--muted)}

/* tech marquee */
.marq{margin-top:56px;overflow:hidden;mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)}
.track{display:flex;gap:14px;width:max-content;animation:scroll 28s linear infinite}
.track span{padding:10px 22px;border-radius:999px;font-weight:600;font-size:14px;color:var(--gold-hi);border:1px solid var(--line);background:rgba(var(--hi-rgb),.05);white-space:nowrap}
@keyframes scroll{to{transform:translateX(-50%)}}

/* sections */
section{padding:90px 0 0}
.sec-h{margin-bottom:38px;max-width:620px}
h2{font-family:var(--display);font-weight:700;font-size:clamp(26px,3.6vw,40px);line-height:1.15;letter-spacing:-.01em}
.sec-h p{margin-top:12px;color:var(--muted);font-size:17px}

.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.card{padding:28px;transition:transform .25s,border-color .25s}
.card:hover{transform:translateY(-6px);border-color:rgba(var(--hi-rgb),.5)}
.card h3{font-size:19px;margin:16px 0 8px;font-weight:700}
.card p{color:var(--muted);font-size:15px}
.tag{display:inline-block;font-size:12px;font-weight:700;color:var(--on-gold);background:linear-gradient(135deg,var(--gold-hi),var(--gold));padding:4px 12px;border-radius:999px}

.steps{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.step{padding:26px}
.step em{font-style:normal;font-family:var(--display);font-weight:800;font-size:38px;background:linear-gradient(135deg,var(--gold-hi),var(--gold-lo));-webkit-background-clip:text;background-clip:text;color:transparent}
.step h3{margin:10px 0 8px;font-size:18px}
.step p{color:var(--muted);font-size:15px}

.works{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.work{overflow:hidden;padding:0}
.shot{height:170px;position:relative}
.shot::after{content:"";position:absolute;inset:26px 26px 0;border-radius:12px 12px 0 0;background:rgba(var(--ink-rgb),.55);backdrop-filter:blur(6px);border:1px solid rgba(var(--tint2-rgb),.25);border-bottom:0}
.work div.info{padding:18px 20px 22px}
.work h3{font-size:17px}
.work p{font-size:14px;color:var(--muted)}

/* booking */
.book{padding:54px;display:grid;grid-template-columns:.9fr 1.1fr;gap:48px;align-items:start;border-color:rgba(var(--hi-rgb),.4)}
.book h2{margin-bottom:14px}
.book .txt p{color:var(--muted);font-size:17px}
.perks{list-style:none;margin-top:26px;display:grid;gap:12px}
.perks li{display:flex;gap:12px;align-items:center;font-weight:600;font-size:15px}
.perks li::before{content:"✓";flex:none;width:24px;height:24px;border-radius:50%;display:grid;place-items:center;font-size:13px;color:var(--on-gold);background:linear-gradient(135deg,var(--gold-hi),var(--gold))}
.form{display:grid;gap:18px}
.form label{font-size:14px;font-weight:700;color:var(--gold-hi);display:block;margin-bottom:8px}
.form input,.form textarea{width:100%;padding:14px 16px;border-radius:14px;border:1px solid var(--line);background:rgba(var(--ink-rgb),.45);color:var(--text);font:inherit;font-size:15px}
.form input::placeholder,.form textarea::placeholder{color:var(--muted)}
.form textarea{min-height:100px;resize:vertical}
.chips{display:flex;flex-wrap:wrap;gap:10px}
.chip{padding:9px 16px;border-radius:999px;border:1px solid var(--line);background:transparent;color:var(--muted);font:inherit;font-size:14px;font-weight:600;cursor:pointer;transition:.2s}
.chip:hover{color:var(--gold-hi)}
.chip.on{color:var(--on-gold);background:linear-gradient(135deg,var(--gold-hi),var(--gold));border-color:transparent}
.big{padding:16px 30px;font-size:17px;width:100%}
.hint{font-size:13px;color:var(--muted);text-align:center}

footer{position:relative;z-index:1;margin-top:90px;padding:34px 22px 44px;border-top:1px solid var(--line);text-align:center;color:var(--muted);font-size:14px}
footer .row{display:flex;gap:22px;justify-content:center;margin-bottom:12px;font-weight:700;color:var(--gold-hi)}

/* rang tanlash tugmasi */
.nav-in{position:relative}
.nav-r{display:flex;align-items:center;gap:10px}
.theme{width:44px;height:44px;flex:none;border-radius:50%;border:1px solid var(--line);cursor:pointer;display:grid;place-items:center;background:rgba(var(--hi-rgb),.08);transition:background .25s,transform .25s}
.theme:hover{background:rgba(var(--hi-rgb),.18);transform:rotate(20deg)}
.ring{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(#ef4444,#f59e0b,#eab308,#22c55e,#06b6d4,#3b82f6,#8b5cf6,#ec4899,#ef4444)}
.core{width:16px;height:16px;border-radius:50%;border:2.5px solid var(--ink);transition:background .3s}

.picker{position:absolute;right:0;top:calc(100% + 12px);width:min(330px,calc(100vw - 20px));padding:20px;border-radius:22px;background:rgba(var(--ink-rgb),.88);animation:pop .22s cubic-bezier(.2,.8,.2,1);transform-origin:top right}
@keyframes pop{from{opacity:0;transform:scale(.9) translateY(-8px)}to{opacity:1;transform:none}}
.pk-h{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
.pk-h b{font-size:15px;color:var(--gold-hi)}
.pk-x{width:32px;height:32px;border-radius:50%;border:1px solid var(--line);background:transparent;color:var(--muted);font-size:18px;line-height:1;cursor:pointer}
.sw-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:10px}
.sw{aspect-ratio:1;border-radius:12px;border:2px solid transparent;cursor:pointer;position:relative;transition:transform .15s,border-color .15s;box-shadow:inset 0 1px 0 rgba(255,255,255,.35)}
.sw:hover{transform:scale(1.12)}
.sw.on{border-color:#fff;transform:scale(1.08)}
.sw.on::after{content:"✓";position:absolute;inset:0;display:grid;place-items:center;font-size:15px;font-weight:800;color:#fff;text-shadow:0 1px 3px rgba(0,0,0,.7)}
.custom{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:16px;padding-top:16px;border-top:1px solid var(--line);font-size:14px;font-weight:600;color:var(--text)}
.custom input{width:52px;height:36px;padding:0;border:1px solid var(--line);border-radius:10px;background:transparent;cursor:pointer}
.reset{margin-top:14px;width:100%;padding:11px;border-radius:12px;border:1px solid var(--line);background:transparent;color:var(--gold-hi);font:inherit;font-size:14px;font-weight:600;cursor:pointer}
.reset:hover{background:rgba(var(--hi-rgb),.1)}

/* floating button */
.fab{position:fixed;right:18px;bottom:18px;z-index:60}

/* ---- Noutbuk / planshet ---- */
@media (max-width:1024px){
  .hero{gap:32px}
  .grid3{grid-template-columns:1fr 1fr}
  .steps,.works{grid-template-columns:1fr 1fr}
}
@media (max-width:900px){
  .hero{grid-template-columns:1fr;padding:118px 0 60px}
  .links{display:none}
  .stats{grid-template-columns:1fr 1fr}
  .stat:nth-child(3){border-left:0}
  .stat:nth-child(n+3){border-top:1px solid var(--line)}
  .book{grid-template-columns:1fr;padding:34px 26px;gap:30px}
  section{padding-top:70px}
}
/* ---- Telefon ---- */
@media (max-width:600px){
  .wrap{padding:0 16px}
  .nav{top:10px;padding:0 10px}
  .nav-in{padding:8px 8px 8px 16px}
  .nav-in .btn{display:none}
  .hero{padding:96px 0 44px;gap:28px}
  .lead{font-size:16px;margin:16px 0 24px}
  .cta .btn{flex:1 1 100%}
  .pill{font-size:12px;margin-bottom:18px}
  .code pre{font-size:12.5px;padding:16px;min-height:240px}
  .grid3,.steps,.works{grid-template-columns:1fr}
  .card,.step{padding:22px}
  .shot{height:140px}
  .stat{padding:20px 10px}
  section{padding-top:56px}
  .sec-h{margin-bottom:26px}
  .sec-h p{font-size:15px}
  .book{padding:26px 18px;border-radius:20px}
  .chip{padding:10px 14px}
  .form input,.form textarea{font-size:16px} /* iPhone zoom bo'lmasligi uchun */
  .fab{left:16px;right:16px;bottom:calc(14px + env(safe-area-inset-bottom,0px))}
  footer{margin-top:60px;padding-bottom:96px}
  .orb.a{width:340px;height:340px}
  .orb.b,.orb.c{width:260px;height:260px}
}
@media (min-width:1400px){
  .wrap,.nav-in{max-width:1240px}
  .hero{padding-top:170px}
}
@media (prefers-reduced-motion:reduce){
  *{animation:none!important;transition:none!important}
}
`;


const DEFAULT_COLOR = "#d4a437";
const presets = [
  { n: "Tilla", c: "#d4a437" }, { n: "Yashil", c: "#22c55e" }, { n: "Zumrad", c: "#10b981" },
  { n: "Moviy", c: "#3b82f6" }, { n: "Osmon", c: "#06b6d4" }, { n: "Binafsha", c: "#8b5cf6" },
  { n: "Pushti", c: "#ec4899" }, { n: "Qizil", c: "#ef4444" }, { n: "To'q sariq", c: "#f97316" },
  { n: "Limon", c: "#eab308" }, { n: "Laym", c: "#a3e635" }, { n: "Marjon", c: "#fb7185" },
  { n: "Kumush", c: "#cbd5e1" }, { n: "Bronza", c: "#b45309" }, { n: "Fuksiya", c: "#d946ef" },
  { n: "Indigo", c: "#6366f1" }, { n: "Feruza", c: "#2dd4bf" }, { n: "Oq", c: "#f5f5f4" },
];

/* --- tanlangan rangdan butun sayt palitrasini yasaydi --- */
const hexToRgb = (h) => { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
  const l = (max + min) / 2;
  let h = 0, s = 0;
  if (d) {
    s = d / (1 - Math.abs(2 * l - 1));
    if (max === r) h = ((g - b) / d) % 6; else if (max === g) h = (b - r) / d + 2; else h = (r - g) / d + 4;
    h *= 60; if (h < 0) h += 360;
  }
  return [h, s * 100, l * 100];
}
function hslToRgb(h, s, l) {
  s /= 100; l /= 100;
  const k = (n) => (n + h / 30) % 12, a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
}
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const css_ = (rgb) => `rgb(${rgb.join(",")})`;

function buildTheme(hex) {
  const [r, g, b] = hexToRgb(hex);
  const [h, s0, l0] = rgbToHsl(r, g, b);
  const s = clamp(s0, 0, 100);
  const l = clamp(l0, 42, 82);              // qora fonda yaxshi ko'rinishi uchun
  const base = hslToRgb(h, s, l);
  const hi = hslToRgb(h, s, clamp(l + 22, 0, 88));
  const lo = hslToRgb(h, s, l * 0.58);
  const mid = hslToRgb(h, s, l * 0.85);
  const tint = hslToRgb(h, s, 88);
  const tint2 = hslToRgb(h, s, 93);
  const ink = hslToRgb(h, Math.min(s, 40) * 0.8, 4);
  const ink2 = hslToRgb(h, Math.min(s, 40) * 0.7, 7);
  const text = hslToRgb(h, Math.min(s, 40), 93);
  const muted = hslToRgb(h, Math.min(s, 22), 68);
  const lum = (0.2126 * base[0] + 0.7152 * base[1] + 0.0722 * base[2]) / 255;
  const onGold = lum > 0.42 ? css_(hslToRgb(h, 60, 8)) : "#ffffff";
  return {
    "--gold": css_(base), "--gold-hi": css_(hi), "--gold-lo": css_(lo), "--gold-mid": css_(mid),
    "--gold-rgb": base.join(","), "--hi-rgb": hi.join(","),
    "--tint-rgb": tint.join(","), "--tint2-rgb": tint2.join(","),
    "--ink": css_(ink), "--ink2": css_(ink2), "--ink-rgb": ink.join(","),
    "--text": css_(text), "--muted": css_(muted), "--on-gold": onGold,
  };
}

function useTyping(text, speed = 38) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (n >= text.length) return;
    const id = setTimeout(() => setN(n + 1), speed);
    return () => clearTimeout(id);
  }, [n, text, speed]);
  return text.slice(0, n);
}

export default function App() {
  const typed = useTyping(codeText);
  const [name, setName] = useState("");
  const [service, setService] = useState(services[1].t);
  const [note, setNote] = useState("");
  const [color, setColor] = useState(DEFAULT_COLOR);
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);

  // tanlangan rangni butun saytga qo'llash
  useEffect(() => {
    const root = document.documentElement;
    const vars = buildTheme(color);
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", vars["--ink"]);
  }, [color]);

  // tashqariga bosilsa yoki Esc bosilsa oyna yopiladi
  useEffect(() => {
    if (!open) return;
    const away = (e) => { if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false); };
    const esc = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", away);
    document.addEventListener("touchstart", away);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", away);
      document.removeEventListener("touchstart", away);
      document.removeEventListener("keydown", esc);
    };
  }, [open]);

  const tgLink = `https://t.me/${TELEGRAM}`;

  const book = () => {
    const msg =
      `Assalomu alaykum! Sayt bron qilmoqchiman.\n\n` +
      `Ismim: ${name || "-"}\n` +
      `Xizmat: ${service}\n` +
      `Izoh: ${note || "-"}`;
    window.open(`${tgLink}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  };

  return (
    <div className="site">
      <style>{css}</style>

      <div className="bg" aria-hidden="true">
        <div className="orb a" />
        <div className="orb b" />
        <div className="orb c" />
      </div>

      {/* NAV */}
      <header className="nav">
        <div className="nav-in glass">
          <a href="#top" className="logo">{BRAND}</a>
          <nav className="links">
            <a href="#xizmatlar">Xizmatlar</a>
            <a href="#jarayon">Jarayon</a>
            <a href="#ishlar">Ishlar</a>
            <a href="#bron">Bron qilish</a>
          </nav>
          <div className="nav-r" ref={boxRef}>
            <a href="#bron" className="btn sm">Sayt bron qilish</a>
            <button
              type="button"
              className="theme"
              onClick={() => setOpen((o) => !o)}
              aria-haspopup="dialog"
              aria-expanded={open}
              aria-label="Sayt rangini tanlash"
              title="Rangni tanlang"
            >
              <span className="ring"><span className="core" style={{ background: color }} /></span>
            </button>

            {open && (
              <div className="picker glass" role="dialog" aria-label="Sayt rangini tanlash">
                <div className="pk-h">
                  <b>Sayt rangini tanlang</b>
                  <button type="button" className="pk-x" onClick={() => setOpen(false)} aria-label="Yopish">×</button>
                </div>
                <div className="sw-grid">
                  {presets.map((p) => (
                    <button
                      type="button"
                      key={p.c}
                      className={"sw" + (color.toLowerCase() === p.c ? " on" : "")}
                      style={{ background: p.c }}
                      title={p.n}
                      aria-label={p.n}
                      onClick={() => setColor(p.c)}
                    />
                  ))}
                </div>
                <label className="custom">
                  <span>O'zingiz xohlagan rang</span>
                  <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                </label>
                <button type="button" className="reset" onClick={() => setColor(DEFAULT_COLOR)}>
                  Asl (tilla) rangga qaytarish
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="wrap" id="top">
        {/* HERO */}
        <div className="hero">
          <div>
            <div className="pill glass">
              <span className="dot" /> Yangi buyurtmalar uchun bo'sh joy bor
            </div>
            <h1>
              Biznesingiz uchun
              <span className="gold">zo'r sayt yasayman</span>
            </h1>
            <p className="lead">
              Men dasturchiman. Vizitka, do'kon, biznes sayt va Telegram botlarni
              chiroyli, tez va telefonda ham mukammal ishlaydigan qilib yozib beraman.
            </p>
            <div className="cta">
              <a href="#bron" className="btn">Sayt bron qilish</a>
              <a href="#ishlar" className="btn ghost">Ishlarimni ko'rish</a>
            </div>
          </div>

          <div className="code glass" aria-label="Dastur kodi namunasi">
            <div className="code-bar">
              <i /><i /><i />
              <span>dasturchi.js</span>
            </div>
            <pre>{typed}<span className="caret" /></pre>
          </div>
        </div>

        {/* STATS */}
        <div className="stats glass">
          {stats.map((s) => (
            <div className="stat" key={s.l}>
              <b>{s.n}</b>
              <span>{s.l}</span>
            </div>
          ))}
        </div>

        <div className="marq" aria-hidden="true">
          <div className="track">
            {[...tech, ...tech].map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </div>

        {/* XIZMATLAR */}
        <section id="xizmatlar">
          <div className="sec-h">
            <h2>Nimalar yasab beraman</h2>
            <p>Kichik vizitkadan katta internet-do'kongacha, hammasini o'zim boshidan oxirigacha qilaman.</p>
          </div>
          <div className="grid3">
            {services.map((s) => (
              <article className="card glass" key={s.t}>
                <span className="tag">{s.p}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </article>
            ))}
          </div>
        </section>

        {/* JARAYON */}
        <section id="jarayon">
          <div className="sec-h">
            <h2>Ish qanday boradi</h2>
            <p>To'rt oddiy qadam, hech qanday murakkablik yo'q.</p>
          </div>
          <div className="steps">
            {steps.map((s, i) => (
              <div className="step glass" key={s.t}>
                <em>{i + 1}</em>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ISHLAR */}
        <section id="ishlar">
          <div className="sec-h">
            <h2>Qilgan ishlarimdan namunalar</h2>
            <p>Bu yerga o'zingizning haqiqiy loyihalaringiz nomi va rasmini qo'yishingiz mumkin.</p>
          </div>
          <div className="works">
            {projects.map((p) => (
              <article className="work glass" key={p.t}>
                <div className="shot" style={{ background: p.c }} />
                <div className="info">
                  <h3>{p.t}</h3>
                  <p>{p.k}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* BRON */}
        <section id="bron">
          <div className="book glass">
            <div className="txt">
              <h2>Sayt bron qilish</h2>
              <p>
                Formani to'ldiring va tugmani bosing. Siz to'g'ridan-to'g'ri
                Telegramda @{TELEGRAM} ga o'tasiz, xabar tayyor holda yozilgan bo'ladi.
              </p>
              <ul className="perks">
                <li>24 soat ichida javob beraman</li>
                <li>Narxni ishni boshlashdan oldin kelishamiz</li>
                <li>Tayyor saytga 1 oy bepul yordam</li>
                <li>Domen va hostingni o'zim ulab beraman</li>
              </ul>
            </div>

            <div className="form">
              <div>
                <label htmlFor="ism">Ismingiz</label>
                <input id="ism" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masalan: Aziz" />
              </div>

              <div>
                <label>Qaysi xizmat kerak?</label>
                <div className="chips">
                  {services.map((s) => (
                    <button
                      type="button"
                      key={s.t}
                      className={"chip" + (service === s.t ? " on" : "")}
                      onClick={() => setService(s.t)}
                    >
                      {s.t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="izoh">Qisqacha yozing (ixtiyoriy)</label>
                <textarea id="izoh" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Saytingiz nima haqida bo'ladi?" />
              </div>

              <button type="button" className="btn big" onClick={book}>
                Sayt bron qilish
              </button>
              <p className="hint">Tugma bosilganda Telegram ochiladi</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="row">
          <a href={tgLink} target="_blank" rel="noreferrer">Telegram</a>
          <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noreferrer">Instagram</a>
        </div>
        © {new Date().getFullYear()} {BRAND}. Barcha huquqlar himoyalangan.
      </footer>

      <a href="#bron" className="btn fab">Sayt bron qilish</a>
    </div>
  );
}