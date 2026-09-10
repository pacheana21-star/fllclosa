document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('submit', (event) => event.preventDefault())

  const userInput = document.getElementById('step01')
  const userButton = document.querySelector('.ipswich-main-buttons-login-user .ipswich-main-buttons-link')

  const syncButton = () => {
    if (!userInput || !userButton) return
    userButton.classList.toggle('inactive', userInput.value.trim().length === 0)
  }

  if (userInput) {
    userInput.addEventListener('input', syncButton)
    userInput.addEventListener('keyup', syncButton)
    syncButton()
  }
})
