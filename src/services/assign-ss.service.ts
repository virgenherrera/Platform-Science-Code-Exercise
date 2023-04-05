import { Multiplier } from '../enums';
import { Assignment } from '../models';
import {
  getConsonantCount,
  getStreetNameFromAddress,
  getVowelCount,
  hasCommonFactors,
  isStringLengthEven,
} from '../utils';

export class AssignSsService {
  private _assignments: Assignment[] = [];

  constructor(
    private readonly addresses: string[],
    private readonly drivers: string[],
  ) {
    this.setAssignments();
  }

  get assignments() {
    return this._assignments.sort((a, b) => a.ss - b.ss);
  }

  private setAssignments() {
    this.addresses.forEach(this.handleAddress.bind(this));
  }

  private handleAddress(address: string) {
    const streetName = getStreetNameFromAddress(address);

    if (isStringLengthEven(streetName)) {
      this.handleEvenStreetName(streetName, address);
    } else {
      this.handleOddStreetName(streetName, address);
    }
  }

  private handleEvenStreetName(streetName: string, address: string) {
    this.drivers.forEach((driver) => {
      const vowelCount = getVowelCount(driver);
      const ss = this.calculateSS(
        vowelCount * Multiplier.even,
        driver,
        streetName,
      );

      this._assignments.push(new Assignment(address, driver, ss));
    });
  }

  private handleOddStreetName(streetName: string, address: string) {
    this.drivers.forEach((driver) => {
      const consonantCount = getConsonantCount(driver);
      const ss = this.calculateSS(
        consonantCount * Multiplier.odd,
        driver,
        streetName,
      );

      this._assignments.push(new Assignment(address, driver, ss));
    });
  }

  private calculateSS(baseSS: number, driverName: string, streetName: string) {
    return (driverName.length && streetName.length) ||
      hasCommonFactors(streetName, driverName)
      ? baseSS * Multiplier.commonFactor
      : baseSS;
  }
}
