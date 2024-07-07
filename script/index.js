document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout-button')

    logoutButton.addEventListener('click', () => {
        localStorage.clear()
        window.location.href = 'login.html'
    })
})
