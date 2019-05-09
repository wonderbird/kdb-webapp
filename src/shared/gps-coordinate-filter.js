export default function (coord) {
  function formatCoordinate(value, digitsOfDegreeValue) {
    if (!value) {
      return '?? ???.???';
    }

    const deg = value.toFixed(0);
    const degStr = (`00${deg}`).slice(-digitsOfDegreeValue);
    const min = ((value - deg) * 100.0 / 60.0).toFixed(3);
    const minStr = (`0${min}`).slice(-6);

    return `${degStr}° ${minStr}'`;
  }

  const n = formatCoordinate(coord.latitude, 2);
  const e = formatCoordinate(coord.longitude, 3);

  return `N ${n} E ${e}`;
}
