const UserSocialMedia = {
  github: 'Marceloabf',
  instagram: 'marceloabf1',
  facebook: 'marcelo.amorim.39',
  youtube: 'channel/UC7ulZUNejuGvem6ndu19Q7w',
  twitter: 'marceloabf1'
}
function ChangeSocialMediaLogin() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${UserSocialMedia[social]}`
  }
}
ChangeSocialMediaLogin()
function getGitHubUserInfos() {
  const url = `https://api.github.com/users/${UserSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      Username.textContent = data.name
      PersonalIMG.src = data.avatar_url
      BIO.textContent = data.bio
      Github.href = data.html_url
      UserLogin.textContent = data.login
    })
}
getGitHubUserInfos()
