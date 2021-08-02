const mazeEndPoint = () => {
  const xPosition = document.querySelector('.end-goal-details').dataset['xPosition']
  const yPosition = document.querySelector('.end-goal-details').dataset['yPosition']
  document.getElementsByClassName(`x-${xPosition} y-${yPosition}`)[0].firstElementChild.className = 'target'
}

export default mazeEndPoint;
