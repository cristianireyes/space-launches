import { UPCOMING_LAUNCHES } from '../mocks/upcoming-launches-mock.js'

function getCard(upcomingLaunch) {
  const name = upcomingLaunch.name
  const photo = upcomingLaunch.image
  const providerName = upcomingLaunch.launch_service_provider.name
  const padLocation = upcomingLaunch.pad.location.name
  const dateLaunch = upcomingLaunch.window_start
  const newDate = new Date(dateLaunch)
  const date = newDate.toLocaleDateString()
  const hour = newDate.toLocaleTimeString()

  const card = `
  <div class="card">
  <div class="card-image">
    <img src="${photo}" />
  </div>
  <div class="card-title">
    <span>${name}</span>
  </div>
  <div class="card-information">
    <div class="card-subtitle">
      <span> ${providerName} </span>
    </div>
    <div class="time-launch">
      <span class="date">${date}</span>
      <span class="hour">${hour}</span>
    </div>
    <div class="location">
      <span>
      ${padLocation}
      </span>
    </div>
  </div>
</div>
  `
  return card
}

getCard(UPCOMING_LAUNCHES[0])
