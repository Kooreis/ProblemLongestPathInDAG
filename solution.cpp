```cpp
#include<bits/stdc++.h>
using namespace std;

class Graph {
    int V;
    list<pair<int, int>>* adj;

public:
    Graph(int V);
    void addEdge(int u, int v, int weight);
    void longestPath(int s);
};

Graph::Graph(int V) {
    this->V = V;
    adj = new list<pair<int, int>>[V];
}

void Graph::addEdge(int u, int v, int weight) {
    adj[u].push_back(make_pair(v, weight));
}

void Graph::longestPath(int s) {
    stack<int> Stack;
    int dist[V];

    bool* visited = new bool[V];
    for (int i = 0; i < V; i++)
        visited[i] = false;

    for (int i = 0; i < V; i++)
        if (visited[i] == false)
            for (auto i = adj[i].begin(); i != adj[i].end(); ++i) {
                int v = (*i).first;
                if (!visited[v])
                    Stack.push(v);
            }

    fill(dist, dist + V, INT_MIN);
    dist[s] = 0;

    while (!Stack.empty()) {
        int u = Stack.top();
        Stack.pop();

        list<pair<int, int>>::iterator i;
        if (dist[u] != INT_MIN) {
            for (i = adj[u].begin(); i != adj[u].end(); ++i)
                if (dist[i->first] < dist[u] + i->second)
                    dist[i->first] = dist[u] + i->second;
        }
    }

    for (int i = 0; i < V; i++)
        (dist[i] == INT_MIN) ? cout << "INF " : cout << dist[i] << " ";
}

int main() {
    Graph g(6);
    g.addEdge(0, 1, 5);
    g.addEdge(0, 2, 3);
    g.addEdge(1, 3, 6);
    g.addEdge(1, 2, 2);
    g.addEdge(2, 4, 4);
    g.addEdge(2, 5, 2);
    g.addEdge(2, 3, 7);
    g.addEdge(3, 5, 1);
    g.addEdge(3, 4, -1);
    g.addEdge(4, 5, -2);

    int s = 1;
    cout << "Following are longest distances from source vertex " << s << " \n";
    g.longestPath(s);

    return 0;
}
```