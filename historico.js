import { LinkedStack } from "./LinkedStack.js";

const textareaEditor = document.querySelector('#textareaEditor')
textareaEditor.addEventListener('keydown', Salvar)

const botao = document.querySelector('#revisao')
botao.addEventListener('click', Reempilhar)

const stack = new LinkedStack()
function Salvar() {
    const content = document.querySelector('#textareaEditor').value
    stack.push(content)
}
const newStack = new LinkedStack()
function Reempilhar() {
    const textareaResult = document.querySelector('#textareaResult');
    textareaResult.value = '';

    const fases = [];


    while (!stack.isEmpty()) {
        newStack.push(stack.pop());
    }

    while (!newStack.isEmpty()) {
        fases.push(newStack.pop());
    }

    fases.forEach((fase, index) => {
        setTimeout(() => {
            textareaResult.value = fase;
            console.log(fase);
        }, index * 100);
    });
}
