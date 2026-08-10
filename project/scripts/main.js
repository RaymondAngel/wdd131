document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#primary-navigation');
const serviceCards = document.querySelectorAll('.service-card');
const projectForm = document.querySelector('#project-form');
const dateTimeElements = document.querySelectorAll('.current-datetime');

function setMenuState(isOpen) {
  navigation.classList.toggle('open', isOpen);
  menuButton.setAttribute('aria-expanded', `${isOpen}`);
  menuButton.querySelector('.menu-label').textContent = `${isOpen ? 'Close' : 'Menu'}`;
}

function toggleMenu() {
  setMenuState(!navigation.classList.contains('open'));
}

function closeMenu() {
  setMenuState(false);
}

function rememberService(category) {
  const visit = {
    category,
    viewedAt: new Date().toISOString()
  };
  localStorage.setItem('hddLastService', JSON.stringify(visit));
}

function updateCurrentDateTime() {
  const now = new Date();
  const readableDateTime = now.toLocaleString(undefined, {
    dateStyle: 'full',
    timeStyle: 'medium'
  });

  dateTimeElements.forEach((element) => {
    element.dateTime = `${now.toISOString()}`;
    element.textContent = `${readableDateTime}`;
  });
}

if (menuButton && navigation) {
  menuButton.addEventListener('click', toggleMenu);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navigation.classList.contains('open')) {
      closeMenu();
      menuButton.focus();
    }
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

serviceCards.forEach((card) => {
  card.addEventListener('click', () => {
    rememberService(card.dataset.category);
  });
});

if (projectForm) {
  const savedService = JSON.parse(localStorage.getItem('hddLastService'))?.category;
  const serviceSelect = projectForm.querySelector('#service');
  const formMessage = projectForm.querySelector('#form-message');
  const submissionSent = new URLSearchParams(window.location.search).get('sent') === 'true';

  if (submissionSent) {
    formMessage.textContent = `Thank you. Your project inquiry has been emailed to High Desert Development.`;
  }

  if (savedService && [...serviceSelect.options].some((option) => option.value === savedService)) {
    serviceSelect.value = savedService;
  }

  projectForm.addEventListener('submit', (event) => {
    const formData = new FormData(projectForm);
    const inquiry = Object.fromEntries(formData.entries());
    localStorage.setItem('hddProjectInquiry', JSON.stringify(inquiry));
    formMessage.textContent = `Sending your project inquiry to High Desert Development…`;
  });
}

updateCurrentDateTime();
setInterval(updateCurrentDateTime, 1000);
