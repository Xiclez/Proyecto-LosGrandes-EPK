// Datos de los DJs para el Modal
const djData = {
    'elgrande': {
        name: "DJ EL GRANDE",
        realname: "Jesús Alberto Acosta",
        desc: `
            <p>Originario de Chihuahua, México. Jesús Alberto Acosta Camacho, conocido artísticamente como DJ El Grande, lleva su carrera en el mundo de la música electrónica aportando experiencia, conocimientos, profesionalismo, imaginación, creatividad y mucha energía.</p>
            <p>Se especializa en Dark Techno, Techno House y Techno Melodic, logrando crear atmósferas inmersivas en la pista de baile. Junto a su hermano gemelo An'Gelo, ha llevado el proyecto 'Los Grandes' a ganar concursos nacionales como "@FM El After" y presentarse en los mejores recintos y festivales del estado.</p>
        `,
        images: [
            "https://res.cloudinary.com/dn4m0kr7j/image/upload/v1772747078/IMG_3624_glxldc.jpg",
            "https://res.cloudinary.com/dws4nvuln/image/upload/v1756692695/IMG_1721_ktmjih.jpg",
            "https://res.cloudinary.com/dn4m0kr7j/image/upload/v1772747865/1c725098-43b8-4c6c-afc3-4a854c4de97f.png",
            "https://res.cloudinary.com/dn4m0kr7j/image/upload/v1772748435/3d310043-f1ab-4368-bc14-d10cc9cfce11.png"
        ]
    },
    'angelo': {
        name: "DJ AN'GELO",
        realname: "Ángel Acosta",
        desc: `
            <p>Ángel Acosta, originario de Chihuahua, México. Inició su carrera a finales del 2021 junto a su hermano gemelo conformando el dúo dinámico "Los Grandes".</p>
            <p>Se especializa en Tech House, House, Deep House, Dark Techno, Techno y Acid. Su talento lo ha llevado a tocar en prestigiosos clubes de la ciudad como Studio Bar, Epicentro y fuera del estado en lugares como Mazatlán y Sonora.</p>
            <p>Con una fuerte presencia escénica y selecciones musicales envolventes, genera verdaderas experiencias auditivas y catárticas en la multitud en cada uno de sus sets y presentaciones B2B.</p>
        `,
        images: [
            "https://res.cloudinary.com/dn4m0kr7j/image/upload/v1772747156/IMG_3646_zeguce.jpg",
            "https://res.cloudinary.com/dws4nvuln/image/upload/v1756695038/IMG_1976_hojkuh.jpg",
            "https://res.cloudinary.com/dn4m0kr7j/image/upload/v1772747532/cace2ff7-3e1a-4010-a40f-b064f0f10eba.png",
            "https://res.cloudinary.com/dn4m0kr7j/image/upload/v1772747642/72a9f602-69b9-4ab1-a135-cf43800fe820.png"
        ]
    },
    'daxiklez': {
        name: "DAXIKLEZ (DXZ)",
        realname: "Orvil Ibarra",
        desc: `
            <p>Daxiklez, también conocido como “El Chicles”, es un DJ, VJ y productor musical originario de Cuauhtémoc, Chihuahua. Su conexión con la música electrónica comenzó en la adolescencia, despertando su ambición de convertirse en productor mediante la exploración de géneros como Synthwave, Tech House y Psytrance.</p>
            <p>Con el tiempo, su enfoque evolucionó hacia el <strong>Techno Melódico</strong>, influenciado por artistas como Massano, Kevin de Vries y Argy. Paralelamente, mantiene una fuerte conexión con la energía cruda del <strong>Makina</strong> y el <strong>Hardcore gabber de los 90</strong>, inspirado por referentes españoles como Pastis & Buenri.</p>
            <p>Actualmente, Daxiklez trabaja en consolidar un sonido propio que combine profundidad emocional, intensidad rítmica y narrativa atmosférica, utilizando la música como vehículo de expresión, catarsis y trascendencia.</p>
        `,
        images: [
            "https://res.cloudinary.com/dn4m0kr7j/image/upload/v1773103179/WhatsApp_Image_2026-03-09_at_6.35.34_PM_vxubbc.jpg",
            "https://res.cloudinary.com/dn4m0kr7j/image/upload/v1773103224/IMG_4958-Mejorado-NR_agckra.jpg",
            "https://res.cloudinary.com/dn4m0kr7j/image/upload/v1773103280/IMG_4036-Mejorado-NR_syw5mp.jpg",
            "https://res.cloudinary.com/dn4m0kr7j/image/upload/v1773103453/WhatsApp_Image_2026-03-09_at_6.43.49_PM_fu1kzw.jpg"
        ]
    }
};

// --- LÓGICA DE GALERÍA DE IMÁGENES ---

