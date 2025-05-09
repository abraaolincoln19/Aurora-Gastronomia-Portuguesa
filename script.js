// Dicionários de Tradução
const translations = {
  pt: {
    menu: "Menu",
    delivery: "Delivery",
    recipes: "Receitas",
    about: "Sobre",
    contact: "Contacto",
    orderNow: "Peça já!",
    menuTitle: "Menu - Dolor sit consectetur",
    menuText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    aboutTitle: "Sobre - Lorem ipsum dolor sit",
    aboutText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    recipesTitle: "Receitas - Lorem ipsum dolor sit",
    recipesText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    deliveryTitle: "Delivery - Lorem ipsum dolor sit amet",
    deliveryText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    address: "Morada",
    schedule: "Nossos Horários",
    reservationCTA: "Garanta sua experiência conosco. Faça sua reserva e venha vivenciar uma experiência única de sabores.",
    reserveNow: "Reserve já!",
    addressDetails: "Lorem, ipsum 10<br>Lipsum dolor 0066-988<br>Lorem - ipsum<br>99668-9969<br>contact@aurora.com",
    scheduleDetails: "Segunda a Sexta: 12h às 15h | 19h às 23h<br>Sábado: 19h às 23h<br>Domingo: Fechado"
  },
  en: {
    menu: "Menu",
    delivery: "Delivery",
    recipes: "Recipes",
    about: "About",
    contact: "Contact",
    orderNow: "Order Now!",
    menuTitle: "Menu - Dolor sit consectetur",
    menuText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    aboutTitle: "About - Lorem ipsum dolor sit",
    aboutText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    recipesTitle: "Recipes - Lorem ipsum dolor sit",
    recipesText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    deliveryTitle: "Delivery - Lorem ipsum dolor sit amet",
    deliveryText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    address: "Address",
    schedule: "Our Hours",
    reservationCTA: "Ensure your experience with us. Make your reservation and come live a unique tasting experience.",
    reserveNow: "Book Now!",
    addressDetails: "Lorem, ipsum 10<br>Lipsum dolor 0066-988<br>Lorem - ipsum<br>99668-9969<br>contact@aurora.com",
    scheduleDetails: "Monday to Friday: 12pm to 3pm | 7pm to 11pm<br>Saturday: 7pm to 11pm<br>Sunday: Closed"
  },
  es: {
    menu: "Menú",
    delivery: "Entrega",
    recipes: "Recetas",
    about: "Sobre",
    contact: "Contacto",
    orderNow: "¡Ordena ahora!",
    menuTitle: "Menú - Dolor sit consectetur",
    menuText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    aboutTitle: "Sobre - Lorem ipsum dolor sit",
    aboutText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    recipesTitle: "Recetas - Lorem ipsum dolor sit",
    recipesText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    deliveryTitle: "Entrega - Lorem ipsum dolor sit amet",
    deliveryText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    address: "Dirección",
    schedule: "Nuestros Horarios",
    reservationCTA: "Asegure su experiencia con nosotros. Haga su reserva y venga a vivir una experiencia única de sabores.",
    reserveNow: "¡Reserva ahora!",
    addressDetails: "Lorem, ipsum 10<br>Lipsum dolor 0066-988<br>Lorem - ipsum<br>99668-9969<br>contact@aurora.com",
    scheduleDetails: "Lunes a Viernes: 12pm a 3pm | 7pm a 11pm<br>Sábado: 7pm a 11pm<br>Domingo: Cerrado"
  },
  fr: {
    menu: "Menu",
    delivery: "Livraison",
    recipes: "Recettes",
    about: "À propos",
    contact: "Contact",
    orderNow: "Commandez maintenant!",
    menuTitle: "Menu - Dolor sit consectetur",
    menuText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    aboutTitle: "À propos - Lorem ipsum dolor sit",
    aboutText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    recipesTitle: "Recettes - Lorem ipsum dolor sit",
    recipesText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    deliveryTitle: "Livraison - Lorem ipsum dolor sit amet",
    deliveryText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    address: "Adresse",
    schedule: "Nos Horaires",
    reservationCTA: "Assurez votre expérience avec nous. Faites votre réservation et venez vivre une expérience gastronomique unique.",
    reserveNow: "Réservez maintenant!",
    addressDetails: "Lorem, ipsum 10<br>Lipsum dolor 0066-988<br>Lorem - ipsum<br>99668-9969<br>contact@aurora.com",
    scheduleDetails: "Lundi à Vendredi : 12h à 15h | 19h à 23h<br>Samedi : 19h à 23h<br>Dimanche : Fermé"
  }
};

// Função para alterar o idioma
function changeLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Atualização dos textos de seções específicas
  document.querySelector("#menu h2").textContent = translations[lang].menuTitle;
  document.querySelector("#menu p").textContent = translations[lang].menuText;
  document.querySelector("#sobre h2").textContent = translations[lang].aboutTitle;
  document.querySelector("#sobre p").textContent = translations[lang].aboutText;
  document.querySelector("#receitas h2").textContent = translations[lang].recipesTitle;
  document.querySelector("#receitas p").textContent = translations[lang].recipesText;
  document.querySelector("#delivery h2").textContent = translations[lang].deliveryTitle;
  document.querySelector("#delivery p").textContent = translations[lang].deliveryText;
  document.querySelector("#contact h3").textContent = translations[lang].address;
  document.querySelector(".horarios h3").textContent = translations[lang].schedule;
  document.querySelector("#cta-footer p").innerHTML = translations[lang].reservationCTA;
};

// ============================
//    Interação do WhatsApp
// ============================

function openWhatsAppPopup() {
  document.getElementById("whatsapp-popup").style.display = "block";
}

function closeWhatsAppPopup() {
  document.getElementById("whatsapp-popup").style.display = "none";
}

function redirectToWhatsApp() {
  const phoneNumber = "351917943625"; // Coloquei o número do WhatsApp aqui (com código do país)
  const message = "Olá, gostaria de saber mais sobre Aurora - Gastronomia Portuguesa.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

