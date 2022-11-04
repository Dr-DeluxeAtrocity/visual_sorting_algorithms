import {mergeSort} from "./sorting_algorithms/merge_sort.js"
import {bubbleSort} from "./sorting_algorithms/bubble_sort.js"
import {quickSort} from "./sorting_algorithms/quick_sort.js"
import {insertionSort} from "./sorting_algorithms/insertion_sort.js"
import { generateRandomNumber, resetArray, adjustArraySpacing, blockControlMenuAccessability, displayArrayToScreen } from "./util.js";

const arrayContainer = document.getElementById("array-container")
const rangeSlider = document.getElementById("rangeSlider")
const newArrayButton = document.getElementById("new-array-button")
const sortButton = document.getElementById("sort-button")

// Sorting Algorithms
const mergeSortButton = document.getElementById("merge-sort")
const quickSortButton = document.getElementById("quick-sort")
const insertionSortButton = document.getElementById("insertion-sort")
const bubbleSortButton = document.getElementById("bubble-sort")

// array configurations
let mainArray = []
const minNumberRange = 5
const maxNumberRange = 250
const maxArrayLength = 200
let arrayLength = rangeSlider.value
let currentSelectedAlgorithm = null

// animation
let animation = []


function doAnimation(){
    // currentSelectedAlgorithm(mainArray, animation)    
}

function appStart(){

    mainArray = resetArray(minNumberRange, maxNumberRange, mainArray, arrayLength, arrayContainer)
    adjustArraySpacing(maxArrayLength, arrayLength, minNumberRange, maxNumberRange)
    
    // generate new array
    newArrayButton.addEventListener('click', () =>{
    resetArray(minNumberRange, maxNumberRange, mainArray, arrayLength, arrayContainer)
    adjustArraySpacing(maxArrayLength, arrayLength, minNumberRange, maxNumberRange)
    })

    // range slider
    rangeSlider.oninput = () => {
    arrayLength = rangeSlider.value
    mainArray = resetArray(minNumberRange, maxNumberRange, mainArray, arrayLength, arrayContainer)
    adjustArraySpacing(maxArrayLength, arrayLength, minNumberRange, maxNumberRange)
    }

    // merge sort 
    mergeSortButton.addEventListener('click', () => {
    currentSelectedAlgorithm = mergeSort
    $(".control-texts").css('color', '#dbe9f0')
    $("#merge-sort").css('color', 'rgb(80, 225, 64)')
    if(sortButton.style.visibility == 'hidden'){
        sortButton.style.visibility = 'visible'        
    }
    })

    // quick sort
    quickSortButton.addEventListener('click', () => {
    currentSelectedAlgorithm = quickSort
    $(".control-texts").css('color', '#dbe9f0')
    $("#quick-sort").css('color', 'rgb(80, 225, 64)')
    if(sortButton.style.visibility == 'hidden'){
        sortButton.style.visibility = 'visible'
    }
    })

    // insertion sort
    insertionSortButton.addEventListener('click', () => {
    currentSelectedAlgorithm = insertionSort
    $(".control-texts").css('color', '#dbe9f0')
    $("#insertion-sort").css('color', 'rgb(80, 225, 64)')
    if(sortButton.style.visibility == 'hidden'){
        sortButton.style.visibility = 'visible'
    }
    })

    // bubble sort
    bubbleSortButton.addEventListener('click', () => {
    currentSelectedAlgorithm = bubbleSort
    $(".control-texts").css('color', '#dbe9f0')
    $("#bubble-sort").css('color', 'rgb(80, 225, 64)')
    if(sortButton.style.visibility == 'hidden'){
        sortButton.style.visibility = 'visible'
    }
    })

    // sort 
    sortButton.addEventListener('click', () => {
    blockControlMenuAccessability()
    doAnimation()
    })

}

appStart()


