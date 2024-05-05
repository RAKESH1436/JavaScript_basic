const myObjet1 = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by apple",
};
for (const key in myObjet1) {
  console.log(`${key}----${myObjet1[key]}`);
}
const programing = ["js", "rb", "py", "java", "cpp"];
for (const key in programing) {
  console.log(programing[key]);
}
