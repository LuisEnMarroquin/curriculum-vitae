const all = {
  calcAge: () => {
    var ageDfMs = Date.now() - new Date('1999-10-16').getTime()
    var ageDate = new Date(ageDfMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
}

export default all
