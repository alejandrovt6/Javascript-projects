class Calculator {
    constructor(op1Element, op2Element) {
        this.op1Element = op1Element;
        this.op2Element = op2Element;
        this.clear();
    }

    clear() {
        this.op1 = 0;
        this.op2 = 0;
        this.operator = 0;
        this.updateUI();
    }

    updateUI() {
        this.op1Element.innerHTML = this.op1 + this.operator;
        this.op2Element.innerHTML = this.op2;
    }

    appendNumber(number) {
        if(number === "." && this.op2.includes(".")) return;
        this.op2 = this.op2 === 0 ? number : this.op2.toString() + number; 
        this.updateUI();
    }

    delete() {
        if(this.op2 === 0) return;
        this.op2 = +this.op2.toString().slice(0, -1); /*Delete last number*/
        this.updateUI();
    }

    operations(operator) {
        if(this.operator) {
            this.calcule();
        }
        this.operator = operator;
        this.op1 = +this.op2 === 0 ? this.op1 : this.op2;
        this.op2 = 0;
        this.updateUI();
    }

    calcule() {
        switch(this.operator) {
            case "+":
                this.op1 = +this.op1 + +this.op2;
            break;

            case "-":
                this.op1 = +this.op1 - +this.op2;
            break;

            case "*":
                this.op1 = +this.op1 * +this.op2;
            break;

            case "/":
                this.op1 = +this.op1 / +this.op2;
            break;
        }

        this.operator = "";
        this.op2 = 0;
        this.updateUI();
    }
}

const op1Element = document.querySelector("[data-op-1]");
const op2Element = document.querySelector("[data-op-2]");

const clearBtn = document.querySelector("[data-clear]");
const numberBtns = document.querySelectorAll("[data-number]");
const deleteBtn = document.querySelector("[data-delete]");
const operationBtn = document.querySelectorAll("[data-operation]");
const equalsBtn = document.querySelector("[data-equals]");


const calculator = new Calculator(op1Element, op2Element);

clearBtn.addEventListener("click", () => {
    calculator.clear();
});

numberBtns.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerHTML);
    })
});

deleteBtn.addEventListener("click", () => {
    calculator.delete();
});

operationBtn.forEach(button => {
    button.addEventListener("click", () => {
        calculator.operations(button.innerHTML);
    })
});

equalsBtn.addEventListener("click", () => {
    calculator.calcule();
});