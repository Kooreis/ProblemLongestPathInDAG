Here is a JavaScript solution using Depth-First Search (DFS) to find the longest path in a Directed Acyclic Graph (DAG):

```javascript
class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adj = Array(vertices).fill().map(() => Array());
    }

    addEdge(u, v) {
        this.adj[u].push(v);
    }

    longestPathUtil(node, visited, dp) {
        visited[node] = true;

        for (let i = 0; i < this.adj[node].length; i++) {
            let v = this.adj[node][i];

            if (!visited[v]) {
                this.longestPathUtil(v, visited, dp);
            }

            dp[node] = Math.max(dp[node], 1 + dp[v]);
        }
    }

    longestPath() {
        let visited = Array(this.vertices).fill(false);
        let dp = Array(this.vertices).fill(0);

        for (let i = 0; i < this.vertices; i++) {
            if (!visited[i]) {
                this.longestPathUtil(i, visited, dp);
            }
        }

        return Math.max(...dp);
    }
}

let g = new Graph(6);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 3);
g.addEdge(3, 4);
g.addEdge(2, 5);
g.addEdge(5, 4);

console.log("Longest Path: " + g.longestPath());
```

This code creates a Graph class with methods to add edges and find the longest path. The longestPath method uses a helper method, longestPathUtil, to perform a depth-first search and keep track of the longest path found so far. The longest path is then returned by the longestPath method. The graph is created and edges are added using the addEdge method. The longest path is then found and printed to the console.