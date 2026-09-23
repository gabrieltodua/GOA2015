function One_plus() {
  function add() {
    let p = document.getElementById("p");
    p.innerHTML = Number(p.innerHTML) + 1;
  }

  return (
    <>
      <p id="p">0</p>
      <button onClick={add}>+1</button>
    </>
  );
}

export default One_plus;