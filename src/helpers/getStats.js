
const getStats = ( tasks ) => {

  const getStats = ( concept ) => {
      return tasks.filter(ele => ele.state === concept).length;
  }

  return (
    {
      all: tasks.length,
      completed: getStats(true),
      missing: getStats(false)
    }
  )
}

export default getStats;
