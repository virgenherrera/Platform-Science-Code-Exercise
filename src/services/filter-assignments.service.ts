import { Assignment } from '../models';

export class FilterAssignmentsService {
  assignments: Assignment[] = [];

  constructor(private sortedAssignments: Assignment[]) {
    this.setAssignments();
  }

  private setAssignments() {
    while (this.sortedAssignments.length) {
      const assignment = this.sortedAssignments.shift();

      this.assignments.push(assignment);
      this.dropAssignmentFromRawList(assignment);
    }
  }

  private dropAssignmentFromRawList({ address, driver }: Assignment) {
    this.sortedAssignments = this.sortedAssignments.filter(
      (v) => v.driver !== driver || v.address !== address,
    );
  }
}
