// Code your solution here

function findMatching(list) {
    let newList = []
    for (const item of list) {
        if (item === item) {
            newList.push(item)
        }
    }

    return newList

}