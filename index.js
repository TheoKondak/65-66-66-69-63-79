const oppoStatus = [
  {
    K_OPPO_STATUS: 1,
    STATUS: '1. Initial Contact',
    SUCCESS: 0,
  },
  {
    K_OPPO_STATUS: 2,
    STATUS: '2. Demonstration',
    SUCCESS: 25,
  },
  {
    K_OPPO_STATUS: 3,
    STATUS: '3. Proposal',
    SUCCESS: 50,
  },
  {
    K_OPPO_STATUS: 4,
    STATUS: '4. Negotiation',
    SUCCESS: 75,
  },
  {
    K_OPPO_STATUS: 5,
    STATUS: '5. Order',
    SUCCESS: 100,
  },
];

const FormComponent = class {
  // Even though it is not a requirement, I am using constructor to make the FormComponent more flexible.

  // Creating a new FormComponent will ADD options to the specific form. It will not create a new form. That means, that if you call the `.start()` method multiple times and some of the status arrays contain duplicate entries, these entries will be displayed as duplicates to the form.
  constructor(
    // Setting an default status object
    status = [
      {
        K_OPPO_STATUS: 1,
        STATUS: '1. Initial Contact',
        SUCCESS: 0,
      },
      {
        K_OPPO_STATUS: 2,
        STATUS: '2. Demonstration',
        SUCCESS: 25,
      },
      {
        K_OPPO_STATUS: 3,
        STATUS: '3. Proposal',
        SUCCESS: 50,
      },
      {
        K_OPPO_STATUS: 4,
        STATUS: '4. Negotiation',
        SUCCESS: 75,
      },
      {
        K_OPPO_STATUS: 5,
        STATUS: '5. Order',
        SUCCESS: 100,
      },
    ]
  ) {
    this.statusOptions = status;
  }

  #handleSelectChange = (e) => {
    const inputElement = document.querySelector('input[name="success"]');

    const regex = /^\d+$/;

    // Find the status in `status`.
    const selectedStatus = regex.test(e.target.value) ? this.statusOptions.find((status) => status.K_OPPO_STATUS === parseInt(e.target.value, 10)) : console.error(`K_OPPO_STATUS must be a number, and not a character, or special character. Instead received: ${e.target.value}`);
    // Update input element value
    inputElement.value = selectedStatus.SUCCESS;
  };

  #handleSubmitForm = (e) => {
    // Prevent the default behavior of the form, which reloads the page.
    e.preventDefault();

    const outputElement = document.querySelector('.output');

    // Update the inner HTML of the `.output` element. Since we receive an array of data with fixed size, I am using indexing to pull the data.
    outputElement.innerHTML = `{ "status": ${e.target[0].value}, "success": ${e.target[1].value} }`;
  };

  start() {
    // Select the elements
    const formElement = document.querySelector('form');
    const selectElement = document.querySelector('select[name="status"]');

    if (!formElement || !selectElement) {
      const p = document.createElement('p');
      const errorNode = document.createTextNode(`Some error occurred. Either formElement, or selectElement not found`);
      p.appendChild(errorNode);
      document.body.appendChild(p);
      throw new Error('Either formElement or selectElement not found');
    }

    // Assign the options from `statusOptions`
    this.statusOptions.forEach((status) => {
      // For each option create a new option HTML tag
      const optionElement = document.createElement('option');

      optionElement.value = status.K_OPPO_STATUS; // Set option element value
      optionElement.textContent = status.STATUS; // Set option element content
      selectElement.appendChild(optionElement); // Append select option element to the dom
    });

    // Add event listener to update status field on change
    selectElement.addEventListener('change', (e) => this.#handleSelectChange(e));

    // Handle form submission
    formElement.addEventListener('submit', (e) => this.#handleSubmitForm(e));
  }
};

const fc = new FormComponent();
fc.start();
