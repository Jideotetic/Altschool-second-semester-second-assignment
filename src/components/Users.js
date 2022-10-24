import { useEffect, useState } from "react";
import "../styles.css";

export default function Users() {
  let [users, setUsers] = useState(null);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);
  let [page, setPage] = useState(1);

  const PER_PAGE = 1;
  const pages = 10;
  const skip = page * PER_PAGE - PER_PAGE;

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("");
  }, []);

  return (
    <>
      <p>
        List of users gotten from{" "}
        <code>
          <a href="https://www.randomuser.me">randomuser.me</a>
        </code>{" "}
        API
      </p>

      <p>
        {loading && <span>Loading...</span>}
        {error && (
          <span>{`There is a problem fetching the users data - ${error}`}</span>
        )}
      </p>
      <ul>
        {users &&
          users?.results.slice(skip, skip + PER_PAGE).map((user, id) => {
            const name = `${user.name.title} ${user.name.last} ${user.name.first}`;
            return (
              <li key={name.toLowerCase()} style={{ listStyleType: "none" }}>
                <img src={user.picture.large} alt="A random user pictures" />
                <br />
                {name}
              </li>
            );
          })}
      </ul>

      <p className="pagination">
        Pages: {page} of {pages}
      </p>

      <span>
        {
          <button
            disabled={page <= 1}
            aria-disabled={page <= 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            prev
          </button>
        }
        {Array.from({ length: pages }, (value, index) => index + 1).map(
          (user) => (
            <button onClick={() => setPage(user)}>{user}</button>
          )
        )}
        {
          <button
            disabled={page >= pages}
            aria-disabled={page >= pages}
            onClick={() => setPage((prev) => prev + 1)}
            style={{ marginLeft: "5px" }}
          >
            next
          </button>
        }
      </span>
    </>
  );
}
