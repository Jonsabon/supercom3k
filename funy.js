// Define the URLs for the fetch requests
const cobblestoneURL = "https://api.slothpixel.me/api/skyblock/bazaar/ENCHANTED_COBBLESTONE";
const redstoneBlockURL = "https://api.slothpixel.me/api/skyblock/bazaar/ENCHANTED_REDSTONE_BLOCK";
const superCompactorURL = "https://api.slothpixel.me/api/skyblock/bazaar/SUPER_COMPACTOR_3000";


// Fetch the buyPrice for ENCHANTED_COBBLESTONE
fetch(cobblestoneURL)
  .then(response => response.json())
  .then(data => {
    console.log("ENCHANTED_COBBLESTONE data:", data);
	        // Prompt user for a number
          const D = parseFloat(prompt("Enter in how many SC3K you would like to craft:", ""));
        console.log("D:", D);
    // Calculate the value of A
    const A = data.quick_status.buyPrice * 448;
    console.log("A:", A);
    //e
    const re = 448 * D
	fetch(superCompactorURL)
  .then(response => response.json())
  .then(data => {
    console.log("SUPER_COMPACTOR_3000 data:", data);
    // Calculate the value of G
    const Gr = data.quick_status.buyPrice * D;
    console.log("G:", Gr);

    // Fetch the buyPrice for ENCHANTED_REDSTONE_BLOCK
    fetch(redstoneBlockURL)
      .then(response => response.json())
      .then(data => {
        console.log("ENCHANTED_REDSTONE_BLOCK data:", data);
        // Calculate the value of B
        const B = data.quick_status.buyPrice;
        console.log("B:", B);
            //r
        const de = 1 * D
        // Add A and B together to get C
        const C = A + B;
        console.log("C:", C);
        // Calculate profit and display result
        const P = C * D;
        console.log("P:", P);
        // Calculate the difference between P and C
        const Pr = Gr - P;
        console.log("Pr:", Pr);
		//Rounds Pr by the ones place
		let num = Pr;
		let rPr = Math.round(num);
    let nP = rPr.toLocaleString("en-US");
    		//Rounds Pr by the ones place
		let nu = re;
		let rRe = Math.round(nu);
    let R = rRe.toLocaleString("en-US");
        		//Rounds Pr by the ones place
		let n = de;
		let rDe = Math.round(n);
    let Q = rDe.toLocaleString("en-US");
        // Display result to user
        const result = document.createElement("p");
        result.textContent = nP + " skyblock coins";
        document.body.appendChild(result);
        // Display result to user
        const enchcobthing = document.createElement("p");
        enchcobthing.textContent = "You would need " +  R  + " blocks of enchanted cobblestone,";
        document.body.appendChild(enchcobthing);
        // Display result to user
        const enchredthing = document.createElement("p");
       enchredthing.textContent = "and you would also need " +  Q + " blocks of enchanted redstone blocks.";
       document.body.appendChild(enchredthing);
	})
      })
      .catch(error => console.log(error));
  })
  .catch(error => console.log(error));
(error => console.log(error));
