const works = [
  {
    header: "Sunny hills",
    img: "n/a",
    text: "asdas",
    url: 0,
  },
  {
    header: "Employee site",
    img: "n/a",
    text: "asdasdas",
    url: 0,
  },
];

export function getWork(id: number) {
  works[id].url = id;
  return works[id];
}
