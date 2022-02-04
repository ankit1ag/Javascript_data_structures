const testMatrix = [
  [1, 3],
  [0],
  [3, 8],
  [0,4, 5, 2],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2]
];

/**

1  4-6-7
|  |
0 -3-5 
   |
   2-8
**/

const traversalDFS = function(matrix) {
	const values = [];
	const seen = {};
	dfs(matrix,seen,values,0);
	return values;
}

const dfs = function(matrix,seen,values,pos){
	if(seen[pos]){
		return;
	}
	seen[pos] = true;
	values.push(pos);
	const currentV = matrix[pos];
	for(let i=0;i<currentV.length;i++){
		dfs(matrix,seen,values,currentV[i]);
	}
}

console.log(JSON.stringify(traversalDFS(testMatrix)));
