export function Node(data) {
    return {
        data: data,
        hidari: null,
        migi: null
    }
}

function buildTree(arr) {
    if (arr.length === 0) {
        return null
    }
    const sortedArray = arr.sort((a, b) => a - b)
    const middleValue = Math.floor(sortedArray.length / 2)
    const root = sortedArray[middleValue]

    return Node(root)
}

export function Tree(arr) {
    return {
        root: buildTree(arr)
    }
}