import Work from "../../components/work/Work";
import sunnyhillsimg from "../../public/img/sunnyhills.png";
import classes from "../../styles/work/WorkIndex.module.css";

export default function WorkIndex() {
  const header = "Sunny Hills";
  const img = "https://source.unsplash.com/random/1920x1080/?design";
  const url = "/";
  const text =
    "Sunny hills was produced by me alone during one of the database and API courses where we made requests to an API to fetch and store data in a database. I made a fictional website which include a ordering system, modal and loading animation during payment.";
  const tagText = [
    "HTML",
    "CSS",
    "JavaScript",
    "Node.JS",
    "JQuery",
    "TypeScript",
  ];
  return (
    <>
      <div className={classes.container}>
        <h1>All work</h1>
        <div className={classes.works}>
          <Work
            header={header}
            img={sunnyhillsimg}
            url={url}
            text={text}
            tags={["Native CSS", "API", "SQL"]}
          />
        </div>
      </div>
    </>
  );
}
