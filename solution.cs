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