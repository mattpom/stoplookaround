(function () {
  var filters = document.querySelectorAll('[data-journey-filter]');
  var cards = document.querySelectorAll('.journey-product[data-region]');
  var status = document.getElementById('journey-status');
  filters.forEach(function (button) {
    button.addEventListener('click', function () {
      var filter = button.dataset.journeyFilter, count = 0;
      filters.forEach(function (item) { item.setAttribute('aria-pressed', String(item === button)); });
      cards.forEach(function (card) { card.hidden = filter !== 'all' && card.dataset.region !== filter; if (!card.hidden) count += 1; });
      if (status) status.textContent = count + (count === 1 ? ' design' : ' designs');
    });
  });
  document.addEventListener('click', function (event) {
    var element = event.target instanceof Element ? event.target : null;
    var link = element && element.closest('a.journey-product-link');
    if (!link || typeof window.gtag !== 'function') return;
    window.gtag('event', 'travel_shirt_click', {
      product_name: link.dataset.product || '', listing_id: link.dataset.listing || '',
      link_position: link.dataset.position || '', link_url: link.href,
      source_site: window.location.hostname, page_path: window.location.pathname,
      transport_type: 'beacon'
    });
  });
})();
