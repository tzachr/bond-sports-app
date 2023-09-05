export default function convertKeysToCamelCase(
    data: Record<string, any>
): Record<string, any> {
    const convertedData: Record<string, any> = {};

    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            const camelCaseKey = key.replace(/_([a-z])/g, (_, c) =>
                c.toUpperCase()
            );
            convertedData[camelCaseKey] = data[key];
        }
    }

    return convertedData;
}
