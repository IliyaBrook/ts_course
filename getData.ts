// Напишите и типизируйте функцию,
// выполняющую запрос за данными по переданному URL.
// Выведите их в консоль в формате: "ID: id, Email: email".

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

type TUrl = `https://${string}` | `http://${string}`

interface IItemData {
    body: string;
    email: string;
    id: 1;
    name: string;
    postId: number
}

const getData = async (url: TUrl):Promise<IItemData[]> => {
    const response =  await fetch(url);
    return response.json();
}

getData(COMMENTS_URL)
    .then(data => {
        console.log(data)
    });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
