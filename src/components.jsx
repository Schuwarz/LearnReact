export default function Хуй(str) {
  str = prompt('','')
  return <div>{str}</div>
}

export default function List() {
  const chemists = people.filter((person) => person.profession === "химик");

  const others = people.filter((person) => person.profession !== "химик");

  const listItems = chemists.concat(others).map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession}. Достижение: {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <article>
      <h1>Ученые</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

export default function RecipeList() {
  const itemList = recipes.map((item) => (
    <ul>
      <h2>{item.name}</h2>
      <ul>{item.ingredients.map((item) => <li>{item}</li>)}</ul>
    </ul>
  ));

  return (
    <div>
      <h1>Рецепты</h1>
      {itemList}
    </div>
  );
}