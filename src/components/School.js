import { useParams } from "react-router-dom";
import { schools } from "./Schools";

export default function School() {
  const { sch } = useParams();
  console.log(sch);
  const info = schools.filter((school) => school.name === sch)[0];
  if (!info) {
    return <p>Not my school</p>;
  }
  return (
    <>
      <p>
        I studied {info.course} in {info.name} from the year {info.year}{" "}
      </p>
    </>
  );
}
