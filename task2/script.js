'use strict'
//1. Выведите в консоль количество символов в тексте.
const str = document.getElementById('str').innerText;
console.log(str.length);
const strLengthContainer = document.getElementById('str-length');
strLengthContainer.textContent = str.length;

//2. Добавьте перенос строки после каждого символа `;` и сохраните результат в переменную `result`.
const result = str.replace(/;/g, ';\n');
console.log(result);
const resultContainer = document.getElementById('result');
resultContainer.innerText = result;

//3. Удалите все пробелы в переменной `result` и сохраните результат в переменную `substring`.
const substring = result.replace(/\s/g, '');
console.log(substring);
const substringContainer = document.getElementById('substring');
substringContainer.innerText = substring;

//4. Извлеките подстроку из переменной `result`, начиная с 28-го символа и до 50-го символа (не включая), из текста и сохраните в переменную `newText`.
const newText = result.slice(27, 49); //у 28 символа - индекс 27, у 50 символа - индекс 49
console.log(newText);
const newTextContainer = document.getElementById('new-text');
newTextContainer.innerText = newText;

//5. Замените в извлеченной подстроке (`newText`) все вхождения слова `клён` на `дубе` и сохраните результат в переменную `replacedText`.
const replacedText = newText.replace(/клён/g, 'дубе');
console.log(replacedText);
const replacedTextContainer = document.getElementById('replaced-text');
replacedTextContainer.innerText = replacedText;

//6. Приведите текст в переменной `result` к верхнему регистру и сохраните результат в переменную `replacedText2`.
const replacedText2 = result.toUpperCase();
console.log(replacedText2);
const replacedText2Container = document.getElementById('replaced-text2');
replacedText2Container.innerText = replacedText2;

//7. Замените все вхождения слова `клён` на `дуб` в переменной `result` и сохраните результат в переменную `replacedText3`.
const replacedText3 = result.replace(/клён/ig, 'дуб');
console.log(replacedText3);
const replacedText3Container = document.getElementById('replaced-text3');
replacedText3Container.innerText = replacedText3;

//8. Найдите индекс первого вхождения слова `моря` в тексте и сохраните в переменную `index`.
const index = str.indexOf('моря');
console.log(index);
const indexContainer = document.getElementById('index');
indexContainer.innerText = index;

//9. Измените только первую букву в переменной `replacedText` на заглавную без использования регулярных выражений и сохраните результат в переменную `modifiedText`.
const modifiedText = replacedText[0].toUpperCase() + replacedText.slice(1);
console.log(modifiedText);
const modifiedTextContainer = document.getElementById('modified-text');
modifiedTextContainer.innerText = modifiedText;

//10. Выведите значения всех полученных переменных на экран.