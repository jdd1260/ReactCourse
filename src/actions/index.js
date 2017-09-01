export function selectBook(book) {
    //selectBook is an Action Creator. It needs to return an object with a type and payload
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}