// utils/validate.js
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateProject(p) {
  const errors = [];
  if (!p || typeof p !== 'object') return ['payload must be an object'];

  if (!p.title || !String(p.title).trim()) errors.push('title is required');
  if (!p.description || !String(p.description).trim()) errors.push('description is required');

  return errors;
}

function validateContactForm(f) {
  const errors = [];
  if (!f || typeof f !== 'object') return ['payload must be an object'];
  if (!f.first_name || !String(f.first_name).trim()) errors.push('first_name is required');
  if (!f.last_name || !String(f.last_name).trim()) errors.push('last_name is required');
  if (!f.email || !EMAIL_RE.test(String(f.email))) errors.push('valid email is required');
  if (!f.password || String(f.password).length < 6) errors.push('password must be ≥ 6 chars');
  return errors;
}

module.exports = { validateProject, validateContactForm };
