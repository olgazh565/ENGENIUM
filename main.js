import 'normalize.css';
import './style.scss'

const addShadowHeader = () => {
  const header = document.querySelector('.header');

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("_shadow");
    } else {
      header.classList.remove("_shadow");
    }
  });
};

addShadowHeader();

const controlProject = () => {
  const projects = document.querySelectorAll('.project');

  if (projects) { 
    projects.forEach(project => project.addEventListener('click', (e) => {      
      const projectInfo = project.querySelector('.project__wrapper');
      const projectButton = project.querySelector('.order-btn');

      if (e.target === projectButton) return;

      projectInfo.classList.toggle('hidden');

      if (projectInfo.style.maxHeight) {
        projectInfo.style.maxHeight = null;
      } else {
        projectInfo.style.maxHeight = `${projectInfo.clientHeight + 50}px`;
      }
    }));

    projects.forEach(project => project.addEventListener('keyup', (e) => {
      if (event.keyCode === 13) {
        project.click();
      }
    }));
  }
};

controlProject();

const controlTabs = () => {
  const tabsBtns = document.querySelectorAll('.solutions__tab');
  const contents = document.querySelectorAll('.solution');

  tabsBtns.forEach(btn => btn.addEventListener('click', () => {
    const id = btn.dataset.id;    

    tabsBtns.forEach(btn => btn.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    btn.classList.add('active');

    if (btn.classList.contains('active')) {
      contents.forEach(content => {
        if (content.id === id) {
          content.classList.add('active');
        }
      }); 
    }
  }));
};

controlTabs();

const burgerMenu = () => {
  const header = document.querySelector('.header');
  const burgerBtn = document.querySelector('.header__burger-btn');

  window.addEventListener('click', ({ target }) => {
    if (target.closest('.header__burger-btn')) {
      burgerBtn.classList.toggle('change');
      header.classList.toggle('open');

      if (header.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }

    if (target.closest('.nav__item') && header.classList.contains('open')) {
      header.classList.remove('open');
      burgerBtn.classList.remove('change');
      header.scrollTo(0, 0);
      document.body.style.overflow = '';
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 991 && header.classList.contains('open')) {
      header.classList.remove('open');
      burgerBtn.classList.remove('change');
      document.body.style.overflow = '';
    }
  });
};

burgerMenu();