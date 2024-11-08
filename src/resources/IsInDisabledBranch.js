export function isInDisabledBranch(elem) {
    return elem.closest("[disabled]") != null
}