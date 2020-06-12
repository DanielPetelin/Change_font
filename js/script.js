document.querySelector("#push").onclick = () => {
      let fonts = document.querySelector("#fonts").value;
      let text = document.querySelector(".container");

      if (fonts == "Arial") {
            text.style="font-family: Arial, Helvetica, sans-serif";
      } else if (fonts == "Monospace") {
            text.style="font-family: monospace";
      } else {
            text.style="font-family: 'Times New Roman', Times, serif";
      }
}