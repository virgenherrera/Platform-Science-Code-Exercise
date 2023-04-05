export function isStringLengthEven(str: string): boolean {
  return str.length % 2 === 0;
}

export function getLettersFromString(str: string): string {
  return str.replace(/[^a-zA-Z]+/g, '');
}

export function getVowelCount(str: string): number {
  return getLettersFromString(str)
    .split('')
    .filter((e) => e.match(/[aeiou]/i)).length;
}

export function getConsonantCount(str: string): number {
  return getLettersFromString(str)
    .split('')
    .filter((e) => e.match(/[^aeiou]/i)).length;
}

export function getNumberFromAddress(address: string): string {
  return address.replace(/[^0-9]/g, '');
}

export function getStreetNameFromAddress(address: string): string {
  return address.replace(/\d/g, '').trim();
}

export function hasCommonFactors(address: string, driver: string): boolean {
  const addressLength = address.length;
  const driverLength = driver.length;
  const min = Math.min(addressLength, driverLength);

  for (let idx = 2; idx <= min; idx++) {
    if (addressLength % idx === 0 && driverLength % idx === 0) return true;
  }

  return false;
}
