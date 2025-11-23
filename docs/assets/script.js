const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Verificar si hay un tema guardado en localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark');
    toggleButton.textContent = '🌙';
} else {
    toggleButton.textContent = '☀️';
}

// Función para alternar tema
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    toggleButton.textContent = isDark ? '🌙' : '☀️';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});