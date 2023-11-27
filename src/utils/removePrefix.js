const removePrefix = (string) => {
    const fil_1 = string.replace('Thành phố', '');
    const fil_2 = fil_1.replace('Quận', '');
    const fil_3 = fil_2.replace('Huyện', '');
    return fil_3.replace('Tỉnh', ''); 
}

export default removePrefix