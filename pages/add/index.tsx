import React from "react";
import sunnyhillsimg from "../../public/img/sunnyhills.png";
import classes from "../../styles/add/Add.module.css";

export default function AddIndex() {
  return (
    <form method="POST" action="http://192.168.1.108">
      <label htmlFor="companies">Companies:</label>
      <input type="number" name="companies" id="companies" />
      <br />
      <label htmlFor="employees">Employees:</label>
      <input type="number" name="employees" id="employees" />
      <br />
      <button type="submit">Add</button>
    </form>
  );
}
