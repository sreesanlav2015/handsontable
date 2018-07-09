import {ColumnStatesManager, DESC_SORT_STATE, ASC_SORT_STATE} from 'handsontable/plugins/columnSorting/columnStatesManager';
import {DomHelper} from 'handsontable/plugins/columnSorting/domHelper';

describe('ColumnSorting', () => {
  describe('DomHelper.getAddedClasses', () => {
    it('should return proper CSS classes for single sorted column', () => {
      const columnStatesManager = new ColumnStatesManager();
      const domHelper = new DomHelper(columnStatesManager);

      columnStatesManager.setSortingOrder(0, DESC_SORT_STATE, false);

      expect(domHelper.getAddedClasses(0)).toEqual(['columnSorting']);

      expect(domHelper.getAddedClasses(0, true).length).toEqual(2);
      expect(domHelper.getAddedClasses(0, true).includes('columnSorting')).toBeTruthy();
      expect(domHelper.getAddedClasses(0, true).includes('descending')).toBeTruthy();

      expect(domHelper.getAddedClasses(1)).toEqual(['columnSorting']);
      expect(domHelper.getAddedClasses(1, true)).toEqual(['columnSorting']);
    });

    it('should return proper CSS classes for multiple sorted columns', () => {
      const columnStatesManager = new ColumnStatesManager();
      const domHelper = new DomHelper(columnStatesManager);

      columnStatesManager.setSortingOrder(1, DESC_SORT_STATE, false);
      columnStatesManager.setSortingOrder(0, ASC_SORT_STATE, false);

      expect(domHelper.getAddedClasses(0)).toEqual(['columnSorting']);

      expect(domHelper.getAddedClasses(0, true).length).toEqual(3);
      expect(domHelper.getAddedClasses(0, true).includes('columnSorting')).toBeTruthy();
      expect(domHelper.getAddedClasses(0, true).includes('ascending')).toBeTruthy();
      expect(domHelper.getAddedClasses(0, true).includes('second')).toBeTruthy();

      expect(domHelper.getAddedClasses(1)).toEqual(['columnSorting']);

      expect(domHelper.getAddedClasses(1, true).includes('columnSorting')).toBeTruthy();
      expect(domHelper.getAddedClasses(1, true).includes('descending')).toBeTruthy();
      expect(domHelper.getAddedClasses(1, true).includes('first')).toBeTruthy();
    });
  });
});