const insert = document.querySelector("#insert");

let data;
window.addEventListener("keydown", (e) => {
  // console.log(e);
  // data = `<table>`;
  // data += `<tr>
  //                     <th>Key Name</th>
  //                     <th>Code</th>
  //                     <th>Key</th>
  //                   </tr>`;

  // data += `
  //                   <tr>
  //                     <td>${e.key}</td>
  //                     <td>${e.keyCode}</td>
  //                     <td>${e.code}</td>
  //                   </tr> `;

  // data += `</table>`;

  // insert.innerHTML = data;

  insert.innerHTML = `
    <table>
      <tr>
        <th>Key</th>
        <th>Keycode</th>
        <th>Key Name</th>
      </tr>
      <tr>
        <td>${e.key === " " ? "Space" : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
    </table>
  `;
});
