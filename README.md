# efficyTechAssignment

## Specifications

### 1 Introduction

We would like to evaluate your Web development knowledge with this online test. JavaScript is the leading language for front-end coding of Web Applications, but it's also used to customize the back-end of Efficy CRM. Try to complete this front-end JavaScript challenge and show us your ability to deliver a working and elegant solution, while respecting the given boundaries and requirements.

You can use JS Fiddle to get a jump start, but you can as well develop it inside your favorite Code Editor.

### 1.1 The Opportunity form

The immutable HTML of the page:

```HTML
<!-- Page says "Don't touch my body" -->
<body>
<form>
  <select name="status"></select>
  <input name="success" type="number" min=0 max=100 step=1 value="0">
  <button type="submit">Submit</button>
</form>
<div class="output">Waiting for form submit...</div>
</body>
```

Without any CSS layout, it looks like this when opened in a Browser

![blank-form](https://user-images.githubusercontent.com/25774466/234848047-9e89a452-9b75-44c1-8997-46b2d428d38b.png)



Your JavaScript starting skeleton, including the Opportunity status data:

```js

const oppoStatus = [
  {
    "K_OPPO_STATUS": 1,
    "STATUS": "1. Initial Contact",
    "SUCCESS": 0
  },
  {
    "K_OPPO_STATUS": 2,
    "STATUS": "2. Demonstration",
    "SUCCESS": 25
  },
  {
    "K_OPPO_STATUS": 3,
    "STATUS": "3. Proposal",
    "SUCCESS": 50
  },
  {
    "K_OPPO_STATUS": 4,
    "STATUS": "4. Negotiation",
    "SUCCESS": 75
  },
  {
    "K_OPPO_STATUS": 5,
    "STATUS": "5. Order",
    "SUCCESS": 100
  }
];

const FormComponent = class {
  constructor() {

  }
  start() {
    // Start modifying the form elements here!
    // You are allowed to add extra methods, properties or change the constructor of this class
  }
}

const fc = new FormComponent();
fc.start();
```

### 1.2 Functional requirements

#### Page dynamics

- Load the `<select>` options with the contents of the global oppoStatus array.
- When status is changed, set the associated value of success (e.g. status 4 sets success=75)
- On form submit, output the form element values as JSON string. We want to see the values, not the text. `{"status":3,"success":50}`


#### Basic styling

- Right align the success value
- Display the Submit button in it's own box. Add some spacing around the element.
- Set a mono-space font on the output `<div>` so we have a better view on the generated JSON output.

How it should look (more or less) with styles applied and when the form is submitted:

![output](https://user-images.githubusercontent.com/25774466/234848143-e4456993-4c6a-4853-aadd-1f32a3b9d51d.png)

### 1.3 The rules of the game

- This is a personal test, don't share this page with friends or online
- You cannot modify the HTML source
- Use CSS, SCSS or Sass for styling, no JS
- Use only pure JS, external frameworks or libraries (e.g. jQuery) are not allowed.
- You don't have to support retired browsers, ECMA 2019 is allowed!

### 1.4 What we appreciate

Just like you, we appreciate clean and readable code. We aim for quality and maintainability!
Show us how well you can follow given instructions, have attention to details and how strong and up to date your JS skills are.

### 2 Submit your code

Provide us the link to your JS Fiddle, GitHub or any other online location where we can download your source(s).

Another possibility is including your code in an e-mail... but be warned, our e-mail security software does not like .js extensions, even if they are included in a compressed archive. So, either change the extension of ".js" to ".js.txt" or copy & paste the code in the email body.

Thank you for your time and talents.

Regards,
The Efficy Technical Architects team!

Source: https://help.efficy.io/edn/projectguides/newEmployeeTest_efd7f872
