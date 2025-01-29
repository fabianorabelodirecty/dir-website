/**
 * Divide um array em chunks (grupos) de tamanho especificado.
 *
 * @param array - O array a ser dividido.
 * @param size - O tamanho de cada chunk.
 * @returns Um array contendo os chunks (grupos) do array original.
 */
const chunkArray = <T,>(array: T[], size: number): T[][] => {
    if (size <= 0) {
        throw new Error("O tamanho do chunk deve ser maior que zero.");
    }

    const result: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};

export default chunkArray;
