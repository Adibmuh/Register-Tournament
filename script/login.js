document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form')
    const message = document.getElementById('message')

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const loginUsername = document.getElementById('login-username').value
        const loginPassword = document.getElementById('login-password').value

        if (validateLogin(loginUsername, loginPassword)) {
            const userData = JSON.parse(localStorage.getItem('userData'))

            if (userData && userData.username === loginUsername && userData.password === loginPassword) {
                message.textContent = 'Login successful! Redirecting to tournament registration...'
                message.style.color = 'green'

                sessionStorage.setItem('userSession', JSON.stringify(userData))

                setTimeout(() => {
                    window.location.href = 'register-tournament.html'
                }, 2000)
            } else {
                message.textContent = 'Invalid username or password.'
                message.style.color = 'red'
            }
        }
    })

    function validateLogin(username, password) {
        const usernameRegex = /^[a-zA-Z0-9]{6,15}$/
        const passwordRegex = /^[a-zA-Z0-9]{8,16}$/

        if (!usernameRegex.test(username)) {
            alert('Username must be 6-15 characters long and contain only letters and numbers.')
            return false
        }
        if (!passwordRegex.test(password)) {
            alert('Password must be 8-16 characters long and contain only letters and numbers.')
            return false
        }
        return true
    }
})
