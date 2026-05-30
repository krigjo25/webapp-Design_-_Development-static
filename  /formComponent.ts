/**
 * FormComponent – renders the feedback form as a TS‑driven component.
 * The component creates the DOM elements programmatically and inserts
 * them into a container with the ID `formRoot`.
 */
export function renderForm() {
  const container = document.getElementById('formRoot');
  if (!container) {
    console.error('FormComponent: No element with id "formRoot" found.');
    return;
  }

  // Create wrapper
  const wrapper = document.createElement('div');
  wrapper.className = 'feedback';

  const title = document.createElement('h1');
  title.textContent = 'Feedback';
  wrapper.appendChild(title);

  const greeting = document.createElement('p');
  greeting.textContent = 'Greetings,';
  wrapper.appendChild(greeting);

  const intro = document.createElement('p');
  intro.innerHTML = `Please take your time to write us feedback; I would appreciate it.<br>
    Sincerely,<br>
    K. Gjøsund`;
  wrapper.appendChild(intro);

  const form = document.createElement('form');
  form.id = 'feedbackForm';
  form.name = 'feedback';
  form.method = 'POST';
  form.setAttribute('data-netlify', 'true');

  const fieldset = document.createElement('fieldset');
  const legend = document.createElement('legend');
  legend.textContent = 'Write us a feedback';
  fieldset.appendChild(legend);

  // Name
  const nameLabel = document.createElement('label');
  nameLabel.htmlFor = 'name';
  nameLabel.textContent = 'What is your name';
  fieldset.appendChild(nameLabel);
  fieldset.appendChild(document.createElement('br'));
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'name';
  nameInput.name = 'name';
  nameInput.placeholder = 'John Doe';
  nameInput.required = true;
  fieldset.appendChild(nameInput);
  fieldset.appendChild(document.createElement('br'));

  // Comment
  const commentLabel = document.createElement('label');
  commentLabel.htmlFor = 'feedback';
  commentLabel.textContent = 'Write us a comment';
  fieldset.appendChild(commentLabel);
  fieldset.appendChild(document.createElement('br'));
  const commentArea = document.createElement('textarea');
  commentArea.id = 'feedback';
  commentArea.name = 'feedback';
  commentArea.rows = 10;
  commentArea.cols = 50;
  commentArea.placeholder = 'Write a feedback...';
  commentArea.required = true;
  fieldset.appendChild(commentArea);
  fieldset.appendChild(document.createElement('br'));

  // Hashtags
  const tagLabel = document.createElement('label');
  tagLabel.htmlFor = 'hashtag';
  tagLabel.textContent = 'Add some hashtags (optional)';
  fieldset.appendChild(tagLabel);
  fieldset.appendChild(document.createElement('br'));
  const tagInput = document.createElement('input');
  tagInput.type = 'text';
  tagInput.id = 'hashtag';
  tagInput.name = 'hashtag';
  tagInput.placeholder = '#Awesome #amazing';
  fieldset.appendChild(tagInput);
  fieldset.appendChild(document.createElement('br'));

  // Agreement
  const agreeInput = document.createElement('input');
  agreeInput.type = 'checkbox';
  agreeInput.id = 'agree';
  agreeInput.name = 'agree';
  agreeInput.required = true;
  fieldset.appendChild(agreeInput);
  const agreeLabel = document.createElement('label');
  agreeLabel.htmlFor = 'agree';
  agreeLabel.innerHTML = 'By checking this box, you agree to our <a href="feedback_agreement.com">Feedback agreement</a>';
  fieldset.appendChild(agreeLabel);
  fieldset.appendChild(document.createElement('br'));

  // Submit / Reset
  const submit = document.createElement('input');
  submit.type = 'submit';
  submit.value = 'POST feedback';
  const reset = document.createElement('input');
  reset.type = 'reset';
  reset.value = 'Reset the form';
  fieldset.appendChild(submit);
  fieldset.appendChild(reset);

  form.appendChild(fieldset);
  wrapper.appendChild(form);
  container.appendChild(wrapper);
}

// Auto‑render when the module loads
if (document.readyState !== 'loading') {
  renderForm();
} else {
  document.addEventListener('DOMContentLoaded', renderForm);
}
