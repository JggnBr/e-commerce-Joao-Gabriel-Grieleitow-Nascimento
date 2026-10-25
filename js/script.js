// Tech Store — JavaScript básico
const menuToggle = document.querySelector("#menu-toggle");
const mainNav = document.querySelector("#main-nav");

// Abre e fecha o menu em telas pequenas.
menuToggle.addEventListener("click", () => {
  const menuAberto = mainNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(menuAberto));
  menuToggle.querySelector(".menu-icon").textContent = menuAberto ? "✕" : "☰";
});

// Fecha o menu depois que uma opção é selecionada.
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.querySelector(".menu-icon").textContent = "☰";
  });
});

// Cálculo demonstrativo de frete usando if/else.
const shippingForm = document.querySelector("#shipping-form");
const cepInput = document.querySelector("#cep");
const shippingResult = document.querySelector("#shipping-result");

shippingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Remove hífen e espaços para verificar os números do CEP.
  const cep = cepInput.value.replace(/\D/g, "");

  if (cep.length !== 8) {
    shippingResult.textContent = "Digite um CEP válido com 8 números.";
    return;
  }

  // Regra ilustrativa: CEPs começando de 0 a 3 recebem frete reduzido.
  const primeiroNumero = Number(cep.charAt(0));
  if (primeiroNumero <= 3) {
    shippingResult.textContent = "Frete estimado: R$ 10,90 • prazo de 3 a 5 dias úteis.";
  } else {
    shippingResult.textContent = "Frete estimado: R$ 19,90 • prazo de 5 a 8 dias úteis.";
  }
});

// Validação do formulário de contato.
const contactForm = document.querySelector("#contact-form");
const contactResult = document.querySelector("#contact-result");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // O navegador verifica required, type=email e minlength antes deste código.
  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const nome = document.querySelector("#nome").value.trim();
  contactResult.textContent = `Obrigado, ${nome}! Entraremos em contato em breve.`;
  contactForm.reset();
});
