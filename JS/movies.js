function sortTableByVotes(sortBy) {
    var tbody = document.querySelector("table tbody");
    
    var rows = [].slice.call(tbody.querySelectorAll("tr"));

    rows.sort(function (a, b) {
      if (sortBy == "asc")
        return a.cells[2].innerHTML - b.cells[2].innerHTML;

      return b.cells[2].innerHTML - a.cells[2].innerHTML;
    });

    rows.forEach(function (v) {
      tbody.appendChild(v);
    });
  }