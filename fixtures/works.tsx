const works = [
  {
    header: "Sunny hills",
    img: "n/a",
    text: "asdas",
    url: 1,
  },
  {
    header: "Employee site",
    img: "n/a",
    text: "asdasdas",
    url: 2,
  },
];

export const getWork = (id: number) => {
  return works[id];
};

export const getWorks = () => {
  return works;
}