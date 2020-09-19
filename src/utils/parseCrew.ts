export const parseCrew = (crew: string): number => {
  const crewWithoutComma = crew.replace(/,/g, '');

  const hyphenIndex = crewWithoutComma.indexOf('-');

  const crewWithoutRange =
    hyphenIndex !== -1
      ? crewWithoutComma.substring(hyphenIndex + 1, crewWithoutComma.length)
      : crewWithoutComma;

  return parseInt(crewWithoutRange, 10);
};
