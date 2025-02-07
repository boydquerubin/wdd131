const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('list');




listElement.append(delBtn);
list.append(listElement);

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
  displayList(chapter);  
});

button.addEventListener('click', () => {
  if (input.value != '') {  // make sure the input is not empty
    displayList(input.value); // call the function that outputs the submitted chapter
    chaptersArray.push(input.value);  // add the chapter to the array
    setChapterList(); // update the localStorage with the new array
    input.value = ''; // clear the input
    input.focus(); // set the focus back to the input
  }
});

function displayList(item) {
  let listElement = document.createElement('li');
  let delBtn = document.createElement('button');
  li.textContent = item; // note the use of the displayList parameter 'item'
  delBtn.textContent = '❌';
  listElement.textContent = input.value;
  delBtn.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
  li.append(delBtn);
  list.append(li);
  delBtn.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
    input.focus(); // set the focus back to the input
  });
  console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('favchap'));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}