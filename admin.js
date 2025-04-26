// Cleaned-up admin panel JS: only blog post demo remains

// Blog post demo (local preview only, not saved)
function addBlogPost() {
    const title = document.getElementById('blog-title').value;
    const content = document.getElementById('blog-content').value;
    if (title && content) {
        const preview = document.getElementById('blog-preview');
        const article = document.createElement('article');
        article.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
        preview.prepend(article);
        document.getElementById('blog-title').value = '';
        document.getElementById('blog-content').value = '';
    }
}