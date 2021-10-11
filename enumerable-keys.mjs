
const basePropertyIsEnumerable = Object.prototype.propertyIsEnumerable;

export function enumerableKeys(o) {
    const keys = Object.keys(o);

    if ((typeof o !== 'object') && (typeof o !== 'function')) {
        return keys;
    }

    const allSyms = Object.getOwnPropertySymbols(o);

    if (allSyms.length === 0) {
        return keys;
    }

    const isEnumerable = basePropertyIsEnumerable.bind(o);

    if (keys.length === 0) {
        return allSyms.filter(isEnumerable)
    }

    for (const sym of allSyms) {
        if (isEnumerable(sym)) {
            keys.push(sym);
        }
    }

    return keys;
}

