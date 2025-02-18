console.log('Hello World!');
const historyButton = document.getElementById('history-button');

function showHistory() {
	historySection.style.display = 'block';
	displayTransactions();
	document.getElementById('myForm').scrollIntoView(100);
}


const form = document.getElementById('myForm');
				const nameInput = document.getElementById('name');
				const numberInput = document.getElementById('number');
				const telInput = document.getElementById('tel');
				
				form.addEventListener('submit', (e) => {
					e.preventDefault();
					const name = nameInput.value;
					const number = numberInput.value;
					const tel = telInput.value;
					const selectedBank = selectElement.value;
				
					// Create a new transaction object
	const transaction = {
			name,
			number,
			tel,
			bank: selectedBank,
			};
				
					// Add the transaction to the transactions array
		transactions.push(transaction);
				
					// Store the transactions array in local storage
					localStorage.setItem('transactions', JSON.stringify(transactions));
				
					// Display the transaction in the history section
					displayTransactions();
				
					// Redirect to next page
					window.location.href = 'pay.html';
				});
				
				
				//option
				
				const banks = [
  {
    name: "Access Bank",
    image: "/access (1).png"
  },
  {
    name: "Ecobank ",
    image: "/ ecobank.jpeg"
  },
  {
    name: "First Bank",
    image: "/first-bank.png"
  },
  {
    name: "Guaranty Trust Bank",
    image: "/guarantee.png"
  },
  {
    name: "Union Bank",
    image: "/Union.jpeg"
  },
  {
    name: "Uba",
    image: "/Uba.jpeg"
  },
  {
    name: "Zenith Bank",
    image: "zenith-bank-logo.png"
  },
  {
    name: "Fidelity Bank",
    image: "fidelity-bank-logo.png"
  },
  {
    name: "First City Monument Bank",
    image: "first-city-monument-bank-logo.png"
  },
  {
    name: "Heritage Bank",
    image: "heritage-bank-logo.png"
  },
  {
    name: "Keystone Bank",
    image: "keystone-bank-logo.png"
  },
  {
    name: "Moniepoint",
    image: "money.png"
  },
  {
    name: "Stanbic IBTC Bank",
    image: "stanbic-ibtc-bank-logo.png"
  },
  {
    name: "Standard Chartered Bank",
    image: "standard-chartered-bank-logo.png"
  },
  {
    name: "Sterling Bank",
    image: "/Sterling.png"
  },
  {
    name: "Opay",
    image: "icon.png"
  },
  {
    name: "Wema Bank",
    image: "/Wema .jpeg"
  },
  {
  	name: "Palmpay", 
  	image: "/Palmpay.png"
  }
];

const selectElement = document.createElement("select");
selectElement.id = "bank";

const defaultOption = document.createElement("option");
defaultOption.value = "";
defaultOption.textContent = "Select Bank";
selectElement.appendChild(defaultOption);

banks.forEach((bank) => {
  const option = document.createElement("option");
  option.value = bank.name;
  option.textContent = bank.name;
  selectElement.appendChild(option);
});

const label = document.createElement("label");
label.textContent = "Select Bank:";
label.htmlFor = "bank";


const selectedBankDiv = document.createElement("div");
selectedBankDiv.id = "selected-bank";

const bankImage = document.createElement("img");
bankImage.id = "bank-image";

document.body.appendChild(label);
document.body.appendChild(selectElement);
document.body.appendChild(selectedBankDiv);
document.body.appendChild(bankImage);

selectElement.addEventListener("change", (e) => {
  const selectedBank = e.target.value;
  const selectedBankObject = banks.find((bank) => bank.name === selectedBank);
  selectedBankDiv.textContent = `You selected: ${selectedBank}`;
  bankImage.src = selectedBankObject.image;
  bankImage.alt = selectedBank;
});

// On the first page
selectElement.addEventListener("change", (e) => {
	const selectedBank = e.target.value;
	const selectedBankObject = banks.find((bank) => bank.name === selectedBank);
	localStorage.setItem("selectedBank", selectedBank);
	localStorage.setItem("selectedBankImage", selectedBankObject.image);
});



const historySection = document.getElementById('history-section');
const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// Display transactions when the page loads
displayTransactions();

// Function to display transactions in the history section
function displayTransactions() {
	historySection.innerHTML = '';
	transactions.forEach((transaction, index) => {
		const history = document.createElement('div');
		history.id = "hist";
		const transactionElement = document.createElement('div');
		transactionElement.id = "p";
		transactionElement.textContent = `Transaction ${index + 1}: ${transaction.name} - ${transaction.bank}`;
		transactionElement.addEventListener('click', () => {
			// Fill in the form with the transaction's information
			nameInput.value = transaction.name;
			numberInput.value = transaction.number;
			telInput.value = transaction.tel;
			selectElement.value = transaction.bank;
			
			// Update the image source
			const bankImage = document.getElementById('bank-image');
			bankImage.src = transaction.bankImage;
			bankImage.alt = transaction.bank;
			historySection.style.display = 'none';
			
		});
		historySection.appendChild(history);
	});
}


// Display transactions when the page loads
document.addEventListener('DOMContentLoaded', displayTransactions);