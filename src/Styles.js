/*
Создайте функции:
   hasClass(elem, elemСlass),
   addClass(elem, elemСlass),
   removeClass(elem, elemСlass),
   toggleClass(elem, elemСlass),
которые позволяют проверить, есть ли у элемента заданный CSS-класс, добавить к нему CSS-класс, удалить CSS-класс и переключить CSS-класс.

В функции передаются 2 параметра:
   elem - DOM-элемент, который проверяется,
   elemСlass - название класса, которое проверяется.
*/

export function hasClass(elem, elemClass) {
    if (elem.classList) {
        return elem.classList.contains(elemClass);
    } else {
        var classes = elem.className.split(' ');
        return classes.indexOf(elemClass) > -1;
    }
}

export function addClass(elem, elemClass) {
    if (!hasClass(elem, elemClass)) {
        if (elem.classList) {
            elem.classList.add(elemClass);
        } else {
            elem.className += ' ' + elemClass;
        }
    }
}

export function removeClass(elem, elemClass) {
    if (hasClass(elem, elemClass)) {
        if (elem.classList) {
            elem.classList.remove(elemClass);
        } else {
            var classes = elem.className.split(' ');
            classes.splice(classes.indexOf(elemClass), 1);
            elem.className = classes.join(' ');
        }
    }
}

export function toggleClass(elem, elemClass) {
    if (hasClass(elem, elemClass)) {
        removeClass(elem, elemClass);
    } else {
        addClass(elem, elemClass);
    }
}