// 1. Agrega aquí todas las URLs de tus fotos (pueden ser 30+)
const galleryUrls = [
    "https://res.cloudinary.com/dn4m0kr7j/image/upload/v1773105485/532809240_122164545854470044_7672833906699744853_n_xaxjlt.jpg",
    "https://res.cloudinary.com/dn4m0kr7j/image/upload/v1773105025/470811688_122129024432470044_5509237602758758775_n_kwxprm.jpg",
    "https://res.cloudinary.com/dn4m0kr7j/image/upload/v1773105019/535394923_122164546580470044_4383645454554300008_n_go55ab.jpg",
    "https://res.cloudinary.com/dn4m0kr7j/image/upload/v1773105018/473778578_122132763146470044_2693884629212887899_n_lva6h1.jpg",
    "https://res.cloudinary.com/dn4m0kr7j/image/upload/v1773105019/502663335_122153856656470044_1296633725264560023_n_kgl6im.jpg",
    "https://res.cloudinary.com/dn4m0kr7j/image/upload/v1773105019/472730128_122131346810470044_6620131259901745652_n_ltmtpl.jpg",
    "https://res.cloudinary.com/dn4m0kr7j/image/upload/v1773105019/527982729_122162862404470044_465539165676667187_n_kkv68a.jpg",
    "https://res.cloudinary.com/dn4m0kr7j/image/upload/v1773105018/472615717_122131346822470044_1019909214540954135_n_uk4vhz.jpg",
    "https://res.cloudinary.com/dn4m0kr7j/image/upload/v1773105018/491966239_122147838116470044_5249376444744907261_n_mtfudi.jpg",
    "https://res.cloudinary.com/dn4m0kr7j/image/upload/v1773105017/480595185_122137794056470044_7028256843347547617_n_qzjhig.jpg",
    "https://res.cloudinary.com/dn4m0kr7j/image/upload/v1773105015/471583308_122130099476470044_8819244736407497509_n_lk5itx.jpg",
    "https://res.cloudinary.com/dn4m0kr7j/image/upload/v1773105015/469881278_122127912284470044_4180221927050199851_n_zclngo.jpg",
    "https://res.cloudinary.com/dn4m0kr7j/image/upload/v1773105014/467705801_122124973994470044_4127114491848095831_n_klimbl.jpg",
    "https://res.cloudinary.com/dn4m0kr7j/image/upload/v1773105014/467583533_122124717380470044_6716965640282206729_n_fncypw.jpg",
    "https://res.cloudinary.com/dn4m0kr7j/image/upload/v1773105014/455728541_122104450754470044_3595936200157044103_n_e5sd7a.jpg",
    // Pega aquí las demás imágenes separadas por comas.
];

function renderMainGallery() {
    const container = document.getElementById('main-gallery');
    if(!container) return;

    let html = '';
    
    galleryUrls.forEach((url, index) => {
        // Este algoritmo crea automáticamente el patrón asimétrico cada 5 fotos
        const positionInPattern = index % 5;
        let spanClass = "col-span-1";
        let heightClass = "h-64 md:h-80";
        let delayClass = `delay-${((index % 3) + 1) * 100}`; // Asigna 100, 200 o 300 aleatoriamente

        if (positionInPattern === 0) {
            spanClass = "md:col-span-2"; // Imagen ancha
            heightClass = "h-64 md:h-96";
        } else if (positionInPattern === 1) {
            heightClass = "h-64 md:h-96"; // Imagen alta
        }

        // Ya NO tiene bw-filter, por lo que se renderiza a color natural
        html += `
            <div class="${spanClass} group relative overflow-hidden ${heightClass} reveal ${delayClass}">
                <img src="${url}" alt="Galería Los Grandes" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-brand-red mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Lógica del Modal
function openModal(djId) {
    const data = djData[djId];
    if(!data) return;

    document.getElementById('modal-title').innerText = data.name;
    document.getElementById('modal-subtitle').innerText = data.realname;
    document.getElementById('modal-desc').innerHTML = data.desc;
    
    const galleryHtml = data.images.map(img => `
        <div class="group relative overflow-hidden aspect-square border border-brand-red/20">
            <img src="${img}" alt="[Imagen de Galería]" class="w-full h-full object-cover bw-filter group-hover:scale-110 transition-transform duration-500">
            <div class="absolute inset-0 bg-brand-red mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
    `).join('');
    document.getElementById('modal-gallery').innerHTML = galleryHtml;

    const modal = document.getElementById('dj-modal');
    const content = document.getElementById('modal-content');
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    // Animación de entrada
    setTimeout(() => {
        content.classList.remove('opacity-0', 'scale-95');
        content.classList.add('opacity-100', 'scale-100');
    }, 10);
    
    document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
}

function closeModal() {
    const modal = document.getElementById('dj-modal');
    const content = document.getElementById('modal-content');
    
    // Animación de salida
    content.classList.remove('opacity-100', 'scale-100');
    content.classList.add('opacity-0', 'scale-95');
    
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto'; // Restaurar scroll
    }, 300);
}

// Animaciones en Scroll
document.addEventListener('DOMContentLoaded', () => {
    renderMainGallery();
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    // Event Listener para Scroll
    window.addEventListener('scroll', revealOnScroll);
    
    // Trigger inicial
    revealOnScroll();
});