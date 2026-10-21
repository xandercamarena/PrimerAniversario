/* =============================================================
   EDITA ÚNICAMENTE ESTA PARTE PARA PERSONALIZAR TU REGALO.
   Las fotos van en la carpeta "fotos" y los audios en "audio".
   ============================================================= */
const CONFIG = {
  para: 'Ashly',
  de: 'Xander',
  fechaInicio: '2025-10-21',  // AAAA-MM-DD; se usa para contar los días juntos
  dedicatoria: 'Espero que te guste, mi vida. Lo hice con todo mi corazón, por que es lo que siento por tí.',

  // Reemplaza fotos/foto1.jpg...foto6.jpg por TUS fotos con esos nombres.
  fotos: [
    'fotos/Foto1.png', 'fotos/Foto2.jpg', 'fotos/Foto3.png',
    'fotos/Foto4.jpg', 'fotos/Foto5.jpg', 'fotos/Foto6.jpg', 
    'fotos/Foto7.jpg', 'fotos/Foto8.png', 'fotos/Foto9.jpg',
    'fotos/Foto10.jpg', 'fotos/Foto11.jpg', 'fotos/Foto12.jpg',
    'fotos/Foto13.jpg', 'fotos/Foto14.png'
  ],

  tituloCancion: 'Nuestra canción especial',
  artistaCancion: 'Un recuerdo para siempre',
  cancion: 'audio/Love U.mp3', // Reemplaza por "audio/cancion.mp3" si usas MP3
  voz: 'audio/AmorPuro.mp3',    // Reemplaza por "audio/mensaje.mp3" si grabas MP3

  carta: [
    'Si estás leyendo esto es porque quería regalarte algo un poco diferente. Algo que no se guarda en una caja, sino en el corazón.',
    'Todavía me acuerdo del día en que empezó nuestra historia. Quién iba a decir que aquel encuentro en el Ping Pong se convertiría en tantos días maravillosos, tantas risas y tantos recuerdos que ahora son nuestros.',
    'No sé qué nos deparará el futuro, pero sí sé una cosa: quiero seguir creando recuerdos contigo, uno detrás de otro.',
    'Te amo muchísimo. Ojalá, dentro de muchos años, podamos volver a leer esta carta y sonreír al recordar todo lo que hemos vivido.'
  ],
  recuerdos: [
    { fecha: '31 de octubre de 2025', titulo: 'Primera cita', descripcion: 'Ese día no queria disfrasarme, porque tenia miedo. No sabía que iba a convertirse en uno de mis recuerdos favoritos.', foto: 11 },
    { fecha: '6 de noviembre de 2025', titulo: 'Nuestra primera aventura', descripcion: 'Un día lleno de risas, abrazos y momentos que se quedaron para siempre.', foto: 13 },
    { fecha: '9 de noviembre de 2025', titulo: 'El cumpleaños del amor de mi vida', descripcion: 'Ese día fue especial porque celebramos tu cumpleaños con toda tu familia, pero lo recuerdo por que ese dia te dije te amo mi amor, y si volviera a ese dia lo volveria hacer por que es lo que siento por ti, siempre lo he sentido desde el momento en el que nos concoimos.', foto: 10 }
  ],
  preguntas: [
    { pregunta: '¿Dónde fue nuestro primer beso?', opciones: ['En el cine', 'En el parque', 'En la playa'], correcta: 0 },
    { pregunta: '¿Quién dijo “te amo” primero?', opciones: ['Tú', 'Yo', 'Los dos a la vez'], correcta: 1 },
    {
  pregunta: '¿Quién es mi futura esposita? 💍❤️',
  opciones: ['Tú ❤️', 'Tú 💙', 'Tú 💍'],
  correcta: [0, 1, 2]
},
  ],
  promesaAniversario: 'Feliz aniversario, amorcito. Si hay algo que tengo claro es que mi lugar favorito siempre será a tu lado. Ese anillo es mi promesa mas sagrada. Ashly Prometo seguir eligiéndote, escucharte, cuidarte, hacerte reír y acompañarte en cada nuevo capítulo de nuestra historia. Gracias por cada abrazo, cada aventura y cada instante a tu lado. Si pudiera volver al principio, volvería a encontrarte y a enamorarme de ti, una y mil veces más.',
  mensajeFinal: 'Gracias por llenar mi vida de recuerdos bellos y hermosos a tu lado. Esto es solo el comienzo de nuestra historia. ¡Te amooooooooooo muchísimo Mi Licenciada Hermosa, Tu chico loquito, te admira como no tiendes idea mi amor! ♥'
};
/* ================= FIN DE LA PERSONALIZACIÓN ================== */

