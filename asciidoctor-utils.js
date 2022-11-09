const log = console.log.bind(console);

function scrollNavIntoView() {
  var hash = window?.location?.hash;

  if (hash === undefined) return;

  var navItem = document.querySelector(`a[href="${hash}"]`);

  log(navItem);

  navItem.scrollIntoView({
    block: 'start',
  });
}

(function asciidoctorUtils() {
  scrollNavIntoView();
})();
