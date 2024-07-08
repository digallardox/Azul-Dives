export const sanitize = (dirty, x, y) => {
    return dirty.toLowerCase().replace(x, y)
}