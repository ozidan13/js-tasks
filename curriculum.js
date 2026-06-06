(function () {
    const curriculum = {
        1: {
            title: "Introduction and Fundamentals",
            lessons: [
                "Introduction and What Is JavaScript (#001)",
                "How To Study The Course (#002)",
                "Setting Up Environment And Tools (#003)",
                "Work With Chrome Developer Tools (#004)",
                "Where To Put The Code (#005)",
                "Comments And Bad Practices (#006)",
                "Output To Screen (#007)",
                "Console Methods And Styling And WebAPI (#008)",
                "What Is ECMAScript (#009)",
                "Data Types And Typeof Operator (#010)",
                "Variables Introduction (#011)",
                "Identifiers Name Conventions And Rules (#012)",
                "Var, Let, Const Compare (#013)",
                "String Syntax And Character Escape Sequences (#014)",
                "Concatenation (#015)",
                "Template Literals Template Strings (#016)",
                "Variable And Concatenation Challenge (#017)"
            ],
            brief: [
                "Create a simple web page with a form containing three fields: user name, age, and favorite hobby.",
                "When the user clicks \"Show Message\", display a personalized message in an h1 element on the page, not as an alert.",
                "Add CSS styling to the message, such as font color, size, and background."
            ]
        },
        2: {
            title: "Operators and String Methods",
            lessons: [
                "Arithmetic Operators (#018)",
                "Unary Plus And Negation Operators (#019)",
                "Type Coercion (#020)",
                "Assignment Operators (#021)",
                "Operators Challenges (#022)",
                "Number (#023)",
                "Number Methods (#024)",
                "Math Object (#025)",
                "Number Challenge (#026)",
                "String Methods Part 1 (#027)",
                "String Methods Part 2 (#028)",
                "String Methods Part 3 (#029)",
                "String Challenge (#030)"
            ],
            brief: [
                "Develop a calculator app with a form where the user inputs two numbers.",
                "Include Add, Subtract, Multiply, and Divide buttons.",
                "Display the result dynamically on the page.",
                "Use the Math object to handle calculations and round results if needed.",
                "If the user enters invalid data, display: \"Please enter valid numbers.\""
            ]
        },
        3: {
            title: "Conditional Logic and Comparisons",
            lessons: [
                "Comparison Operators (#031)",
                "Logical Operators (#032)",
                "If Conditions (#033)",
                "Nested If Condition (#034)",
                "Conditional Ternary Operator (#035)",
                "Nullish Coalescing Operator And Logical OR (#036)",
                "If Condition Challenge (#037)",
                "Switch Statement (#038)",
                "Switch And If Condition Challenge (#039)"
            ],
            brief: [
                "Build a weekday planner that asks the user to input a day of the week.",
                "For Friday, show: \"It's Friday, have a blessed day!\"",
                "For Saturday or Sunday, show: \"Weekend vibes! Start your week fresh.\"",
                "For other days, display a unique message for that day.",
                "Use a switch statement to handle the logic."
            ]
        },
        4: {
            title: "Arrays and Data Management",
            lessons: [
                "Array Big Introduction (#040)",
                "Using Length With Array (#041)",
                "Add And Remove From Array (#042)",
                "Searching Array (#043)",
                "Sorting Array (#044)",
                "Slicing Array (#045)",
                "Joining Arrays (#046)",
                "Array Challenge (#047)"
            ],
            brief: [
                "Create a To-Do List application.",
                "Allow users to add tasks to a list and display them in an organized way.",
                "Add functionality to delete a specific task from the underlying array.",
                "Include buttons to sort tasks alphabetically and reset them to their original order.",
                "Use array methods like push, splice, and sort."
            ]
        },
        5: {
            title: "Loops and Iterations",
            lessons: [
                "Loop - For and The Concept Of Loop (#048)",
                "Loop On Sequences (#049)",
                "Nested Loops And Trainings (#050)",
                "Loop Control - Break, Continue, Label (#051)",
                "Loop For - Advanced Example (#052)",
                "Practice - Add Products To Page (#053)",
                "Loop - While (#054)",
                "Loop - Do, While (#055)",
                "Loop Challenge (#056)"
            ],
            brief: [
                "Develop a Product Display system.",
                "Display a list of products with name and price dynamically on the web page using a loop.",
                "Include filter options for products below a certain price.",
                "Include filter options for products that start with a specific letter.",
                "Use DOM manipulation to dynamically update the product list."
            ]
        },
        6: {
            title: "Functions and Reusability",
            lessons: [
                "Function Intro And Basic Usage (#057)",
                "Function Advanced Examples (#058)",
                "Function Return Statement And Use Cases (#059)",
                "Function Default Parameters (#060)",
                "Function Rest Parameters (#061)",
                "Function Ultimate Practice (#062)",
                "Random Arguments Function Challenge (#063)",
                "Anonymous Function and Use Cases (#064)",
                "Return Nested Function (#065)"
            ],
            brief: [
                "Create a Product Pricing Tool.",
                "Build a function calculateTotal that takes multiple product prices as arguments and returns the total after adding 14% tax.",
                "Create another function to display: \"Product: [Product Name], Final Price: [Price with Tax].\"",
                "Use Rest Parameters to handle variable arguments."
            ]
        },
        7: {
            title: "Higher-Order Functions and Scope",
            lessons: [
                "Arrow Function Syntax (#066)",
                "Scope - Global And Local (#067)",
                "Scope - Block (#068)",
                "Scope - Lexical (Static) (#069)",
                "Arrow Function Challenge (#070)",
                "Higher Order Functions - Map (#071)",
                "Higher Order Functions - Map Practice (#072)",
                "Higher Order Functions - Filter (#073)",
                "Higher Order Functions - Filter Practice (#074)"
            ],
            brief: [
                "Develop a Product Filtering System.",
                "Create an array of products where each product has name, price, and category.",
                "Use map to add a finalPrice property with price + 14% tax.",
                "Use filter to extract products with a final price above a chosen value.",
                "Display the results dynamically on the web page."
            ]
        },
        8: {
            title: "Advanced Higher-Order Functions and Objects",
            lessons: [
                "Higher Order Functions - Reduce (#075)",
                "Higher Order Functions - Reduce Practice (#076)",
                "Higher Order Functions - ForEach And Practice (#077)",
                "Higher Order Functions - Challenge (#078)",
                "Object - Introduction (#079)",
                "Dot Notation vs Bracket Notation (#080)",
                "Nested Object And Advanced Examples (#081)",
                "Create Object With New Keyword (#082)"
            ],
            brief: [
                "Create a Library System.",
                "Design an object representing a library with sections for books.",
                "Each section should contain books with title, author, and pages.",
                "Use reduce to calculate the total number of pages in the library.",
                "Use forEach to display all books and authors dynamically.",
                "Allow users to add new sections or books via a form."
            ]
        },
        9: {
            title: "DOM Basics and Dynamic Content",
            lessons: [
                "This Keyword (#083)",
                "Create Object With Create Method (#084)",
                "Create Object With Assign Method (#085)",
                "What Is DOM? And Select Elements (#086)",
                "Get, Set Elements Content And Attributes (#087)",
                "Check Attributes And Examples (#088)",
                "Create And Append Elements (#089)",
                "Product With Title And Description Practice (#090)"
            ],
            brief: [
                "Develop a Product List Page.",
                "Create a dynamic product list where each product is an object with name, price, and description.",
                "Use DOM methods like createElement and appendChild to add products to the page.",
                "Add buttons for each product to allow deletion or modification.",
                "Use the this keyword in functions to handle product-specific actions efficiently."
            ]
        },
        10: {
            title: "Advanced DOM Manipulation",
            lessons: [
                "Deal With Children (#091)",
                "DOM Events (#092)",
                "Validate Form And Prevent Default (#093)",
                "Event Simulation - Click, Focus, Blur (#094)",
                "ClassList Object And Methods (#095)",
                "CSS Styling And Stylesheets (#096)",
                "Before, After, Prepend, Append, Remove (#097)",
                "DOM Traversing (#098)"
            ],
            brief: [
                "Build a User Management System.",
                "Create a table to display user data: name, age, and email.",
                "Add a delete button for each user to remove that user from the table.",
                "Add an edit button for each user to modify data directly in the table.",
                "Include a form at the top of the page to add new users.",
                "Use DOM Events for all interactions and dynamic updates."
            ]
        },
        11: {
            title: "BOM and Advanced DOM Features",
            lessons: [
                "DOM Cloning (#099)",
                "AddEventListener (#100)",
                "DOM Challenge (#101)",
                "What Is BOM? (#102)",
                "Alert, Confirm, Prompt (#103)",
                "setTimeout and clearTimeout (#104)",
                "setInterval and clearInterval (#105)",
                "Window Location Object (#106)"
            ],
            brief: [
                "Develop a Dynamic Clock and URL Manager.",
                "Create a digital clock that updates every second using setInterval.",
                "Add a form where the user can input a URL and redirect to it using window.location.",
                "Include buttons to stop and start the clock dynamically."
            ]
        },
        12: {
            title: "Storage and History Management",
            lessons: [
                "Window Open And Close (#107)",
                "Window History Object (#108)",
                "Scroll, ScrollTo, ScrollBy, Focus, Print, Stop (#109)",
                "Scroll To Top Using ScrollY (#110)",
                "Local Storage (#111)",
                "Local Storage Color App Practice (#112)",
                "Session Storage And Use Cases (#113)",
                "BOM Challenge (#114)"
            ],
            brief: [
                "Create a Color Preference App.",
                "Allow users to select their preferred background color from a list.",
                "Save the selected color in localStorage so it persists across page reloads.",
                "Include a reset button to restore the default background color."
            ]
        },
        13: {
            title: "Destructuring and Advanced Objects",
            lessons: [
                "Destructuring Arrays Part 1 (#115)",
                "Destructuring Arrays Part 2 (#116)",
                "Destructuring Arrays Part 3 - Swapping Variables (#117)",
                "Destructuring Objects Part 1 (#118)",
                "Destructuring Objects Part 2 (#119)",
                "Destructuring Function Parameters (#120)",
                "Destructuring Mixed Content (#121)",
                "Destructuring Challenge (#122)"
            ],
            brief: [
                "Design a User Profile Viewer.",
                "Create an object with user details: name, age, job, and address.",
                "Use destructuring to extract and display the data dynamically on the web page.",
                "Include a button to update the user's job and display the updated profile."
            ]
        },
        14: {
            title: "Working with Sets and Maps",
            lessons: [
                "Set Data Type And Methods (#123)",
                "Set vs WeakSet And Garbage Collector (#124)",
                "Map Data Type vs Object (#125)",
                "Map Methods (#126)",
                "Map vs WeakMap (#127)",
                "Array.from Method (#128)",
                "Array.copyWithin Method (#129)",
                "Array.some Method (#130)"
            ],
            brief: [
                "Create a Product Tracker.",
                "Use a Set to store unique product names.",
                "Add functionality to add, remove, and check products in the set.",
                "Use a Map to associate product names with prices.",
                "Dynamically display the product list with prices.",
                "Update the total cost when products are added or removed."
            ]
        },
        15: {
            title: "Regular Expressions and Validation",
            lessons: [
                "Array.every Method (#131)",
                "Spread Syntax And Use Cases (#132)",
                "Map And Set Challenge (#133)",
                "Intro And What Is Regular Expression (#134)",
                "Regular Expression - Modifiers (#135)",
                "Regular Expression - Ranges Part 1 (#136)",
                "Regular Expression - Ranges Part 2 (#137)"
            ],
            brief: [
                "Develop a Form Validation Tool.",
                "Create a form with fields for name, email, and phone number.",
                "Use Regular Expressions to validate the name: 3-10 characters with no special symbols.",
                "Use Regular Expressions to validate the email using a standard email format.",
                "Use Regular Expressions to validate the phone as exactly 10 digits.",
                "Display appropriate success or error messages dynamically."
            ]
        },
        16: {
            title: "Advanced Regular Expressions",
            lessons: [
                "Regular Expression - Character Classes Part 1 (#138)",
                "Regular Expression - Character Classes Part 2 (#139)",
                "Regular Expression - Quantifiers Part 1 (#140)",
                "Regular Expression - Quantifiers Part 2 (#141)",
                "Regular Expression - Quantifiers Part 3 (#142)",
                "Regular Expression - Replace With Pattern (#143)",
                "Regular Expression - Form Validation (#144)"
            ],
            brief: [
                "Create a Login Form Validation.",
                "Design a login form with fields for username and password.",
                "Validate the username so it starts with a letter and is 5-15 characters long.",
                "Validate the password so it contains at least one uppercase letter, one number, and is 8-20 characters long.",
                "Display validation feedback dynamically below each field."
            ]
        },
        17: {
            title: "Object-Oriented Programming (OOP)",
            lessons: [
                "Test Your Regular Expression (#145)",
                "Regular Expression - Challenge (#146)",
                "OOP Introduction (#147)",
                "Constructor Function Introduction (#148)",
                "Constructor Function New Syntax (#149)",
                "Deal With Properties And Methods (#150)"
            ],
            brief: [
                "Build a User Profile Constructor.",
                "Create a User constructor function that initializes name, email, and age.",
                "Add methods to display user details and update the user's email.",
                "Create multiple User instances and display their data dynamically on a web page."
            ]
        },
        18: {
            title: "Advanced OOP Concepts",
            lessons: [
                "Update Properties And Built-In Constructors (#151)",
                "Class Static Properties And Methods (#152)",
                "Class Inheritance (#153)",
                "Class Encapsulation (#154)",
                "Prototype Introduction (#155)",
                "Add To Prototype Chain (#156)"
            ],
            brief: [
                "Develop a Library Management System.",
                "Create a base Book class with title, author, and pages.",
                "Extend it to create an EBook class with an additional fileSize property.",
                "Add methods for displaying book details.",
                "Calculate the total file size for all eBooks."
            ]
        },
        19: {
            title: "Working with Dates and Descriptors",
            lessons: [
                "Object Meta Data And Descriptor Part 1 (#157)",
                "Object Meta Data And Descriptor Part 2 (#158)",
                "Date And Time Introduction (#159)",
                "Get Date And Time (#160)",
                "Set Date And Time (#161)",
                "Formatting Date And Time (#162)",
                "Tracking Operations Time (#163)"
            ],
            brief: [
                "Create an Event Countdown Timer.",
                "Allow the user to input an event name and date.",
                "Display a countdown showing days, hours, minutes, and seconds remaining until the event.",
                "Update the timer dynamically using setInterval.",
                "Format the output using Date methods."
            ]
        },
        20: {
            title: "Generator Functions and Modules",
            lessons: [
                "Generator Function Introduction (#164)",
                "Delegate Generator Function (#165)",
                "Generate Infinite Numbers (#166)",
                "Module Import And Export (#167)",
                "Named vs Default Export And Import All (#168)"
            ],
            brief: [
                "Develop a Random Number Generator.",
                "Create a generator function that produces random numbers between 1 and 100.",
                "Use a button to trigger the generation of a new number and display it on the page.",
                "Save all generated numbers in an array using a module.",
                "Display the full list of generated numbers."
            ]
        },
        21: {
            title: "JSON and APIs",
            lessons: [
                "What Is JSON (#169)",
                "JSON Syntax And Compare With JS Object (#170)",
                "What Is API (#171)",
                "Parse And Stringify (#172)",
                "Asynchronous vs Synchronous Programming (#173)",
                "Call Stack And Web API (#174)",
                "Event Loop And Callback Queue (#175)"
            ],
            brief: [
                "Create a User Information Fetcher.",
                "Use fetch API to get data from https://jsonplaceholder.typicode.com/users.",
                "Display user data including name, email, and address in a table format.",
                "Include a search bar to filter users by name."
            ]
        },
        22: {
            title: "Promises and AJAX",
            lessons: [
                "What Is AJAX And Network Information (#176)",
                "Request And Response From Real API (#177)",
                "Loop On Data (#178)",
                "Callback Hell Or Pyramid Of Doom (#179)",
                "Promise Intro And Syntax (#180)",
                "Promise - Then, Catch And Finally (#181)",
                "Fetch API (#182)"
            ],
            brief: [
                "Build a Weather App.",
                "Use fetch API to retrieve weather data from a real API like OpenWeatherMap.",
                "Allow the user to input a city name.",
                "Display the current temperature, humidity, and weather description.",
                "Handle errors gracefully when the city is not found or network issues happen."
            ]
        }
    };

    let currentScript = document.currentScript;
    if (!currentScript) {
        // Fallback: find script tag that includes "curriculum.js"
        const scripts = document.querySelectorAll('script[src*="curriculum.js"]');
        for (const s of scripts) {
            const src = s.getAttribute('src');
            if (src && src.includes('week=')) {
                currentScript = s;
                break;
            }
        }
        if (!currentScript && scripts.length > 0) {
            currentScript = scripts[scripts.length - 1];
        }
    }
    const week = getWeekNumber(currentScript);
    const data = curriculum[week];

    if (!data) return;

    function getWeekNumber(script) {
        if (!script) return null;

        try {
            const url = new URL(script.src, window.location.href);
            const weekParam = Number(url.searchParams.get("week"));
            if (Number.isInteger(weekParam)) return weekParam;
        } catch (error) {
            const match = script.src.match(/[?&]week=(\d+)/);
            if (match) return Number(match[1]);
        }

        return null;
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function injectStyles() {
        if (document.getElementById("curriculum-section-styles")) return;

        const style = document.createElement("style");
        style.id = "curriculum-section-styles";
        style.textContent = `
            :root {
                --bg-light: #020617 !important;
                --bg-white: rgba(15, 23, 42, 0.76) !important;
                --text-dark: #e2e8f0 !important;
                --text-light: #94a3b8 !important;
                --primary-color: #38bdf8 !important;
                --secondary-color: #0284c7 !important;
                --accent-color: #0369a1 !important;
            }

            html {
                background: #020617;
            }

            body {
                background:
                    radial-gradient(circle at 15% 8%, rgba(6, 182, 212, 0.15), transparent 28%),
                    radial-gradient(circle at 86% 12%, rgba(139, 92, 246, 0.14), transparent 30%),
                    linear-gradient(180deg, #020617 0%, #070b18 45%, #0f172a 100%) !important;
                color: #e2e8f0 !important;
                font-family: 'Cairo', 'Tajawal', sans-serif !important;
            }

            body::before {
                content: "";
                position: fixed;
                inset: 0;
                pointer-events: none;
                background-image:
                    linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
                background-size: 56px 56px;
                mask-image: radial-gradient(ellipse at 50% 10%, black 0%, transparent 72%);
                -webkit-mask-image: radial-gradient(ellipse at 50% 10%, black 0%, transparent 72%);
                z-index: -1;
            }

            .objective-section,
            .form-container,
            .demo-section,
            .table-container,
            .output-section,
            .code-section,
            .results-box,
            .info,
            .card,
            .container {
                border-radius: 18px !important;
                border: 1px solid rgba(148, 163, 184, 0.16) !important;
                box-shadow: 0 24px 80px rgba(0, 0, 0, 0.28) !important;
            }

            .objective-section {
                background: linear-gradient(135deg, rgba(15, 23, 42, 0.92), rgba(30, 41, 59, 0.72)) !important;
                color: #e2e8f0 !important;
                backdrop-filter: blur(18px);
                -webkit-backdrop-filter: blur(18px);
                position: relative;
                overflow: hidden;
            }

            .objective-section::before {
                content: "";
                position: absolute;
                inset-inline-start: 22px;
                top: 0;
                width: 34%;
                height: 1px;
                background: linear-gradient(90deg, transparent, #06b6d4, transparent);
            }

            .objective-section h1,
            .objective-section h2,
            .objective-section h3 {
                color: #f8fafc !important;
            }

            .objective-section p {
                color: #cbd5e1 !important;
            }

            .form-container,
            .demo-section,
            .table-container,
            .output-section,
            .results-box,
            .info,
            .card,
            .container {
                background: rgba(15, 23, 42, 0.76) !important;
                color: #e2e8f0 !important;
                backdrop-filter: blur(16px);
                -webkit-backdrop-filter: blur(16px);
            }

            h1,
            h2,
            h3 {
                letter-spacing: 0 !important;
            }

            body > h1,
            h1, h2, h3, h4, h5, h6,
            .form-container h1,
            .demo-section h2,
            .table-container h2,
            .container h1,
            .container h2,
            .container h3 {
                color: #f8fafc !important;
            }

            .info strong,
            .container strong,
            .card strong,
            .demo-section strong {
                color: #38bdf8 !important;
            }

            input,
            textarea,
            select {
                background: rgba(2, 6, 23, 0.72) !important;
                color: #e2e8f0 !important;
                border-color: rgba(148, 163, 184, 0.24) !important;
                box-shadow: none !important;
            }

            input::placeholder,
            textarea::placeholder {
                color: #94a3b8 !important;
            }

            input:focus,
            textarea:focus,
            select:focus {
                border-color: #06b6d4 !important;
                box-shadow: 0 0 0 4px rgba(6, 182, 212, 0.13) !important;
            }

            button,
            .btn,
            .task-link {
                border-radius: 12px !important;
                background: linear-gradient(135deg, #06b6d4, #3b82f6) !important;
                color: #ffffff !important;
                border: 1px solid rgba(255, 255, 255, 0.14) !important;
                box-shadow: 0 14px 34px rgba(37, 99, 235, 0.25) !important;
            }

            button:hover,
            .btn:hover,
            .task-link:hover {
                transform: translateY(-2px) !important;
                box-shadow: 0 18px 42px rgba(6, 182, 212, 0.25) !important;
            }

            .code-section {
                background: rgba(15, 23, 42, 0.88) !important;
                overflow: hidden;
            }

            .code-header {
                background: linear-gradient(135deg, #0f172a, #1e293b) !important;
                color: #e2e8f0 !important;
                border-bottom: 1px solid rgba(148, 163, 184, 0.16) !important;
            }

            .code-container,
            pre {
                background: #020617 !important;
                color: #dbeafe !important;
            }

            table {
                background: rgba(15, 23, 42, 0.72) !important;
                color: #e2e8f0 !important;
            }

            th {
                background: #0f172a !important;
                color: #f8fafc !important;
            }

            tr:hover {
                background: rgba(6, 182, 212, 0.08) !important;
            }

            .curriculum-section {
                background: linear-gradient(135deg, rgba(2, 6, 23, 0.9), rgba(15, 23, 42, 0.82)) !important;
                color: #e2e8f0;
                border: 1px solid rgba(6, 182, 212, 0.18) !important;
                box-shadow: 0 24px 90px rgba(2, 6, 23, 0.4) !important;
            }

            .curriculum-section h2,
            .curriculum-section h3 {
                color: #f8fafc !important;
            }

            .curriculum-kicker {
                display: inline-flex;
                align-items: center;
                gap: 0.4rem;
                padding: 0.35rem 0.75rem;
                margin-bottom: 0.75rem;
                border-radius: 999px;
                background: rgba(6, 182, 212, 0.12);
                border: 1px solid rgba(6, 182, 212, 0.24);
                color: #67e8f9;
                font-weight: 700;
                font-size: 0.95rem;
            }

            .curriculum-section h2 {
                margin: 0 0 0.75rem;
                font-size: 1.55rem;
            }

            .curriculum-grid {
                display: grid;
                grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
                gap: 1.25rem;
            }

            .curriculum-card {
                background: rgba(15, 23, 42, 0.74);
                border: 1px solid rgba(148, 163, 184, 0.14);
                border-radius: 1rem;
                padding: 1.25rem;
            }

            .curriculum-card h3 {
                margin: 0 0 0.85rem;
                font-size: 1.15rem;
            }

            .curriculum-card ul {
                margin: 0;
                padding-inline-start: 1.25rem;
            }

            .curriculum-card li {
                margin-bottom: 0.55rem;
                line-height: 1.7;
                color: #cbd5e1;
            }

            @media (max-width: 768px) {
                .curriculum-grid {
                    grid-template-columns: 1fr;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function renderCurriculum() {
        const existing = document.querySelector(".curriculum-section");
        if (existing) existing.remove();

        const objectiveSection = document.querySelector(".objective-section");
        if (!objectiveSection) return;

        injectStyles();

        const section = document.createElement("section");
        section.className = "objective-section curriculum-section";
        section.setAttribute("aria-labelledby", `curriculum-week-${week}`);

        const lessons = data.lessons.map((lesson) => `<li>${escapeHtml(lesson)}</li>`).join("");
        const brief = data.brief.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

        section.innerHTML = `
            <div class="curriculum-kicker">الأسبوع ${week}</div>
            <h2 id="curriculum-week-${week}">${escapeHtml(data.title)}</h2>
            <div class="curriculum-grid">
                <div class="curriculum-card">
                    <h3>الدروس المطلوبة</h3>
                    <ul>${lessons}</ul>
                </div>
                <div class="curriculum-card">
                    <h3>وصف المهمة</h3>
                    <ul>${brief}</ul>
                </div>
            </div>
        `;

        objectiveSection.insertAdjacentElement("afterend", section);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", renderCurriculum, { once: true });
    } else {
        renderCurriculum();
    }
})();
