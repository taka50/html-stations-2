function displayList() {
  const fruits_wrapper = document.getElementById("fruits");
  const fruits_children = fruits_wrapper.children;

  // console.log(fruits_children);

  let fruits_name_list = [];
  for (const child of fruits_children) {
    fruits_name_list.push(child.innerText);
  }

  fruits_wrapper.innerHTML = "<ul></ul>";
  fruits_ul = fruits_wrapper.children[0];

  for (const name of fruits_name_list) {
    fruits_ul.insertAdjacentHTML("beforeend", "<li>" + name + "</li>");
  }
}
