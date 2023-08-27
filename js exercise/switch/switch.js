let menu = parseInt(
    prompt(
      "e.g.."
    )
  );
  let menu1 = parseInt(
    prompt(
        "1. Add"
    )
  );
  let menu2= parseInt(
    prompt(
      " 2. Subtract"
    )
  );
  let menu3= parseInt(
    prompt(
      ", 3.Multiply"
    )
  );
  let menu4= parseInt(
    prompt(
      "4. Divide"
    )
  );
  switch(menu) {
    case 1:
      alert("add");
    //   document.write('add')
      break;
    case 2:
      alert("Subtract");
      break;
    case 3:
      alert("Multiply");
      break;
    case 4:
      alert(" Divide");
      break;
    default:
      alert("plz enter from 1 to 4");
  }