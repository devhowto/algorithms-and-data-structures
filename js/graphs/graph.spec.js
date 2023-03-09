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
    test('return false if vertices do not exist', () => {
      var g0 = new Graph();
      var g1 = new Graph();
      var g2 = new Graph();

      g1.addVertex('Lhasa');
      g2.addVertex('Shigaste');

      expect(g0.addEdge('foo', 'bar')).toBe(false);
      expect(g1.addEdge('Lhasa', 'Shigaste')).toBe(false);
      expect(g2.addEdge('Shigaste', 'Lhasa')).toBe(false);
    });

    test('add edge to existing vertices', () => {
      var g = new Graph();

      g.addVertex('Lhasa');
      g.addVertex('Shigaste');

      var res = g.addEdge('Lhasa', 'Shigaste');

      expect(res).toBe(true);
      expect(g.adj['Lhasa']).toContain('Shigaste');
      expect(g.adj['Shigaste']).toContain('Lhasa');
    });
  });

  describe('removeEdge(v1, v2)', () => {
    test('return false if vertices do not exist', () => {
      var g0 = new Graph();
      var g1 = new Graph();
      var g2 = new Graph();

      g1.addVertex('Lhasa');
      g2.addVertex('Shigaste');

      expect(g0.removeEdge('foo', 'bar')).toBe(false);
      expect(g1.removeEdge('Lhasa', 'Shigaste')).toBe(false);
      expect(g2.removeEdge('Shigaste', 'Lhasa')).toBe(false);
    });

    test('remove edge from existing vertices', () => {
      var g = new Graph();

      g.addVertex('Lhasa');
      g.addVertex('Shigaste');
      g.addVertex('Qamdo');

      g.addEdge('Lhasa', 'Shigaste');
      g.addEdge('Lhasa', 'Qamdo');

      var res = g.removeEdge('Lhasa', 'Shigaste');

      expect(res).toBe(true);

      expect(g.adj['Qamdo']).toHaveLength(1);
      expect(g.adj['Qamdo']).toEqual(['Lhasa']);

      expect(g.adj['Lhasa']).not.toContain('Shigaste');
      expect(g.adj['Lhasa']).toHaveLength(1);
      expect(g.adj['Lhasa']).toEqual(['Qamdo']);

      expect(g.adj['Shigaste']).not.toContain('Lhasa');
      expect(g.adj['Shigaste']).toHaveLength(0);
      expect(g.adj['Shigaste']).toEqual([]);
    });
  });
});
