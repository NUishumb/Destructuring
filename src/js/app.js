export default function destructorize(object) {
    const { special } = object;
    const result = [];

    for (let i = 0; i < special.length; i++) {
        if (special[i].description === undefined) {
            special[i].description = 'Описание недоступно';
        }

        const result2 = [];

        for (const prop in special[i]) {
            if (special[i].description !== undefined) {
                result2.push({ key: prop, value: special[i][prop] });
            }
        }
        result.push(result2);
    }

    return result;
}
