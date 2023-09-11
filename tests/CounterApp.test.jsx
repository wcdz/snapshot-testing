import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp"


describe('Pruebas en <CounterApp />', () => {

    const initialValue = 100;

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={initialValue} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar el valor inicial de 100 <CounterApp value={100}/>', () => {
        render(<CounterApp value={initialValue} />);
        expect(screen.getByText(initialValue)).toBeTruthy();
    });

});
