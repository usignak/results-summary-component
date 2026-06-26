fetch("./data.json")
  .then(response => response.json())
  .then(data => {
    const summaryList = document.getElementById("summary-list");

    data.forEach(item => {
      const row = document.createElement("tr");

      row.classList.add("summary-list__item");
      row.classList.add(item.category.toLowerCase());

      row.innerHTML = `
        <th scope="row">
          <img src="${item.icon}" alt="" />
          <span>${item.category}</span>
        </th>

        <td>
          <strong>${item.score}</strong> <span>/ 100</span>
        </td>        
      `
      summaryList.appendChild(row);
    })
  })
.catch(error => console.error(error));