const $ = (id) => document.getElementById(id);
const setText = (id, value) => { const el = $(id); if (el) el.textContent = value; };
const formatDate = (iso) => new Date(`${iso}T12:00:00`).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
const formattedTime = (seconds) => { if (!Number.isFinite(seconds)) return '0:00'; const m = Math.floor(seconds / 60); const s = Math.floor(seconds % 60); return `${m}:${String(s).padStart(2, '0')}`; };
let toastTimer;
function showToast(message) {
  const toast = $('toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 3800);
}

// Datos y fotos
setText('introName', CONFIG.para);
setText('introFrom', CONFIG.de);
setText('heroName', CONFIG.para);
setText('heroDate', `DE ${CONFIG.de.toUpperCase()} · ${formatDate(CONFIG.fechaInicio).toUpperCase()}`);
setText('closingName', CONFIG.para);
setText('closingFrom', `— ${CONFIG.de.toUpperCase()}`);
setText('letterSignature', CONFIG.de);
setText('voiceSender', `De ${CONFIG.de}`);
setText('songTitle', CONFIG.tituloCancion);
setText('songArtist', CONFIG.artistaCancion);
setText('successMessage', CONFIG.mensajeFinal);
document.querySelector('.intro-quote').textContent = `“${CONFIG.dedicatoria}”`;
$('heroPhoto').src = document.getElementById('heroPhoto').getAttribute('src');
$('letterText').replaceChildren(...CONFIG.carta.map(paragraph => { const p = document.createElement('p'); p.textContent = paragraph; return p; }));

// Carta secreta de aniversario: la nueva sección no modifica las anteriores

setText('promiseFrom', CONFIG.de);

const promesa = document.getElementById('promiseText');
promesa.textContent = CONFIG.promesaAniversario;
promesa.style.whiteSpace = 'pre-line';
promesa.style.overflowWrap = 'break-word';

$('openPromise').addEventListener('click', () => {
  const button = $('openPromise');
  const letter = $('promiseLetter');
  const opened = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!opened));
  button.classList.toggle('is-open', !opened);
  letter.hidden = opened;
  if (!opened) {
    letter.classList.remove('appear');
    void letter.offsetWidth;
    letter.classList.add('appear');
    button.querySelector('.envelope-label').textContent = 'TU PROMESA ESTÁ ABIERTA ♥';
  } else {
    button.querySelector('.envelope-label').textContent = 'TOCA PARA ABRIR MI PROMESA';
  }
});

// Días juntos: calcular usando fechas civiles, no horas (evita errores por cambio horario)
function updateDays() {
  const [y, m, d] = CONFIG.fechaInicio.split('-').map(Number);
  const now = new Date();
  const elapsed = Math.max(0, Math.floor((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) - Date.UTC(y, m - 1, d)) / 86400000));
  setText('daysCounter', new Intl.NumberFormat('es-ES').format(elapsed));
  setText('countSince', `desde el ${formatDate(CONFIG.fechaInicio)}`);
}
updateDays();

