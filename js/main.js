const bookIdInput = document.getElementById("book-id-input");
const addBtn = document.querySelector(".add-btn");
const bookList = document.querySelector(".book-list");
// ====================================================

function addNewBook() {
  if (bookIdInput.value !== "") {
    const listItemBook = document.createElement("li");
    listItemBook.classList.add("list-item-book");
    listItemBook.textContent = bookIdInput.value.trim();
    const deleteBtn = document.createElement("img");
    listItemBook.appendChild(deleteBtn);
    deleteBtn.src = "images/delete.svg";
    deleteBtn.alt = "delete image";
    bookList.append(listItemBook);
    bookIdInput.value = "";
    bookIdInput.focus();

    deleteBtn.addEventListener("click", () => {
      bookList.removeChild(listItemBook);
    });
  }
}
bookIdInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addNewBook();
  }
});
addBtn.addEventListener("click", () => {
  addNewBook();
});
const findBookInput = document.getElementById("find-book-input");
findBookInput.addEventListener("input", () => {
  const filterValue = findBookInput.value.toLowerCase();
  if (bookList.hasChildNodes) {
    Array.from(bookList.children).forEach((item) => {
      const text = item.textContent.toLocaleLowerCase().trim();
      item.style.display = text.includes(filterValue) ? "flex" : "none";
    });
  }
});
