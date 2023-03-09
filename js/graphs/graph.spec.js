import { Graph } from './graph.js';

//
// We are using Tibetan cities in these exapmles:
//
// • https://en.wikipedia.org/wiki/Tibet#Cities,_towns_and_villages
//

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

  describe('addEdge(v1, v2)', () => {
    describe('return false if vertices do not exist', () => {
      var g0 = new Graph();
      var g1 = new Graph();
      var g2 = new Graph();

      g1.addVertex('Lhasa');
      g2.addVertex('Shigaste');

      expect(g0.addEdge('foo', 'bar')).toBe(false);
      expect(g1.addEdge('Lhasa', 'Shigaste')).toBe(false);
      expect(g2.addEdge('Shigaste', 'Lhasa')).toBe(false);
    });

    describe('add edge to existing vertices', () => {
      var g = new Graph();

      g.addVertex('Lhasa');
      g.addVertex('Shigaste');

      var res = g.addEdge('Lhasa', 'Shigaste');

      expect(res).toBe(true);
      expect(g.adj['Lhasa']).toContain('Shigaste');
      expect(g.adj['Shigaste']).toContain('Lhasa');
    });
  });
});
