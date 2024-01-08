let insert = document.getElementById("insert")

window.addEventListener("keydown", (e)=>{
    insert.innerHTML = `<div class="project">
    <table style="width:50%">
  <tr>
    <th>key</th>
    <th>ketCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>

</table>
<div>
    `
})