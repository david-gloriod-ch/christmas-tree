// Get argument from command line
const size = parseInt(process.argv[2]);

if (isNaN(size) || size < 1) {
    console.log("Error: invalid size");
    process.exit(1);
}

printTree(size);

function printTree(size, i = 0) {
    if (i === size) return printTrunk(size, size - 1);
    console.log(" ".repeat(size - (i + 1)) + "* "
    .repeat(i + 1).substring(0, (i + 1) * 2 - 1));
    timeout(() => printTree(size, i + 1), 300);
}

function printTrunk(size, i) {
    if (size < 2) return;
    console.log(" ".repeat(size - 1) + "|");
    if (i > 1)
        timeout(() => printTrunk(size, i - 1), 300);
}

function timeout(callback, delay) {
    let id = setTimeout(callback, delay);
    return () => clearTimeout(id);
}
