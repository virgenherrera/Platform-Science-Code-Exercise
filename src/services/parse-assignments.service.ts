import { Assignment } from '../models/assignment.model';

export class ParseAssignmentsService {
  constructor(private readonly sortedAssignments: Assignment[]) {}

  get parsedAssignments(): Assignment[] {
    const initialValue: Assignment[] = [];

    return this.sortedAssignments.reduce((acc, curr) => {
      if (this.isAssigned(curr, acc)) return acc;

      acc.push(curr);

      return acc;
    }, initialValue);
  }

  private isAssigned(
    { address, driver }: Assignment,
    assignments: Assignment[],
  ) {
    return assignments.some(
      (v) => v.address === address || v.driver === driver,
    );
  }
}
