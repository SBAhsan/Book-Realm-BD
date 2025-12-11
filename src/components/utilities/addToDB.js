const getStoredBook = () => {

    const getStoredBookString = localStorage.getItem("read list");

    if(getStoredBookString){
        const storedBookArray = JSON.parse(getStoredBookString);
        return storedBookArray;
    }else{
        return [];
    }
}

const addToDB = id => {

    const storedBookId = getStoredBook();

    if(storedBookId.includes(id)){
        alert('This book is already in the list.');
    }else{
        storedBookId.push(id);
        const storedIdString = JSON.stringify(storedBookId);
        localStorage.setItem("read list", storedIdString);
    }
}

export {addToDB};