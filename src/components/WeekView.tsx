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
  width: 80vw;
  overflow: hidden;
  border-radius: 0;
  padding: 0;
  margin: 0;
  box-shadow: 0 10px 10px #1a1c23;
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

const week: moment.Moment[] = [];
for (let i = 0; i <= 6; i++) {
  week.push(moment().add(i, "days"));
}

const getPreviousWeek = (currentWeek: moment.Moment[]) => {
  const previousWeek = [];
  for (let i = 0; i <= 6; i++) {
    previousWeek.push(currentWeek[i].clone().subtract(7, "days"));
  }
  return previousWeek;
};

const getNextWeek = (currentWeek: moment.Moment[]) => {
  const nextWeek = [];
  for (let i = 0; i <= 6; i++) {
    nextWeek.push(currentWeek[i].clone().add(7, "days"));
  }
  return nextWeek;
};

const WeekView = () => {
  const [currentWeek, setCurrentWeek] = useState(week);
  const [previousWeek, setPreviousWeek] = useState(
    getPreviousWeek(currentWeek)
  );
  const [nextWeek, setNextWeek] = useState(getNextWeek(currentWeek));

  const classes = useStyles();

  const previousWeekHandler = () => {
    cellRefs.current.forEach((el) => {
      let cellNode = el as HTMLElement;
      cellNode.innerHTML = "";
    });
    setPreviousWeek(getPreviousWeek(previousWeek));
    setCurrentWeek(getPreviousWeek(currentWeek));
    setNextWeek(currentWeek);
  };

  const nextWeekHandler = () => {
    cellRefs.current.forEach((el) => {
      let cellNode = el as HTMLElement;
      cellNode.innerHTML = "";
    });
    setNextWeek(getNextWeek(nextWeek));
    setCurrentWeek(getNextWeek(currentWeek));
    setPreviousWeek(currentWeek);
  };

  const cellRefs = useRef([]);
  cellRefs.current = [];

  const addRefs = (el: HTMLDivElement): void => {
    if (el && !cellRefs.current.includes(el as never)) {
      cellRefs.current.push(el as never);
    }
  };

  useEffect(() => {
    Promise.all(getData()).then((values) => {
      values.forEach((event) => {
        cellRefs.current.forEach((cell: HTMLElement) => {
          if (
            event !== null &&
            event.startTime.toString() === cell.classList[1].split("c")[1] &&
            event.date.toString() === cell.classList[1].split("c")[2]
          ) {
            if (event.duration === 30) {
              let cellNode = cell as HTMLElement;
              cellNode.innerHTML =
                cellNode.innerHTML +
                `<p class="event" style="height:50%">${event.title}<br/>(${event.duration} min)</p>`;
            } else if (event.duration === 45) {
              let cellNode = cell as HTMLElement;
              cellNode.innerHTML =
                cellNode.innerHTML +
                `<p class="event" style="height:75%">${event.title}<br/>(${event.duration} min)</p>`;
            } else if (event.duration === 60) {
              let cellNode = cell as HTMLElement;
              cellNode.innerHTML =
                cellNode.innerHTML +
                `<p class="event" style="height:100%">${event.title}<br/>(${event.duration} min)</p>`;
            }
          }
        });
      });
    });
  }, [currentWeek, previousWeek, nextWeek]);

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
      <h1
        style={{
          textAlign: "center",
          color: "#000",
          marginBottom: "1rem",
          width: "100%",
        }}
      >
        CALENDAR
      </h1>
      <ButtonGroup aria-label="outlined default button group">
        <Button
          variant="contained"
          color="default"
          onClick={previousWeekHandler}
        >
          Previous Week
        </Button>
        <Button variant="contained" color="default" onClick={nextWeekHandler}>
          Next Week
        </Button>
      </ButtonGroup>
      <CalendarContainer>
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
                          backgroundColor: "#1a1c23",
                          color: "#fff",
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
                          backgroundColor: "#1a1c23",
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
