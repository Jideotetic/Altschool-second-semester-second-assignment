import { NavLink, Outlet } from "react-router-dom";

const schools = [
  {
    name: "Altschool Africa",
    year: "2022-2023",
    course: "Frontend Engineering",
    details: ""
  },
  {
    name: "Usmanu Danfodiyo University",
    year: "2013-2017",
    course: "Biochemistry",
    details: ""
  }
];

export default function Schools() {
  return (
    <>
      <h2>Schools Attended</h2>
      <p>Click on each school to see nested route in action</p>
      <ul>
        {schools.map((school) => {
          return (
            <li key={school.name}>
              <NavLink to={`/schools/${school.name}`}>{school.name}</NavLink>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
}

export { schools };
