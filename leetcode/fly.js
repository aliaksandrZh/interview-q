const graph = {
  A: ["B", "D"],
  B: ["C", "N", "Z"],
  D: ["E", "F"],
  F: ["S"],
};

const fetchFlights = async (from) => {
  if (!graph[from]) {
    throw Error("No way");
  }
  return graph[from];
};

const findPath = async (from, to) => {
  try {
    const node = await fetchFlights(from);
    const containsDestination = node.includes(to);
    if (containsDestination) {
      return [from, to];
    }

    const path = await Promise.any(node.map((n) => findPath(n, to)));
    return [from, ...path];
  } catch (error) {
    throw error;
  }
};

const fly = async () => {
  console.log(await findPath("A", "N"));
  console.log(await findPath("A", "S"));
  console.log(await findPath("D", "S"));
  console.log(await findPath("B", "S"));
};
fly();
// const graph = {
//   A: ["B", "D"],
//   B: ["A", "C", "N", "Z"],
//   D: ["A", "E", "F"],
//   F: ["S", "D"],
// };
// const findPath = (from, to) => {
//   const visited = new Set();

//   const traverse = (from, to) => {
//     visited.add(from);

//     const neighbors = graph[from];

//     if (!neighbors) {
//       return [];
//     }

//     const containsDestination = neighbors.includes(to);
//     if (containsDestination) {
//       return [from, to];
//     }

//     for (const n of neighbors) {
//       if (visited.has(n)) {
//         continue;
//       }

//       const path = traverse(n, to);
//       if (path.length) {
//         return [from, ...path];
//       }
//     }

//     return [];
//   };

//   return traverse(from, to);
// };

// console.log(findPath("A", "N"));
// console.log(findPath("A", "S"));
// console.log(findPath("D", "S"));
// console.log(findPath("B", "S"));
