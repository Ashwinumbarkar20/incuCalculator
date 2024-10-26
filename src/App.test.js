import { render, screen } from '@testing-library/react';
import App from './App';
import Calc from './Components/Calc/Calc';



test("Check Calculator Text Appear", () => {
  render(<Calc />);
  const linkElement = screen.getByText(/Calculator/i);
  expect(linkElement).toBeInTheDocument();
});

test("Check  Display is there or not ", () => {
  render(<Calc />);
  const linkElement = screen.getByText(/Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
