document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form')
    const message = document.getElementById('message')

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const fullname = document.getElementById('fullname').value
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        const email = document.getElementById('email').value
        const phone = document.getElementById('phone').value

        if (validateForm(fullname, username, password, email, phone)) {
            const userData = {
                fullname,
                username,
                password,
                email,
                phone
            }

            localStorage.setItem('userData', JSON.stringify(userData))
            message.textContent = 'Registration successful! Redirecting to login...'
            message.style.color = 'green'

            setTimeout(() => {
                window.location.href = 'login.html'
            }, 2000)
        }
    })

    function validateForm(fullname, username, password, email, phone) {
        const fullnameRegex = /^[a-zA-Z\s]{1,250}$/
        const usernameRegex = /^[a-zA-Z0-9]{6,15}$/
        const passwordRegex = /^[a-zA-Z0-9]{8,16}$/
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const phoneRegex = /^[0-9]{10,13}$/

        if (!fullnameRegex.test(fullname)) {
            alert('Fullname length maximum 50 characters and contain only letters and numbers.')
            return false
        }
        if (!usernameRegex.test(username)) {
            alert('Username must be 6-15 characters long and contain only letters and numbers.')
            return false
        }
        if (!passwordRegex.test(password)) {
            alert('Password must be 8-16 characters long and contain only letters and numbers.')
            return false
        }
        if (!emailRegex.test(email)) {
            alert('Invalid email format.')
            return false
        }
        if (!phoneRegex.test(phone)) {
            alert('Phone number must be 10-13 digits long.')
            return false
        }
        return true
    }
})
