// TODO: the required validations are currently handled by the tag attributes.
// more custom validations could be added as well as inline error messages
// for better UX and a11y - https://www.a11yproject.com/posts/how-to-write-accessible-forms/

// validate at least one checkbox selected
(function () {
  const form = document.querySelector('form');
  const checkboxes = form.querySelectorAll('input[type=checkbox]');
  const checkboxLength = checkboxes.length;
  const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;

  function init() {
    if (firstCheckbox) {
      for (let i = 0; i < checkboxLength; i++) {
        checkboxes[i].addEventListener('change', checkValidity);
      }

      checkValidity();
    }
  }

  function isChecked() {
    for (let i = 0; i < checkboxLength; i++) {
      if (checkboxes[i].checked) return true;
    }

    return false;
  }

  function checkValidity() {
    const errorMessage = !isChecked() ? 'At least one checkbox must be selected.' : '';
    firstCheckbox.setCustomValidity(errorMessage);
  }

  init();
})();
