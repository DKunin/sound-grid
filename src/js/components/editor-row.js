import yo from 'yo-yo';

module.exports = function singleRow({ name, sound, image, id }, index) {
    return yo`<tr data-id="${id}">
        <td data-label="index">${index}</td>
        <td data-label="name">${name}</td>
        <td data-label="image">${image}</td>
        <td data-label="sound">${sound}</td>
    </tr>`;
}