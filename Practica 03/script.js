const blocks = window.BMC_DATA;

const canvas = document.querySelector('#canvas');
const dialog = document.querySelector('#detail-dialog');
const title = document.querySelector('#detail-title');
const list = document.querySelector('#detail-items');

for (const block of blocks) {
  const button = document.createElement('button');
  button.className = `block ${block.grid}`;
  button.type = 'button';
  button.setAttribute('aria-haspopup', 'dialog');
  button.innerHTML = `<span class="block-kicker">BMC · 0${blocks.indexOf(block) + 1}</span><span class="block-title"></span><span class="block-hint">Ver 5 elementos →</span>`;
  button.querySelector('.block-title').textContent = block.label;
  button.addEventListener('click', () => {
    title.textContent = block.label;
    list.replaceChildren(...block.items.map(item => {
      const li = document.createElement('li');
      li.textContent = item;
      return li;
    }));
    dialog.showModal();
  });
  canvas.append(button);
}

const toggle = document.querySelector('#theme-toggle');
const savedTheme = localStorage.getItem('wa-canvas-theme');
if (savedTheme) document.documentElement.dataset.theme = savedTheme;
function updateToggle() {
  const dark = document.documentElement.dataset.theme === 'dark';
  toggle.textContent = dark ? 'Tema claro' : 'Tema oscuro';
  toggle.setAttribute('aria-pressed', String(dark));
}
updateToggle();
toggle.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('wa-canvas-theme', next);
  updateToggle();
});
