const courseDetails = {
  'html-css': ['HTML & CSS Fundamentals', 'Start with the structure of a simple page, then style it for phones and larger screens.', ['Create a semantic HTML page', 'Style layouts with modern CSS', 'Build and validate an accessible form']],
  javascript: ['JavaScript Essentials', 'Add behavior to a web page with practical, browser-based JavaScript.', ['Work with values and functions', 'Respond to clicks and form input', 'Update a page with the DOM']],
  websites: ['Build Complete Websites', 'Bring structure, styling, and interaction together in one complete project.', ['Plan a small website', 'Create responsive navigation', 'Publish a polished final project']],
  'advanced-js': ['Advanced JavaScript', 'Explore the language features and async patterns used in larger applications.', ['Use modern ES6+ syntax', 'Understand closures and prototypes', 'Handle asynchronous work']],
  react: ['React Fundamentals', 'Build reusable components and manage changing interface state.', ['Create components with JSX', 'Share data with props', 'Manage state with hooks']],
  python: ['Python Programming', 'Learn Python through small programs that grow into a practical final project.', ['Use variables and control flow', 'Organize code with functions', 'Read and write files']]
};

const modal = document.querySelector('#courseModal');
const modalContent = modal?.querySelector('.modal-content');
const courseBody = document.querySelector('#courseBody');
let previousFocus = null;

document.querySelectorAll('.start-course').forEach((button) => {
  button.addEventListener('click', () => openCourse(button.dataset.course));
});

document.querySelector('[data-close-course]')?.addEventListener('click', closeCourse);

function openCourse(courseId) {
  const course = courseDetails[courseId];
  if (!course || !modal || !courseBody) return;

  previousFocus = document.activeElement;
  const [title, intro, lessons] = course;
  courseBody.innerHTML = `
    <p class="eyebrow">Course preview</p>
    <h2 id="courseTitle">${title}</h2>
    <p class="course-intro">${intro}</p>
    <h3>Your first lessons</h3>
    <ol class="lesson-list">${lessons.map((lesson, index) => `<li><span>${index + 1}</span>${lesson}</li>`).join('')}</ol>
    <a class="button primary" href="contact.html?course=${encodeURIComponent(courseId)}">Ask about this course</a>`;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modalContent.focus();
}

function closeCourse() {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  previousFocus?.focus();
}

modal?.addEventListener('click', (event) => {
  if (event.target === modal) closeCourse();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal?.classList.contains('open')) closeCourse();
});
