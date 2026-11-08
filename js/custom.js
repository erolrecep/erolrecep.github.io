// Accessibility Enhancements (WCAG 2.1 & 2.2 AA)
document.addEventListener('DOMContentLoaded', function () {
  // 1. Keyboard accessibility for scrollable code blocks (WCAG 2.1.1 & 2.1.3)
  var scrollElements = document.querySelectorAll('pre, .highlight, div.highlight > pre, pre > code');
  scrollElements.forEach(function (el, idx) {
    if (el.scrollWidth > el.clientWidth || el.tagName.toLowerCase() === 'pre') {
      if (!el.getAttribute('tabindex')) {
        el.setAttribute('tabindex', '0');
      }
      if (!el.getAttribute('role')) {
        el.setAttribute('role', 'region');
      }
      if (!el.getAttribute('aria-label')) {
        var codeEl = el.querySelector('code') || el;
        var lang = '';
        if (codeEl && codeEl.className) {
          var match = codeEl.className.match(/language-([a-zA-Z0-9_-]+)/);
          if (match) lang = match[1].toUpperCase() + ' ';
        }
        el.setAttribute('aria-label', (lang || '') + 'Code snippet ' + (idx + 1));
      }
    }
  });

  // 2. Ensure all external links have rel="noopener noreferrer"
  var links = document.querySelectorAll('a[href^="http"]');
  links.forEach(function (link) {
    if (!link.getAttribute('rel')) {
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});
