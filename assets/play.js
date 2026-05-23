/* AI for Real Folks — click-to-play for video grid
   Replaces a static thumbnail card with the YouTube iframe on first click.
   No external dependencies. Lightweight. Preserves accessibility.
*/

(function () {
  function activate(embed) {
    var id = embed.getAttribute('data-id');
    if (!id) return;
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/' + id + '?autoplay=1&rel=0&modestbranding=1');
    iframe.setAttribute('title', embed.getAttribute('data-title') || 'AI for Real Folks video');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', 'true');
    embed.innerHTML = '';
    embed.appendChild(iframe);
  }

  function init() {
    var embeds = document.querySelectorAll('.video .embed[data-id]');
    embeds.forEach(function (embed) {
      embed.setAttribute('role', 'button');
      embed.setAttribute('tabindex', '0');
      embed.addEventListener('click', function () { activate(embed); });
      embed.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activate(embed);
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
