import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import '@testing-library/jest-dom/extend-expect';

describe('Test suite for the Footer component', () => {
  let footer;
  beforeEach(() => {
    render(<Footer />);
    footer = screen.getByTestId('footer');
  });

  it('Should test if Footer component is inside the document', () => {
    expect(footer).toBeInTheDocument();
  });

  it('Should render a snapshot of the Footer component', () => {
    expect(footer).toMatchSnapshot();
  });
});
