const orientation = {
    "horizontal": "pozioma",
    "vertical": "pionowa",
    "square": "kwadratowa",
    "all": "wszystkie",
    }
    
    export default Object.keys(orientation).map(value => ({
        value,
        label: orientation[value]
    }))