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
            "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1621360841013-c76831f1246c?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=600&auto=format&fit=crop"
        ]
    }
};

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