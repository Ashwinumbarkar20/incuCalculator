import { render, screen, fireEvent } from "@testing-library/react";
import App from './App';
import Calc from './Components/Calc/Calc';






describe('Calculator', () => {
  beforeEach(() => {
    render(<Calc />);
  });

  test('renders calculator with initial state', () => {
    expect(screen.getByText(/Calculator/i)).toBeInTheDocument();
     expect(screen.getByTestId("display")).toHaveTextContent("0");
  });

  test('displays numbers when buttons are clicked', () => {
    fireEvent.click(screen.getByText('1'));
    expect(screen.getByTestId('display')).toHaveTextContent('1');
    
    fireEvent.click(screen.getByText('2'));
    expect(screen.getByTestId('display')).toHaveTextContent('12');
  });

  test('performs addition operation', () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByTestId('display')).toHaveTextContent('3');
  });

  test('performs subtraction operation', () => {
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByTestId('display')).toHaveTextContent('2');
  });

  test('performs multiplication operation', () => {
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('*'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByTestId('display')).toHaveTextContent('12');
  });




  test('clears the calculator when C is clicked', () => {
    fireEvent.click(screen.getByText('3')); 
    fireEvent.click(screen.getByText('C')); 
     
    expect(screen.getByTestId('display')).toHaveTextContent('0'); 
  });
});

