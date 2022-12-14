export const shortener = text => {
    const splited = text.split(" ");
    return `${splited[0]} ${splited[1]}`;
}