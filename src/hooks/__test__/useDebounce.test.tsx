import React from 'react';
import { act, render } from '@testing-library/react';
import useDebounce from '../useDebounce';

interface TestComponentProps {
  value: string;
  delay: number;
}

const TestComponent: React.FC<TestComponentProps> = ({ value, delay }) => {
  const debouncedValue = useDebounce(value, delay);
  return <div data-testid="debounced-value">{debouncedValue}</div>;
};

describe('useDebounce hook', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should debounce value', () => {
    const { getByTestId } = render(<TestComponent value="test" delay={500} />);
    expect(getByTestId('debounced-value').textContent).toBe('test');

    act(() => {
      jest.advanceTimersByTime(250);
    });
    expect(getByTestId('debounced-value').textContent).toBe('test');

    act(() => {
      jest.advanceTimersByTime(250);
    });
    expect(getByTestId('debounced-value').textContent).toBe('test');
  });
});
