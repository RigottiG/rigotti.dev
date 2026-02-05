---
title: "Understading Graphs with Typescript"
subtitle: "Exploring Graphs with TypeScript."
date: "2023-04-13"
tags: ["Typescript", "Data Structures", "Graph"]
---


Graphs are a fundamental concept in computer science and mathematics. They are used to model relationships and connections between objects or data points. In this article, we will explore the basics of graphs and how to implement them in TypeScript, a popular programming language.

## Graph Basics

A graph is a collection of vertices (also called nodes) and edges. Vertices represent objects or data points, while edges represent the relationships or connections between them. There are two main types of graphs: directed and undirected.

In a directed graph, the edges have a direction and represent a one-way relationship between two vertices. For example, in a social media graph, an edge from vertex A to vertex B could represent A following B, but not vice versa.

In an undirected graph, the edges do not have a direction and represent a two-way relationship between two vertices. For example, in a road network graph, an edge between two cities represents a connection that can be traveled in both directions.

## Implementing Graphs in TypeScript

To implement a graph in TypeScript, we can use an adjacency list or an adjacency matrix. An adjacency list is an array of arrays, where each inner array represents a vertex and its neighbors. An adjacency matrix is a two-dimensional array that represents the edges between vertices.

Here is an example of implementing an adjacency list in TypeScript:

```typescript
class Graph {
  private vertices: number;
  private adjList: Map<number, number[]>;

  constructor(vertices: number) {
    this.vertices = vertices;
    this.adjList = new Map<number, number[]>();
    for (let i = 0; i < this.vertices; i++) {
      this.adjList.set(i, []);
    }
  }

  addEdge(v: number, w: number) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  printGraph() {
    let keys = this.adjList.keys();
    for (let i of keys) {
      let neighbors = this.adjList.get(i);
      let result = "";
      for (let j of neighbors) {
        result += j + " ";
      }
      console.log(i + " -> " + result);
    }
  }
}

let g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 3);
g.printGraph();
```

In this example, we create a Graph class that uses a Map to store the adjacency list. We also define methods to add edges and print the graph.

## Conclusion

Graphs are a powerful tool for modeling relationships and connections between objects or data points. In TypeScript, we can implement graphs using an adjacency list or an adjacency matrix. By understanding the basics of graphs and how to implement them in TypeScript, we can use them to solve complex problems in computer science and beyond.

## Learn more
1. "Introduction to Graph Theory" by Richard J. Trudeau - This book provides a comprehensive introduction to graph theory, covering both basic and advanced topics.

2. "Graph Algorithms" by Shimon Even - This book focuses on algorithms for graph traversal, shortest path problems, minimum spanning trees, and network flows.

3. "Data Structures and Algorithms in JavaScript" by Michael McMillan - This book provides an introduction to data structures and algorithms, including graphs, using the JavaScript programming language.

4. "Graph Theory and Complex Networks: An Introduction" by Maarten van Steen - This book provides an introduction to graph theory and complex networks, covering topics such as social networks, the web graph, and the small-world phenomenon.
