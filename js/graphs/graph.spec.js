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

  describe('removeVertex(v1)', () => {
    test('should return false if vertex does not exist', () => {
      var g = new Graph();
      expect(g.removeVertex('DOOM')).toBe(false);
    });

    test('should remove the vertex', () => {
      var g = new Graph();

      g.addVertex('Lhasa');
      g.addVertex('Qinghai');
      g.addVertex('Shigatse');
      g.addVertex('Shiquanhe');

      g.addEdge('Lhasa', 'Shigatse');
      g.addEdge('Lhasa', 'Qinghai');
      g.addEdge('Lhasa', 'Shiquanhe');
      g.addEdge('Qinghai', 'Shiquanhe');

      var res = g.removeVertex('Lhasa');

      expect(res).toBe(true);

      expect(g.adj).toEqual({
        Qinghai: ['Shiquanhe'],
        Shigatse: [],
        Shiquanhe: ['Qinghai'],
      });
    });
  });

  describe('addEdge(v1, v2)', () => {
    test('return false if vertices do not exist', () => {
      var g0 = new Graph();
      var g1 = new Graph();
      var g2 = new Graph();

      g1.addVertex('Lhasa');
      g2.addVertex('Shigatse');

      expect(g0.addEdge('foo', 'bar')).toBe(false);
      expect(g1.addEdge('Lhasa', 'Shigatse')).toBe(false);
      expect(g2.addEdge('Shigatse', 'Lhasa')).toBe(false);
    });

    test('add edge to existing vertices', () => {
      var g = new Graph();

      g.addVertex('Lhasa');
      g.addVertex('Shigatse');

      var res = g.addEdge('Lhasa', 'Shigatse');

      expect(res).toBe(true);
      expect(g.adj['Lhasa']).toContain('Shigatse');
      expect(g.adj['Shigatse']).toContain('Lhasa');
    });
  });

  describe('removeEdge(v1, v2)', () => {
    test('return false if vertices do not exist', () => {
      var g0 = new Graph();
      var g1 = new Graph();
      var g2 = new Graph();

      g1.addVertex('Lhasa');
      g2.addVertex('Shigatse');

      expect(g0.removeEdge('foo', 'bar')).toBe(false);
      expect(g1.removeEdge('Lhasa', 'Shigatse')).toBe(false);
      expect(g2.removeEdge('Shigatse', 'Lhasa')).toBe(false);
    });

    test('remove edge from existing vertices', () => {
      var g = new Graph();

      g.addVertex('Lhasa');
      g.addVertex('Shigatse');
      g.addVertex('Qamdo');

      g.addEdge('Lhasa', 'Shigatse');
      g.addEdge('Lhasa', 'Qamdo');

      var res = g.removeEdge('Lhasa', 'Shigatse');

      expect(res).toBe(true);

      expect(g.adj['Qamdo']).toHaveLength(1);
      expect(g.adj['Qamdo']).toEqual(['Lhasa']);

      expect(g.adj['Lhasa']).not.toContain('Shigatse');
      expect(g.adj['Lhasa']).toHaveLength(1);
      expect(g.adj['Lhasa']).toEqual(['Qamdo']);

      expect(g.adj['Shigatse']).not.toContain('Lhasa');
      expect(g.adj['Shigatse']).toHaveLength(0);
      expect(g.adj['Shigatse']).toEqual([]);
    });
  });

  describe('dfs(vtx)', () => {
    test('an empty graph', () => {
      expect(new Graph().dfs('X')).toEqual([]);
    });

    test('a graph with a single vertex', () => {
      var g = new Graph();

      g.addVertex('A');

      expect(g.dfs('A')).toEqual(['A']);
    });

    test('a graph with two vertices', () => {
      var g = new Graph();

      g.addVertex('A');
      g.addVertex('B');
      g.addEdge('A', 'B');

      expect(g.dfs('A')).toEqual(['A', 'B']);
    });

    test('a graph with more nodes and edges', () => {
      var g = new Graph();

      g.addVertex('A')
      g.addVertex('B')
      g.addVertex('C')
      g.addVertex('D')
      g.addVertex('E')
      g.addVertex('F')

      g.addEdge('A','B')
      g.addEdge('A','C')
      g.addEdge('B','D')
      g.addEdge('C','E')
      g.addEdge('D','E')
      g.addEdge('D','F')
      g.addEdge('E','F')

      expect(g.dfs('A')).toEqual(['A', 'B', 'D', 'E', 'C', 'F']);
    });
  });
});
