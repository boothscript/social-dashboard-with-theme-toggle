export default function statHelper(stat) {
  if (stat > 9999) {
    return `${Math.round(stat / 1000)}k`;
  }
  return stat;
}
