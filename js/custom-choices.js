document.addEventListener("DOMContentLoaded", function() {
  function CreateCustomeChoices() {
    const selectFromDOM = document.querySelector('#select');
    const selectItemFromDOM = selectFromDOM.querySelectorAll('option');
    const mainContainer = document.querySelector('.broadcast__select-container');

    selectFromDOM.classList.add('none');
    const ItemOption = [];
    selectItemFromDOM.forEach(function(item) {
      console.log(item.textContent);
      ItemOption.push(item.textContent);
    })
    const choicesContainer = document.createElement('div');
    const choicesInner = document.createElement('div');
    const choicesValue = document.createElement('div');
    const choicesButton = document.createElement('div');
    const choicesDropList = document.createElement('ul');

    choicesContainer.classList.add('choices');
    choicesInner.classList.add('choices__inner');
    choicesValue.classList.add('choices__wrapper');
    choicesDropList.classList.add('choices__droplist', 'list-reset');
    ItemOption.forEach(function(i) {
      const item = document.createElement('li');
      item.textContent = i;
      item.classList.add('droplist__item');
      choicesDropList.append(item);
      item.addEventListener('click', () => {
        choicesDropList.forEach(function(t) {
          t.classList.remove('selected');
        })
        item.classList.add('selected');
      })
    })
    const selectedItem = choicesDropList.querySelector('.droplist__item');
    selectedItem.classList.add('selected');
    choicesValue.textContent = ItemOption[0];
    choicesInner.append(choicesValue, choicesButton);
    choicesContainer.append(choicesInner, choicesDropList);
    mainContainer.append(choicesContainer);

    choicesInner.addEventListener('click', () => {
      choicesContainer.classList.toggle('open');
      choicesDropList.classList.toggle('open');
    })
    // function selectItem() {
    //   document.querySelector('.choices__droplist')
    // }
    // selectItem();
  }
  CreateCustomeChoices();
});
