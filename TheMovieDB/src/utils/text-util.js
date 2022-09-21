



export const MaxChars = (text) => {    
    return text.length > 150 ? text.substring(0, 150) + '...' : text;
}