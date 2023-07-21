import { gradeStudent } from './grade_v1';

describe('Grading Students', () => {
  describe('when the grade is < 38', () => {
    it('should return the number without any rounding', () => {
      expect(gradeStudents([37])).toEqual([37]);
      expect(gradeStudents([13])).toEqual([13]);
    });
  });
});
