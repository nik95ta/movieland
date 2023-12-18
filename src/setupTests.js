import '@testing-library/jest-dom';

class MockIntersectionObserver {
  observe = jest.fn();

  unobserve = jest.fn();

  disconnect = jest.fn();

  constructor(callback) {
    this.callback = callback;
  }

  trigger(isIntersecting) {
    this.callback([{ isIntersecting }], this);
  }
}

global.IntersectionObserver = MockIntersectionObserver;
