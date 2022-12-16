/**
 * Converts a 12-hour time format to a 24-hour (military) format.
 *
 * @sig String -> String
 */
function timeConv(time) {
  if (time.includes('AM')) {
    return time
      .replace('12', '00')
      .replace('AM', '');
  }

  if (time.includes('PM')) {
    return time.replace('PM', '');
  }
}

export { timeConv };
