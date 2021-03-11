const calculateAge = () => {
  var ageDfMs = Date.now() - new Date('1999-10-16').getTime()
  return Math.abs(new Date(ageDfMs).getUTCFullYear() - 1970)
}

const all = {
  edad: calculateAge(),
  cdlg: '01/2018 - 06/2018',
  tecm: '08/2018 - present',
  sftk: '06/2018 - present',
}

export default all
