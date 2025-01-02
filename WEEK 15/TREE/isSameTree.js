function isSameTree(tree1, tree2) {
    // if both tree are empty , or they are same;
    if (tree1 === null && tree2 === null) return true;

    // if one tree is null and other is not, they are not same
    if (tree1 === null || tree2 === null) return false;

    // if values are not same
    if (tree1.val !== tree2.val) return false;

    return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right);
}

// ----------------------------------------------------------------------------------- //
const tree1 = {
    val: 1,
    left: {val: 2, left: null, right: null},
    right: {val: 3, left: null, right: null}
};

const tree2 = {
    val: 1,
    left: {val: 2, left: null, right: null},
    right: {val: 3, left: null, right: null}
};

console.log(isSameTree(tree1, tree2)); // Output: true