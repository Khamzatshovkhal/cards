
document.getElementById('expiry-date').addEventListener('input', function (e) {
    let input = e.target;
    let value = input.value.replace(/\D/g, ''); 
    let newValue = '';
    for (let i = 0; i < value.length; i++) {
        if (i === 2 && value.length > 2) {
            newValue += '/';
        }
        newValue += value[i];
    }
    input.value = newValue.slice(0, 5); 
});

document.getElementById('card-number').addEventListener('input', function (e) {
    let target = e.target;
    let position = target.selectionEnd;
    let length = target.value.length;
    
    // Удаляем все, кроме цифр
    let sanitizedValue = target.value.replace(/\D/g, '');
    
    // Разбиваем номер карты на группы по четыре цифры
    let formattedValue = sanitizedValue.match(/.{1,4}/g);
    
    // Объединяем группы цифр через пробел
    if (formattedValue) {
        formattedValue = formattedValue.join(' ');
    }
    
    // Обновляем значение в поле ввода
    target.value = formattedValue || '';
    
    // Корректируем позицию курсора после добавления пробелов
    let addedSpaces = (target.value.match(/\s/g) || []).length;
    let newPosition = position + (addedSpaces - (length - sanitizedValue.length));
    target.setSelectionRange(newPosition, newPosition);
});

document.querySelector('.card-number').oninput = () =>{
    document.querySelector('.card-number-div').innerHTML = document.querySelector('.card-number').value;
}
console.log();

document.querySelector('.card-holder').oninput = () =>{
    document.querySelector('.card-holder-div').innerHTML = document.querySelector('.card-holder').value;
}
console.log();

document.querySelector('.expiry-date').oninput = () =>{
    document.querySelector('.expiry-date-div').innerHTML = document.querySelector('.expiry-date').value;
}
console.log();

document.querySelector('.card-cvv').oninput = () =>{
    document.querySelector('.card-cvv-div').innerHTML = document.querySelector('.card-cvv').value;
}
console.log();