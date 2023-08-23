import {
  wrap_object,
  parse_path_parameters,
  array_buffer_to_string,
  async_wait,
  merge_relative_paths,
  get_all_property_descriptors,
} from "./operators";


// wrap_object test
const sampleA = {
  i: 4
};
const sampleB = {
  a: 1,
  b: "me",
  c: [
    1,2,3
  ],
  d: {
    e: 4,
    f: "me",
    g: [
      {
        a: 4,
        b: 3
      }
    ]
  }
};

console.log("wrap_object test started");
console.log("before", sampleA, sampleB);
wrap_object(sampleA, sampleB);
console.log("after", sampleA, sampleB);
console.log("wrap_object test done");


// parse_path_parameters
const route = "ddd/:id/:ev/:co";
const res = parse_path_parameters(route);
console.log("parse_path_parameters test started");
console.log("ddd/:id/:ev/:co", res);
console.log("parse_path_parameters test done");

// array_buffer_to_string
const ab = new ArrayBuffer(8);
const view = new Int8Array(ab);
const str = 'qwertyuiopd';
for (const index of [...Array(ab.byteLength).keys()]) {
  view[index] = str.charCodeAt(index);
}

const abString = array_buffer_to_string(ab);
console.log("array_buffer_to_string test started");
console.log(abString);
console.log("array_buffer_to_string test done");



(async function async_wait_test() {
  console.log("async_wait test started");
  const now = (new Date()).getTime();
  console.log(now);
  await async_wait(5000);
  const later = (new Date()).getTime();
  console.log(later);
  console.log("async_wait test done");
})();


console.log("merge_relative_paths test started");
[
  {base_path: "/", new_path: "/"},
  {base_path: "api", new_path: "docs"},
  {base_path: "/", new_path: "docs"},
  {base_path: "api", new_path: "/"},
  {base_path: "api/", new_path: "docs"},
].forEach(
  ({base_path, new_path}) => console.log(merge_relative_paths(base_path, new_path))
);
console.log("merge_relative_paths test ended");



console.log("get_all_property_descriptors test started");
class Forest {
  p1 = 8;
  p2 = 9;
}

class Tree extends Forest {
  name: string;
  trx: TreeX;
  constructor(name: string, other: string) {
    super();
    this.name = name;
    this.trx = new TreeX(other);
  }
}

class TreeX {
  name: string
  constructor(name: string) {
    this.name = name;
  }
}


console.log(
  get_all_property_descriptors(
  {
    a: 1,
    b: new Tree("timi", "adesina"),
    c: 4,
    d: {
      e: '1',
      f: 'g'
    }
  }
));
console.log("get_all_property_descriptors test done");



