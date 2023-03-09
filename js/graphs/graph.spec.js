import { Graph } from './graph.js';

describe('Graph class', () => {
  test('can initialize', () => {
    var g = new Graph();

    expect(g.constructor).toEqual(Graph);
    expect(g.adj).toEqual({});
  });

  describe('addVertex(key)', () => {
    test('should add the vertex with initial empty array', () => {
      var g = new Graph();

      var res = g.addVertex('Tokio');

      expect(res).toBe(true);
      expect(g.adj).toEqual({ Tokio: [] });
    });

    test('should not add the vertex if name already exists', () => {
      var g = new Graph();

      var res1 = g.addVertex('Lhasa');

      expect(res1).toBe(true);
      expect(g.adj).toEqual({ Lhasa: [] });

      var res2 = g.addVertex('Lhasa');

      expect(res2).toBe(false);
      expect(g.adj).toEqual({ Lhasa: [] });
    });
  });
});
