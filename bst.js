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
    const hidariGroup = sortedArray.slice(0, middleValue)
    const migiGroup = sortedArray.slice(middleValue + 1)
    const root = sortedArray[middleValue]

    const node = Node(root)
    node.hidari = buildTree(hidariGroup)
    node.migi = buildTree(migiGroup)

    return node
}

export function Tree(arr) {
    return {
        root: buildTree(arr)
    }
}