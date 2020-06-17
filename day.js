const getDay = () => {
    let options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
    return new Date().toLocaleString("en-GB", options);
}

exports.getDay = getDay;