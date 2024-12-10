Here is a TypeScript solution for finding the longest path in a Directed Acyclic Graph (DAG):

```typescript
class Graph {
    private vertices: number;
    private adj: Array<Array<number>>;

    constructor(vertices: number) {
        this.vertices = vertices;
        this.adj = new Array(vertices).fill(0).map(() => new Array());
    }

    addEdge(u: number, v: number) {
        this.adj[u].push(v);
    }

    topologicalSortUtil(v: number, visited: Array<boolean>, stack: Array<number>) {
        visited[v] = true;

        for (let i of this.adj[v]) {
            if (!visited[i]) {
                this.topologicalSortUtil(i, visited, stack);
            }
        }

        stack.unshift(v);
    }

    longestPath(s: number) {
        let stack: Array<number> = [];
        let visited: Array<boolean> = new Array(this.vertices).fill(false);

        for (let i = 0; i < this.vertices; i++) {
            if (!visited[i]) {
                this.topologicalSortUtil(i, visited, stack);
            }
        }

        let dist: Array<number> = new Array(this.vertices).fill(Number.NEGATIVE_INFINITY);
        dist[s] = 0;

        while (stack.length > 0) {
            let i = stack.shift() as number;

            if (dist[i] !== Number.NEGATIVE_INFINITY) {
                for (let j of this.adj[i]) {
                    if (dist[j] < dist[i] + 1) {
                        dist[j] = dist[i] + 1;
                    }
                }
            }
        }

        for (let i = 0; i < this.vertices; i++) {
            if (dist[i] === Number.NEGATIVE_INFINITY) {
                console.log("INF");
            } else {
                console.log(dist[i]);
            }
        }
    }
}

let g = new Graph(6);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(1, 2);
g.addEdge(3, 2);
g.addEdge(2, 4);
g.addEdge(4, 5);
g.addEdge(2, 5);

console.log("Following are longest distances from source vertex 1");
g.longestPath(1);
```

This solution uses the topological sort method to find the longest path in a Directed Acyclic Graph (DAG). The topological sort is used to linearly order the vertices of the graph such that for every directed edge u -> v, vertex u comes before v in the ordering. The longest path in the graph is then found by initializing distances to all vertices as minus infinite and distance to source as 0, then it finds a topological sorting of the graph. Topological Sorting of a graph represents a linear ordering of the graph. Once a topological order is established, the longest path is determined by processing all vertices in topological order.