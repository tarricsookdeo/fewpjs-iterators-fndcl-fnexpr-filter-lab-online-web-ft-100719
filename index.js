const findMatching = (drivers, name) => {
  return drivers.filter(driver => {
    return driver.toLowerCase() === name.toLowerCase();
  });
};

const fuzzyMatch = (drivers, string) => {
  return drivers.filter(driver => {
    const d = driver.toLowerCase();
    return d.startsWith(string.toLowerCase());
  });
};

const matchName = (drivers, name) => {
    return drivers.filter(driver => {
      return driver.name.toLowerCase()===name.toLowerCase();
    });
  };
  