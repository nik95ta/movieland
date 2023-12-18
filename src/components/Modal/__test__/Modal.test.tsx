import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Modal from '../Modal';

describe('Modal component', () => {
  const mockOnClose = jest.fn();
  let modalRoot: HTMLElement | null;

  beforeEach(() => {
    modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.appendChild(modalRoot);
  });

  afterEach(() => {
    if (modalRoot) {
      document.body.removeChild(modalRoot);
    }
  });

  it('renders correctly when open', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        <div>Modal Content</div>
      </Modal>,
    );
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(
      <Modal isOpen={false} onClose={mockOnClose}>
        <div>Modal Content</div>
      </Modal>,
    );
    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        <div>Modal Content</div>
      </Modal>,
    );
    fireEvent.click(screen.getByText('×'));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('calls onClose when Escape key is pressed', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        <div>Modal Content</div>
      </Modal>,
    );
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(mockOnClose).toHaveBeenCalled();
  });
});