// Regalo: la página empieza oculta; el corazón la descubre
$('openGift').addEventListener('click', () => {
  $('introScreen').hidden = true;
  $('openingScreen').hidden = false;
  window.setTimeout(() => {
    $('openingScreen').hidden = true;
    $('experience').hidden = false;
    window.scrollTo(0, 0);
  }, 1150);
});

// Galería: botones, puntos y gesto de deslizar
let currentPhoto = 0;
function showPhoto(index) {
  currentPhoto = (index + CONFIG.fotos.length) % CONFIG.fotos.length;
  const img = $('galleryImage');
  img.style.opacity = '0.35';
  img.src = CONFIG.fotos[currentPhoto];
  img.alt = `Recuerdo ${currentPhoto + 1} de ${CONFIG.fotos.length}`;
  img.onload = () => { img.style.opacity = '1'; };
  setText('galleryCounter', `${currentPhoto + 1} / ${CONFIG.fotos.length}`);
  $('galleryDots').replaceChildren(...CONFIG.fotos.map((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', `Ver foto ${i + 1}`);
    dot.classList.toggle('active', i === currentPhoto);
    dot.addEventListener('click', () => showPhoto(i));
    return dot;
  }));
}
$('prevPhoto').addEventListener('click', () => showPhoto(currentPhoto - 1));
$('nextPhoto').addEventListener('click', () => showPhoto(currentPhoto + 1));
let touchStartX = null;
$('galleryImage').addEventListener('touchstart', event => { touchStartX = event.changedTouches[0].screenX; }, { passive: true });
$('galleryImage').addEventListener('touchend', event => {
  if (touchStartX === null) return;
  const delta = event.changedTouches[0].screenX - touchStartX;
  if (Math.abs(delta) > 35) showPhoto(currentPhoto + (delta < 0 ? 1 : -1));
  touchStartX = null;
}, { passive: true });
showPhoto(0);

// Línea del tiempo
$('timelineList').replaceChildren(...CONFIG.recuerdos.map(item => {
  const entry = document.createElement('div'); entry.className = 'timeline-entry';
  const picture = document.createElement('img'); picture.src = CONFIG.fotos[Math.max(0, Math.min(CONFIG.fotos.length - 1, item.foto - 1))]; picture.alt = item.titulo; picture.loading = 'lazy';
  const details = document.createElement('div'); details.className = 'timeline-copy';
  const time = document.createElement('time'); time.textContent = item.fecha;
  const title = document.createElement('h3'); title.textContent = item.titulo;
  const desc = document.createElement('p'); desc.textContent = item.descripcion;
  details.append(time, title, desc); entry.append(picture, details); return entry;
}));

// Reproductores: solo audio local, compatible con móvil después de tocar play
const song = $('songAudio'); song.src = CONFIG.cancion;
const voice = $('voiceAudio'); voice.src = CONFIG.voz;
function pauseOther(active) { [song, voice].forEach(a => { if (a !== active && !a.paused) a.pause(); }); }
function toggleAudio(audio) {
  if (!audio.paused) { audio.pause(); return; }
  pauseOther(audio);
  audio.play().catch(() => showToast('No se pudo reproducir. Revisa que hayas puesto el archivo en la carpeta audio.'));
}
$('songToggle').addEventListener('click', () => toggleAudio(song));
$('voiceToggle').addEventListener('click', () => toggleAudio(voice));
for (const audio of [song, voice]) {
  audio.addEventListener('play', () => { const button = audio === song ? $('songToggle') : $('voiceToggle'); button.textContent = '❚❚'; button.setAttribute('aria-label', 'Pausar'); });
  audio.addEventListener('pause', () => { const button = audio === song ? $('songToggle') : $('voiceToggle'); button.textContent = '▶'; button.setAttribute('aria-label', 'Reproducir'); });
  audio.addEventListener('ended', () => { const button = audio === song ? $('songToggle') : $('voiceToggle'); button.textContent = '▶'; });
  audio.addEventListener('error', () => showToast('No se encontró el audio. Comprueba su nombre y la carpeta audio.'));
}
$('voiceDuration').textContent = '0:00';
voice.addEventListener('loadedmetadata', () => setText('voiceDuration', formattedTime(voice.duration)));
voice.addEventListener('timeupdate', () => {
  $('voiceProgress').style.width = `${voice.duration ? (voice.currentTime / voice.duration) * 100 : 0}%`;
  setText('voiceDuration', `${formattedTime(voice.currentTime)} / ${formattedTime(voice.duration)}`);
});
// Las barras decorativas se construyen una sola vez; nada de audio falso.
const barHeights = [8,17,24,13,30,19,12,27,35,17,26,13,9,20,31,24,17,11,28,19,34,22,15,29,11,20,16,24,10,15,25,12,9,21,14];
$('waveform').replaceChildren(...barHeights.map(height => { const bar = document.createElement('span'); bar.style.height = `${height}px`; return bar; }));

