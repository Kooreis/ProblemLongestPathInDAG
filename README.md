# Question: How do you find the longest path in a Directed Acyclic Graph (DAG)? JavaScript Summary

The JavaScript code provided is a solution to find the longest path in a Directed Acyclic Graph (DAG) using the Depth-First Search (DFS) algorithm. The code defines a Graph class with methods for adding edges between vertices and finding the longest path. The Graph class constructor initializes an adjacency list for each vertex and a 'visited' array to keep track of visited vertices during the DFS. The 'addEdge' method adds an edge between two vertices. The 'longestPathUtil' method is a helper function that performs the DFS on each vertex, updating the longest path length for each vertex in a dynamic programming (dp) array. The 'longestPath' method initializes the 'visited' and 'dp' arrays, performs the DFS on each vertex using 'longestPathUtil', and finally returns the maximum value in the 'dp' array, which represents the longest path in the graph. The code then creates a Graph instance, adds edges between vertices, and prints the longest path length to the console.

---

# TypeScript Differences

The TypeScript version of the solution is similar to the JavaScript version in terms of the overall approach to solving the problem. Both versions create a Graph class with methods to add edges and find the longest path. However, there are some differences in the implementation details and language features used.

1. Type Annotations: TypeScript version uses type annotations to ensure type safety. For example, the `vertices` property is explicitly declared as a number, the `adj` property is declared as an array of arrays of numbers, and the parameters of the methods are also given specific types. This helps to prevent type-related errors.

2. Different Method: The TypeScript version uses a different method to find the longest path. It uses the topological sort method, which is a linear ordering of the vertices of the graph such that for every directed edge u -> v, vertex u comes before v in the ordering. This is different from the JavaScript version, which uses a depth-first search.

3. Different Initialization: The TypeScript version initializes distances to all vertices as minus infinite and distance to source as 0, then it finds a topological sorting of the graph. This is different from the JavaScript version, which initializes a visited array and a dp array with all elements as false and 0 respectively.

4. Different Output: The TypeScript version prints the longest distance from the source vertex to all other vertices, while the JavaScript version prints the longest path in the graph.

5. Null Safety: The TypeScript version uses the `as number` type assertion when shifting an element from the stack. This is to ensure that the value is not `undefined`, which could be the case if the stack were empty. This is a feature not present in the JavaScript version.

---

# C++ Differences

The C++ version of the solution also uses a Graph class with methods to add edges and find the longest path. However, there are several differences in the implementation and language features used:

1. Data Structures: In the JavaScript version, the adjacency list is represented as an array of arrays. In the C++ version, it is represented as an array of lists of pairs, where each pair contains a vertex and a weight. This is because the C++ version considers the weights of the edges in the graph, while the JavaScript version does not.

2. Memory Management: In C++, memory for the adjacency list and the visited array is allocated dynamically using the new operator. In JavaScript, memory management is handled automatically.

3. Iteration: In JavaScript, iteration over arrays is done using for loops and array methods like map and fill. In C++, iteration over arrays and lists is done using for loops and iterators.

4. Output: The JavaScript version returns the length of the longest path, while the C++ version prints the longest distance from a source vertex to all other vertices.

5. Error Handling: The C++ version uses INT_MIN to represent a non-existent path, and checks for this value when updating distances. The JavaScript version does not have a similar check.

6. Method Parameters: The longestPath method in the JavaScript version does not take any parameters, and computes the longest path over all vertices. The longestPath method in the C++ version takes a source vertex as a parameter, and computes the longest path from that vertex.

7. The C++ version uses a stack to keep track of the vertices to be visited, while the JavaScript version uses a recursive helper function for the depth-first search.

---
