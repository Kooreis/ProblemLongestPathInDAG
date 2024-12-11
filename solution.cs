class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adj = Array(vertices).fill().map(() => Array());
    }

    addEdge(u, v) {
        this.adj[u].push(v);
    }
}