const suffixes = ['Bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

function humanSize(value, iterator = 0) {
    if (value < 1000 || iterator >= 8) {
        return Math.round(value * 10) / 10 + suffixes[iterator]
    } else {
        const newValue = value / 1000
        return humanSize(newValue, iterator + 1)
    }
}

exports.humanSize = humanSize