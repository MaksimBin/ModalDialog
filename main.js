

document.querySelector('.content-el').style = "display: none;"



const closeModal = () => {
  document.querySelector('.content-el').style = "display: none;"
  document.querySelector('.btn').style = "display: block;"
}

const openModal = () => {
  document.querySelector('.content-el').style = "display: block;"
  document.querySelector('.btn').style = "display: none;"
}

