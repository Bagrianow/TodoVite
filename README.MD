# Notes

## Pobieranie danych - podczas montowania komponentu

1. Trzeba miec dostep do APi np. json server.
2. stworzyc funkcje pobierajaca dane fetch/axios
3. Stworzyc stan do ktorego zapiszemy dane
4. nalezy wywolac funcke w momencie kiedy komponent jest dodany do html (componentDidMount, useEffect)

// funkcja do pobierania danych z okreslonego adresu url, async zawsze zwraca Promise,
wiec musimy go obsluzyc jak promise czli then/catch badz await w ansync function

```
async function getAllTasks() {
    const response = await fetch(`http://localhost:3000/tasks`);
    return response.json();
  }
```

Aby stworzyc stan komponentu funckyjnego nalezy uzyc useState lub useRedrucer, oba trzeba importowac
ueseState przyjmuje uinitial state, czyli wartosc poczatkowa, jezeli to imput tonajczesciej pusty string
jezeli to wiele danych to prawdopodobmnie bedzie to pusta tablica. useSatte zwraca tablice 2elementowa,
dlatego ja destrukturyzujemy, pierwszy element to zmienna reprezentujaca stan, a druga to funcja, ktora modyfikuje
zmienna reprezentujaca stan.

import {useState} from 'react';
const [task, setTask] = useState([])

Aby wykonac funcke podczas montowania komponentu, mozna uzyc useEffect z drugim parametrem, ktory musi byc tablica, natomiast jezeli to ma sie wykonac raz, to tablica musi byc pusta

- brak drugiego parametru, lub false value - . wykonuje sie przy kazdym renderze kompone3nta
- pusta tablica -> wykonuje sie po dodaniu komponentu do html
- tablica z zalezonoscami(zmiennymi) wykonuje sie na poczatku i przy kazdej zmianie wartosci z tablicy
  Wewnatrz callback do useEffect mamy wywolanie funcki, ktora pobuiiera dane, z wzwiazku z tym ze jest asyncchroniczna (promise based) to obslugujemy ja prez then/catch

import {useEffect} from 'react';

````
useEffect(() =>{
    getAllTasks()
       .then((data) => setTasks(data))
       .catch(console.error)
})```
````

57minuta
