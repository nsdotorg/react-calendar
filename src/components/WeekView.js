import React, { useState, useRef, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { fetchDataFromIndexedDB as getData, getRows } from "../data/fetch";

const CalendarContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 90vw;
  border-radius: 0;
  padding: 0;
  margin: 0;
`;

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: "80vh",
  },
  tableRow: {
    height: 100,
  },
});

const week = [];
for (let i = 0; i <= 6; i++) {
  week.push(moment().add(i, "days"));
}

const getPreviousWeek = (currentWeek) => {
  const previousWeek = [];
  for (let i = 0; i <= 6; i++) {
    previousWeek.push(currentWeek[i].clone().subtract(7, "days"));
  }
  return previousWeek;
};

const getNextWeek = (currentWeek) => {
  const nextWeek = [];
  for (let i = 0; i <= 6; i++) {
    nextWeek.push(currentWeek[i].clone().add(7, "days"));
  }
  return nextWeek;
};

// component starts here
const WeekView = () => {
  const [currentWeek, setCurrentWeek] = useState(week);
  const [previousWeek, setPreviousWeek] = useState(
    getPreviousWeek(currentWeek)
  );
  const [nextWeek, setNextWeek] = useState(getNextWeek(currentWeek));

  const cellRefs = useRef([]);
  cellRefs.current = [];

  const classes = useStyles();

  const previousWeekHandler = () => {
    cellRefs.current.forEach((el) => {
      el.innerHTML = ``;
    });
    setPreviousWeek(getPreviousWeek(previousWeek));
    setCurrentWeek(getPreviousWeek(currentWeek));
    setNextWeek(currentWeek);
  };

  const nextWeekHandler = () => {
    cellRefs.current.forEach((el) => {
      el.innerHTML = ``;
    });
    setNextWeek(getNextWeek(nextWeek));
    setCurrentWeek(getNextWeek(currentWeek));
    setPreviousWeek(currentWeek);
  };

  const addRefs = (el) => {
    if (el && !cellRefs.current.includes(el)) {
      cellRefs.current.push(el);
    }
  };

  useEffect(() => {
    Promise.all(getData()).then((values) => {
      values.forEach((event) => {
        // console.log(`${event.startTime}:${event.date}:${event.title}`);
        cellRefs.current.forEach((cell) => {
          if (
            event.startTime.toString() &&
            event.date.toString() &&
            event.startTime.toString() === cell.classList[1].split("c")[1] &&
            event.date.toString() === cell.classList[1].split("c")[2]
          ) {
            if (event.duration === 30) {
              cell.innerHTML =
                cell.innerHTML +
                `<p class="event" style="height:50%">${event.title}<br/>(${event.duration} min)</p>`;
            } else if (event.duration === 45) {
              cell.innerHTML =
                cell.innerHTML +
                `<p class="event" style="height:75%">${event.title}<br/>(${event.duration} min)</p>`;
            } else if (event.duration === 60) {
              cell.innerHTML =
                cell.innerHTML +
                `<p class="event" style="height:100%">${event.title}<br/>(${event.duration} min)</p>`;
            }
          }
        });
      });
    });
  }, [currentWeek]);

  const columns = [
    {
      label: (
        <strong>
          {currentWeek[0].format("MMM") !== currentWeek[6].format("MMM")
            ? `${currentWeek[0]
                .format("MMM")
                .toUpperCase()} - ${currentWeek[6]
                .format("MMM")
                .toUpperCase()} ${currentWeek[0].format("YYYY")}`
            : currentWeek[0].format("MMM YYYY").toUpperCase()}
        </strong>
      ),
    },
    {
      label: `${currentWeek[0].format("ddd")} (${currentWeek[0].format("DD")})`,
    },
    {
      label: `${currentWeek[1].format("ddd")} (${currentWeek[1].format("DD")})`,
    },
    {
      label: `${currentWeek[2].format("ddd")} (${currentWeek[2].format("DD")})`,
    },
    {
      label: `${currentWeek[3].format("ddd")} (${currentWeek[3].format("DD")})`,
    },
    {
      label: `${currentWeek[4].format("ddd")} (${currentWeek[4].format("DD")})`,
    },
    {
      label: `${currentWeek[5].format("ddd")} (${currentWeek[5].format("DD")})`,
    },
    {
      label: `${currentWeek[6].format("ddd")} (${currentWeek[6].format("DD")})`,
    },
  ];

  return (
    <>
      <CalendarContainer>
        {/* <h1 style={{ textAlign: "center", color: "#fff" }}>CALENDAR</h1> */}
        <ButtonGroup aria-label="outlined primary button group">
          <Button
            variant="contained"
            color="primary"
            onClick={previousWeekHandler}
          >
            Previous Week
          </Button>
          <Button variant="contained" color="primary" onClick={nextWeekHandler}>
            Next Week
          </Button>
        </ButtonGroup>
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column, index) =>
                    index === 0 ? (
                      <TableCell
                        key={index}
                        align="center"
                        style={{
                          minWidth: 100,
                          backgroundColor: "#FFEB3B",
                          color: "#000",
                        }}
                        width="10%"
                      >
                        {column.label}
                      </TableCell>
                    ) : (
                      <TableCell
                        key={index}
                        align="center"
                        style={{
                          minWidth: 100,
                          backgroundColor: "#1a73e8",
                          color: "#fff",
                        }}
                        width="10%"
                      >
                        {column.label}
                      </TableCell>
                    )
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {getRows().map((row, index) => (
                  <TableRow
                    tabIndex={-1}
                    key={index}
                    className={classes.tableRow}
                  >
                    {columns.map((column, index) =>
                      index === 0 ? (
                        <TableCell style={{ textAlign: "center" }} key={index}>
                          <div className="event-cell event-time">
                            {row <= 12 ? row + ":00 AM" : row + ":00 PM"}
                          </div>
                        </TableCell>
                      ) : (
                        <TableCell style={{ textAlign: "center" }} key={index}>
                          <div
                            className={`event-cell c${row}c${currentWeek[
                              index - 1
                            ].format("YYYY-MM-DD")}`}
                            ref={addRefs}
                          ></div>
                        </TableCell>
                      )
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </CalendarContainer>
    </>
  );
};

export default WeekView;
