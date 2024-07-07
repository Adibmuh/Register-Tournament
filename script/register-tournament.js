document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registration-form')
    const message = document.getElementById('message')

    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const teamName = document.getElementById('team-name').value
        const captainName = document.getElementById('captain-name').value
        const captainPhone = document.getElementById('captain-phone').value
        const memberName = document.getElementById('member-name').value
        const memberPhone = document.getElementById('member-phone').value
        const gender = document.getElementById('gender').value

        if (validateForm(teamName, captainName, captainPhone, memberName, memberPhone)) {
            const teamData = {
                teamName,
                captain: {
                    name: captainName,
                    phone: captainPhone
                },
                member: {
                    name: memberName,
                    phone: memberPhone
                },
                gender
            }

            localStorage.setItem('teamData', JSON.stringify(teamData))
            message.textContent = 'Registration successful!'
            message.style.color = 'green'

            setTimeout(() => {
                window.location.href = 'main.html'
            }, 2000)
        }
    })

    function validateForm(teamName, captainName, captainPhone, memberName, memberPhone) {
        const nameRegex = /^[a-zA-Z\s]+$/
        const phoneRegex = /^[0-9]{7,14}$/
        const teamNameRegex = /^[a-zA-Z0-9]{4,15}$/

        if (!teamNameRegex.test(teamName)) {
            alert('Team Name must be 4-15 characters long and contain only letters and numbers.')
            return false
        }
        if (!nameRegex.test(captainName) || !nameRegex.test(memberName)) {
            alert('Names must contain only letters and spaces.')
            return false
        }
        if (!phoneRegex.test(captainPhone) || !phoneRegex.test(memberPhone)) {
            alert('Phone numbers must be 7-14 digits long.')
            return false
        }
        return true
    }
})
