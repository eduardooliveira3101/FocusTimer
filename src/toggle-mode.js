/*variável de controle para acessibilidade*/
let darkMode = true

const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => {
  
 /* acessibilidade*/
 const mode = darkMode? 'light' : 'dark'
 
 /*acessibilidade*/
 event.currentTarget
 .querySelector('span').textContent = `${mode} mode ativado`

 /*acessibilidade*/
 darkMode = !darkMode

  /*lógica de construtiva*/
  document.documentElement.classList.toggle('light')

})