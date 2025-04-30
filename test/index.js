let getTodosFromJSONPlaceholder = () => {
    try {
        console.log("начало запроса")
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/10')

        if (!response.ok) console.log('ошибка')
        
        let data = await response.json()
console.logo("наши данные:", data)
    } catch (error) {
        console.log("возникла ошибка при запросе", error)
    } finally {
        console.log("запрос завершился")
    }

}

getTodosFromJSONPlaceholder()

//fetch('https://jsonplaceholder.typicode.com/todos/10')
  //  .then(response => response.json())
    //  .then(json => console.log(json))

//fetch('https://jsonplaceholder.typicode.com/posts', {
 //   method: 'POST',
  //  body: JSON.stringify({
   //   title: 'мой пост',
    //  body: 'человек',
    //  userId: 14,
    //}),
 //   headers: {
   //   'Content-type': 'application/json; charset=UTF-8',
  //  },
 // })
   // .then((response) => response.json())
   // .then((json) => console.log(json))
   // .catch((error) => console.log("ошибка запроса", error));

