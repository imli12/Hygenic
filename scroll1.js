window.addEventListener('scroll', () => {
    const profileImg = document.getElementById('profile-img');
    const imgPosition = profileImg.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (imgPosition < screenPosition) {
        profileImg.classList.add('show');
    } else {
        profileImg.classList.remove('show');
    }
});
