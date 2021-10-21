function recycle(array) {
    const preper = [], glass = [], organic = [], plastic = [];

    for (const item of array) {
        switch (item['material']) {
            case 'paper':
                preper.push(item['type'])
                break;
            case 'glass':
                glass.push(item['type'])
                break;
            case 'organic':
                organic.push(item['type'])
                break;
            case 'plastic':
                plastic.push(item['type'])
                break;
        }
        switch (item['secondMaterial']) {
            case 'paper':
                preper.push(item['type'])
                break;
            case 'glass':
                glass.push(item['type'])
                break;
            case 'organic':
                organic.push(item['type'])
                break;
            case 'plastic':
                plastic.push(item['type'])
                break;
        }
    }
    return [preper, glass, organic, plastic]
}