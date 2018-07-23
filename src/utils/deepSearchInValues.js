const deepSearchInValues = (object, searchFor) => {
    const search = searchFor.toLowerCase();
    let allValues = '';

    function getNestedValues (obj) {
        for (let i in obj) {
            if (!obj.hasOwnProperty(i)) return;
            if (obj[i] === undefined) return;
            if (typeof obj[i] !== 'object') {
                allValues += ` ${obj[i].toLowerCase()}`;
            } else {
                getNestedValues(obj[i]);
            }
        }
    }

    getNestedValues(object);

    return allValues.includes(search);
}

export default deepSearchInValues;