// Prueba sorpresa (tres preguntas, con feedback si se falla)
let currentQuestion = 0;
let quizMoving = false;
function openQuiz() {
  currentQuestion = 0;
  $('quizOverlay').hidden = false;
  $('quizContent').hidden = false;
  $('quizCompleted').hidden = true;
  renderQuiz();
  $('quizOverlay').scrollTop = 0;
}
function closeQuiz() { $('quizOverlay').hidden = true; }
function renderQuiz() {
  const question = CONFIG.preguntas[currentQuestion];
  quizMoving = false;
  setText('quizQuestionNum', `PREGUNTA ${currentQuestion + 1} DE ${CONFIG.preguntas.length}`);
  setText('quizTitle', question.pregunta);
  setText('quizFeedback', '');
  $('quizProgressDots').replaceChildren(...CONFIG.preguntas.map((_, i) => {
    const dot = document.createElement('span'); dot.classList.toggle('active', i === currentQuestion); return dot;
  }));
  $('quizAnswers').replaceChildren(...question.opciones.map((choice, i) => {
    const btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'answer-btn'; btn.textContent = choice;
    btn.addEventListener('click', () => {
      if (quizMoving) return;
      
if (Array.isArray(question.correcta)
    ? question.correcta.includes(i)
    : i === question.correcta) {

        quizMoving = true; btn.classList.add('correct'); setText('quizFeedback', '¡Sí! ♥');
        window.setTimeout(() => {
          currentQuestion++;
          if (currentQuestion >= CONFIG.preguntas.length) showSuccess();
          else renderQuiz();
        }, 800);
      } else {
        btn.classList.add('wrong');
        setText('quizFeedback', 'Casi... piensa un poquito más ♥');
        window.setTimeout(() => btn.classList.remove('wrong'), 700);
      }
    });
    return btn;
  }));
}
function showSuccess() {
  $('quizContent').hidden = true;
  $('quizCompleted').hidden = false;
  $('quizOverlay').scrollTop = 0;
  rainHearts();
}
function rainHearts() {
  for (let i = 0; i < 32; i++) {
    const heart = document.createElement('span');
    heart.className = 'confetti-heart'; heart.textContent = i % 3 === 0 ? '♡' : '♥';
    heart.style.left = `${(i * 71 + 13) % 100}%`;
    heart.style.top = `-${(i % 7) * 27}px`;
    heart.style.animationDelay = `${(i % 13) * .13}s`;
    heart.style.fontSize = `${12 + (i % 4) * 5}px`;
    document.body.appendChild(heart);
    window.setTimeout(() => heart.remove(), 4600);
  }
}
$('startQuiz').addEventListener('click', openQuiz);
$('closeQuiz').addEventListener('click', closeQuiz);
$('backToPage').addEventListener('click', () => { closeQuiz(); $('sorpresa').scrollIntoView({ behavior: 'smooth' }); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !$('quizOverlay').hidden) closeQuiz(); });

