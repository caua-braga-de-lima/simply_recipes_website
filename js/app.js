
//declara a função para o efeito toggle:
const getElement = (selector) => 
{
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

//conjunto de links: recebe a função criada e passa a classe dos links como parâmetro:
const links = getElement('.nav-links')

//botão de toggle: recebe a função criada e passa a classe do botão como parâmetro:
const navBtnDOM = getElement('.nav-btn')

//adiciona o evento ao botão de toggle que mostra os links uma vez clicado:
navBtnDOM.addEventListener('click', () => 
{
  links.classList.toggle('show-links')
})

// cofigura a atualização dinâmica da data no rodapé da página:
const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear
