// test/validate.test.js
const { expect } = require('chai');
const { validateProject, validateContactForm } = require('../utils/validate');

describe('utils/validate', () => {
  describe('validateProject', () => {
    it('accepts a minimal valid project', () => {
      const errs = validateProject({ title: 'Demo', description: 'Something' });
      expect(errs).to.have.length(0);
    });

    it('rejects missing required fields', () => {
      const errs = validateProject({});
      expect(errs).to.include('title is required');
      expect(errs).to.include('description is required');
    });
  });

  describe('validateContactForm', () => {
    it('accepts a valid form', () => {
      const errs = validateContactForm({
        first_name: 'Ann',
        last_name: 'Kee',
        email: 'ann@example.com',
        password: 'secret123'
      });
      expect(errs).to.have.length(0);
    });

    it('rejects invalid email & short password & missing names', () => {
      const errs = validateContactForm({ first_name: '', last_name: '', email: 'nope', password: '123' });
      expect(errs).to.include('first_name is required');
      expect(errs).to.include('last_name is required');
      expect(errs).to.include('valid email is required');
      expect(errs).to.include('password must be ≥ 6 chars');
    });
  });
});
