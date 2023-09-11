import { render, fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas de Snapshot en <CounterApp />', () => {
    const initialValue = 10;

    test('Debe hacer match con el snapshot', () => {
        const valorFalla = 100;
        const { container } = render(<CounterApp value={valorFalla} />);
        expect(container).toMatchSnapshot();
    });

    // Genera advertencia
    test('Debe hacer match con el snapshot con valor sin definir', () => {
        const notValue = 'No se envio/definio el value';
        const { container, getByText } = render(<CounterApp />);
        const h2Element = getByText(notValue);
        expect(h2Element.textContent).toBe(notValue);
        expect(container).toMatchSnapshot();
    });

    test('Debe hacer match con el snapshot después de hacer clic en +1', () => {
        const { container, getByText } = render(<CounterApp value={initialValue} />);
        const incrementButton = getByText('+1');
        fireEvent.click(incrementButton);
        expect(container).toMatchSnapshot();
    });

    test('Debe hacer match con el snapshot después de hacer clic en -1', () => {
        const { container, getByText } = render(<CounterApp value={initialValue} />);
        const decrementButton = getByText('-1');
        fireEvent.click(decrementButton);
        expect(container).toMatchSnapshot();
    });

    test('Debe hacer match con el snapshot después de hacer clic en Reset', () => {
        const { container, getByLabelText } = render(<CounterApp value={initialValue} />);
        const resetButton = getByLabelText('btn-reset');
        fireEvent.click(resetButton);
        expect(container).toMatchSnapshot();
    });

    test('Debe hacer match con el snapshot después de múltiples interacciones', () => {
        const { container, getByText, getByLabelText } = render(<CounterApp value={initialValue} />);
        const incrementButton = getByText('+1');
        const decrementButton = getByText('-1');
        const resetButton = getByLabelText('btn-reset');

        fireEvent.click(incrementButton);
        fireEvent.click(decrementButton);
        fireEvent.click(incrementButton);
        fireEvent.click(resetButton);

        expect(container).toMatchSnapshot();
    });

});
