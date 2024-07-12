import "./Categories.css";

// Кнопки выбора категории
function Categories(props) {
  return (
    <div className="categories">
      {props.categoriesStatus.map((category) => (
        <div
          key={category.key}
          className="category"
          onClick={() => props.chooseCategory(category.key)}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
}

export default Categories;
