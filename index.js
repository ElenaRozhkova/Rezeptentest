import {rezept} from './utils/utils.js';
const searchForm= document.querySelector('.form__search');

const serchRezepts=(e)=>{
    e.preventDefault();
    const searchElement= searchForm.querySelector('.form__search-title');
    const resultSearchElements =rezept.filter((rezept)=>{
          return rezept.title.includes(searchElement.value);
    });

    //document.querySelector('.rezepts').style.display = 'none';
    document.querySelector('.rezepts').innerHTML = '';
    resultSearchElements.forEach((element)=>{
        addContext(element,'.rezepts');
    });
    searchElement.value='';
  }

  const addContext =(element,list)=>{
    const rezeptContent = document.querySelector('#rezept').content;
    const rezeptcollection = rezeptContent.querySelector('.rezept').cloneNode(true);
    rezeptcollection.querySelector('.rezept__title').textContent=element.title;
    rezeptcollection.querySelector('.rezept__img').src=element.image;
    rezeptcollection.querySelector('.rezept__ingredients').textContent=element.ingredients;
    rezeptcollection.querySelector('.rezept__text').textContent=element.text;
    document.querySelector(list).prepend(rezeptcollection);
    searchForm.addEventListener('submit', serchRezepts);
  }

rezept.forEach(element => {
    addContext(element,'.rezepts');
});

const addpopup=(()=>{
  document.querySelector('.form__add').style.display='flex';
})
const addPopup=document.querySelector('.form__add-submit');
addPopup.addEventListener('click', addpopup);


const addRezept=(e)=>{
  e.preventDefault();
  const addmyrezept={
    title:addForm.querySelector('.form__rezept-title').value,
    image :addForm.querySelector('.form__rezept-img').value,
    ingredients: addForm.querySelector('.form__rezept-ingredients').value,
    text : addForm.querySelector('.form__rezept-text').value

  }
  rezept.unshift({title:addmyrezept.title,image:addmyrezept.image,ingredients:addmyrezept.ingredients,text:addmyrezept.text});

  addContext(addmyrezept,'.rezepts');
  document.querySelector('.form__add').style.display = 'none';
}
const addForm=document.querySelector('.form__add');
addForm.addEventListener('submit', addRezept);





