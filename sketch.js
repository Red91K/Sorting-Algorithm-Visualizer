let ar = [];
let i = 0
let j = 0
let sortmethod = ""

function setup() {
  createCanvas(windowWidth,windowHeight);
  values = new Array(width);
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height)
  }
  sortmethod = prompt("What method would you like?")
}

function draw() {
  background(0,0,0);
  if (sortmethod == "Bubble" || sortmethod == "BubbleSort") {
    BubbleSort()
  }
  else if (sortmethod == "Insert" || sortmethod == "InsertionSort")  {
    InsertionSort()
  }
  else if (sortmethod == "Select" || sortmethod == "SelectionSort")  {
    SelectionSort()
  }
  else  {
    return
  }
  i++;
  display(i,j)
  document.addEventListener('keyup', event => {
    if (event.code !== 'Space' || event.code !== " ") {
      //sortmethod = prompt("What method would you like?")
      for (let i = 0; i < values.length; i++) {
        values[i] = random(height)
      }
      i = 0
      j = 0
    }
  })
}

function display(i,j)  {
  for (let a = 0; a <= values.length;a++)  {
    if (a == i) {
      stroke(255,0,0)
    }
    if (a == j) {
      stroke(0,255,0)
    }
    else  {
      stroke(255);
    }
    line(a,height,a,height-values[a])
  }
}

function BubbleSort() {
  if (i < values.length)  {
    for (let j = 0; j < values.length - i - 1; j++) {
      let a = values[j];
      let b = values[j+1];
      if (a > b)  {
        swap(values,j,j+1);
      }
    }
  }
  else  {
    console.log("Finished");
    sortmethod = prompt("What method would you like?")
    for (let i = 0; i < values.length; i++) {
      values[i] = random(height)
    }
    i = 0
    j = 0
  }
}

function InsertionSort()  {
  if (i < values.length)  {
    key_item = values[i]
    j = i - 1
    while (j >= 0 && values[j] > key_item) {
      values[j + 1] = values[j]
      j -= 1
    }
    values[j + 1] = key_item
  }
  else  {
    console.log("Finished");
    sortmethod = prompt("What method would you like?")
    for (let i = 0; i < values.length; i++) {
      values[i] = random(height)
    }
    i = 0
    j = 0
  }
}

function SelectionSort()  {
  if (i < values.length)  {
    cnt = i
    for (let j = i+1; j < values.length; j++) {
      if(values[cnt] > values[j]) {
        cnt = j
      }
    }
    swap(values,i,cnt)
  }
  else  {
    console.log("Finished");
    sortmethod = prompt("What method would you like?")
    for (let i = 0; i < values.length; i++) {
      values[i] = random(height)
    }
    i = 0
    j = 0
  }
}

function swap(arr,a,b)  {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}