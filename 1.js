const temp = Number.parseFloat(prompt('Введите температуру в градусах Цельсия:'));

function CelsInFar(x) {
    return (9 / 5) * x + 32;
}

alert(`Цельсий: ${temp}, Фаренгейт: ${CelsInFar(temp).toFixed(1)}.`);