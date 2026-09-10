;(() => {
  const overlay = document.querySelector('.app_overlay')
  const userInput = document.getElementById('step01')
  const passwordInput = document.getElementById('step02')
  const userButton = document.querySelector('.ipswich-main-buttons-login-user .ipswich-main-buttons-link')
  const passwordButton = document.querySelector('.ipswich-main-buttons-login-password .ipswich-main-buttons-link')
  const cancelButton = document.querySelector('.ipswich-main-buttons-login-password .ipswich-main-buttons-link-simple')
  const userStep = document.querySelector('icb-login-step-user')?.closest('.step')
  const passwordStep = document.querySelector('icb-login-step-password')?.closest('.step')

  const showLoader = (ms = 1400) =>
    new Promise((resolve) => {
      overlay?.classList.add('is-visible')
      window.setTimeout(() => {
        overlay?.classList.remove('is-visible')
        resolve()
      }, ms)
    })

  const syncButton = (input, button) => {
    if (!input || !button) return
    button.classList.toggle('inactive', input.value.trim().length === 0)
  }

  const bindField = (input, button) => {
    if (!input || !button) return
    const update = () => syncButton(input, button)
    input.addEventListener('input', update)
    input.addEventListener('keyup', update)
    input.addEventListener('change', update)
    update()
  }

  const showStep = (step) => {
    userStep?.classList.remove('ipswich-step-visible')
    passwordStep?.classList.remove('ipswich-step-visible')
    step?.classList.add('ipswich-step-visible')
  }

  const start = () => {
    document.addEventListener('submit', (event) => event.preventDefault())
    bindField(userInput, userButton)
    bindField(passwordInput, passwordButton)

    userButton?.addEventListener('click', async (event) => {
      event.preventDefault()
      if (!userInput?.value.trim() || userButton.classList.contains('inactive')) return
      await showLoader(1200)
      showStep(passwordStep)
    })

    passwordButton?.addEventListener('click', async (event) => {
      event.preventDefault()
      if (!passwordInput?.value.trim() || passwordButton.classList.contains('inactive')) return
      await showLoader(1200)
    })

    cancelButton?.addEventListener('click', (event) => {
      event.preventDefault()
      if (passwordInput) passwordInput.value = ''
      syncButton(passwordInput, passwordButton)
      showStep(userStep)
    })

    const startedAt = Date.now()
    const hideInitialLoader = () => {
      const remaining = Math.max(0, 1600 - (Date.now() - startedAt))
      window.setTimeout(() => overlay?.classList.remove('is-visible'), remaining)
    }

    if (document.readyState === 'complete') {
      hideInitialLoader()
    } else {
      window.addEventListener('load', hideInitialLoader, { once: true })
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start)
  } else {
    start()
  }
})()
