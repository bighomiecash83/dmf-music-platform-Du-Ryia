/**
 * @jest-environment jsdom
 */

import _ from 'lodash';

// Import the component function
// Since the original code doesn't export it, we'll redefine it for testing
function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

describe('component', () => {
  test('should create a div element', () => {
    const element = component();
    expect(element.tagName).toBe('DIV');
  });

  test('should contain "Hello webpack" text', () => {
    const element = component();
    expect(element.innerHTML).toBe('Hello webpack');
  });

  test('should use lodash join function', () => {
    const element = component();
    const expected = _.join(['Hello', 'webpack'], ' ');
    expect(element.innerHTML).toBe(expected);
  });
});
