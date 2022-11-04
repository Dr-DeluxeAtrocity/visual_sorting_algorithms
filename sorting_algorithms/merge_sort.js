
export function mergeSort(array, animation){
    mergeSortHelper(array, animation)
}

function mergeSortHelper(array, animation){
    var arrayLength = array.length

    if(arrayLength <= 1) {return null}

    var middle = arrayLength / 2

    var leftArray = []
    var rightArray = []

    var r = 0
    for(let l = 0; l < arrayLength; l+=1){
        if(l < middle){
            leftArray[l] = array[l]
        }
        else{
            rightArray[r] = array[l]
            r += 1
        }
    }

    mergeSortHelper(leftArray, animation)
    mergeSortHelper(rightArray, animation)
    merge(leftArray, rightArray, array, animation)
}

function merge(leftArray, rightArray, array, animation){
    var l = 0
    var r = 0
    var i = 0
    

    while(l < leftArray.length && r < rightArray.length){
        if(leftArray[l] < rightArray[r]){
            array[i] = leftArray[l]
            l += 1
        }
        else{
            array[i] = rightArray[r]
            r += 1
        }
        i += 1
    }

    while(l < leftArray.length){
        array[i] = leftArray[l]
        l += 1
        i += 1
    }

    while(r < rightArray.length){
        array[i] = rightArray[r]
        r += 1
        i += 1
    }
}