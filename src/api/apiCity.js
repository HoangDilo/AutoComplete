export const search = async (value) => {
    const response = await fetch('https://provinces.open-api.vn/api/d/search/?q=' + value);
    const data = await response.json();
    return data.slice(0, 3);
}