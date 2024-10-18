import { useAtom } from 'jotai';
import { inputValueAtom, inputBaseAtom, outputBaseAtom, convertedValueAtom } from './Atoms';

const Converter = () => {
    const [inputValue, setInputValue] = useAtom(inputValueAtom);
    const [inputBase, setInputBase] = useAtom(inputBaseAtom);
    const [outputBase, setOutputBase] = useAtom(outputBaseAtom);
    const [, setConvertedValue] = useAtom(convertedValueAtom);

    const handleConversion = () => {
        let decimalValue: number;

        // Konverter input til decimal først
        try {
            if (inputBase === '2') {
                decimalValue = parseInt(inputValue, 2); // Binær til decimal
            } else if (inputBase === '16') {
                decimalValue = parseInt(inputValue, 16); // Hex til decimal
            } else {
                decimalValue = parseInt(inputValue, 10); // Decimal
            }

            if (isNaN(decimalValue)) {
                setConvertedValue('Invalid input');
                return;
            }
        } catch (error) {
            setConvertedValue('Invalid input');
            return;
        }

        // Konverter fra decimal til den valgte output-base
        let result: string;
        if (outputBase === '2') {
            result = decimalValue.toString(2); // Decimal til binær
            result = result.padStart(8, '0'); // Tilføj nuller foran for at få mindst 8 bits
        } else if (outputBase === '16') {
            result = decimalValue.toString(16).toUpperCase(); // Decimal til hex
        } else {
            result = decimalValue.toString(10); // Decimal til decimal
        }

        setConvertedValue(result);
    };

    return (
        <div>
            <div>
                <h1>Number Converter</h1>
                <input
                    type="text"
                    placeholder="Enter number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <select
                    value={inputBase}
                    onChange={(e) => setInputBase(e.target.value)}
                >
                    <option value="10">Decimal (Base 10)</option>
                    <option value="2">Binary (Base 2)</option>
                    <option value="16">Hexadecimal (Base 16)</option>
                </select>
                <select
                    value={outputBase}
                    onChange={(e) => setOutputBase(e.target.value)}
                >
                    <option value="10">Decimal (Base 10)</option>
                    <option value="2">Binary (Base 2)</option>
                    <option value="16">Hexadecimal (Base 16)</option>
                </select>
                <button onClick={handleConversion}>
                    Convert
                </button>
                <div>
                    <p>Converted Value: {useAtom(convertedValueAtom)[0]}</p>
                </div>
            </div>
        </div>

    );
};

export default Converter;
