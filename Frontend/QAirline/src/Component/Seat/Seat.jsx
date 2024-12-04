import { Divider, Button, Typography, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCustomer, getSeatMap } from "../../State/Seat/Action";

const Seat = () => {
  const seatMap = useSelector((store) => store.seat.seatMap);
  const flight = useSelector((store) => store.flight);
  const customers = useSelector((store) => store.seat.customers);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [status, setStatus] = useState("outbound");

  // const userClass =
  //   status === "outbound"
  //     ? flight.selectedOutboundFlight.ticket.ticketClass
  //     : flight.selectedInboundFlight.ticket.ticketClass;

  // let userClassVIE;
  // switch (userClass) {
  //   case "first":
  //     userClassVIE = "nhất";
  //     break;
  //   case "bussiness":
  //     userClassVIE = "thương gia";
  //     break;
  //   case "economy":
  //     userClassVIE = "phổ thông";
  //     break;
  //   default:
  //     break;
  // }

  // //ghế đã có người chọn
  // const seatIsTakenFirst = ["A1", "B1", "A6", "D6"];
  // const seatIsTakenBussiness = ["A1", "B1", "C1"];
  // const seatIsTakenEconomy = ["A6", "B6", "D6"];

  const [seatState, setSeatState] = useState({
    userClass: "",
    userClassVIE: "",
    seatIsTakenFirst: [],
    seatIsTakenBussiness: [],
    seatIsTakenEconomy: [],
  });

  const [userChoices, setUserChoices] = useState([]);

  useEffect(() => {
    if (status === "outbound")
      dispatch(
        getSeatMap({
          flightId: flight.selectedOutboundFlight.flightInstance.flightId,
          date: flight.selectedOutboundFlight.flight.departureTime,
          jwt,
        })
      );
    else
      dispatch(
        getSeatMap({
          flightId: flight.selectedInboundFlight.flightInstance.flightId,
          date: flight.selectedInboundFlight.flight.departureTime,
          jwt,
        })
      );
  }, [status]);

  useEffect(() => {
    let newUserClass =
      status === "outbound"
        ? flight.selectedOutboundFlight.ticket.ticketClass
        : flight.selectedInboundFlight.ticket.ticketClass;

    switch (newUserClass) {
      case "FIRST_CLASS":
        newUserClass = "first";
        break;
      case "BUSINESS_CLASS":
        newUserClass = "bussiness";
        break;
      case "ECONOMY_CLASS":
        newUserClass = "economy";
        break;
      default:
        break;
    }

    let newUserClassVIE;
    switch (newUserClass) {
      case "first":
        newUserClassVIE = "nhất";
        break;
      case "bussiness":
        newUserClassVIE = "thương gia";
        break;
      case "economy":
        newUserClassVIE = "phổ thông";
        break;
      default:
        break;
    }

    //ghế đã có người chọn
    const newSeatIsTakenFirst = [];
    const newSeatIsTakenBussiness = [];
    const newSeatIsTakenEconomy = [];

    seatMap.seats?.forEach((seat) => {
      switch (seat.ticket.ticketClass) {
        case "FIRST_CLASS":
          newSeatIsTakenFirst.push(seat.seatNumber);
          break;
        case "BUSINESS_CLASS":
          newSeatIsTakenBussiness.push(seat.seatNumber);
          break;
        case "ECONOMY_CLASS":
          newSeatIsTakenEconomy.push(seat.seatNumber);
          break;
        default:
          break;
      }
    });

    setSeatState({
      userClass: newUserClass,
      userClassVIE: newUserClassVIE,
      seatIsTakenFirst: newSeatIsTakenFirst,
      seatIsTakenBussiness: newSeatIsTakenBussiness,
      seatIsTakenEconomy: newSeatIsTakenEconomy,
    });

    setUserChoices([]);
  }, [seatMap]);

  // const economyRows = 14;
  // const economyCols = 8;
  // const bussinessRows = 12;
  // const bussinessCols = 6;
  // const firstRows = 6;
  // const firstCols = 2;

  //thay đổi khi ấn button chọn ghế
  const handleSeatChange = (colIndex, rowIndex) => {
    const seatID = `${String.fromCharCode(65 + colIndex)}${rowIndex + 1}`;

    if (
      (seatState.seatIsTakenFirst.includes(seatID) &&
        seatState.userClass === "first") ||
      (seatState.seatIsTakenBussiness.includes(seatID) &&
        seatState.userClass === "bussiness") ||
      (seatState.seatIsTakenEconomy.includes(seatID) &&
        seatState.userClass === "economy")
    )
      return;

    if (userChoices.includes(seatID)) {
      setUserChoices(userChoices.filter((choice) => choice !== seatID));
    } else {
      if (userChoices.length < customers.length)
        setUserChoices([...userChoices, seatID]);
    }
  };

  //kiểm tra trạng thái ghế
  const isSeatSelected = (colIndex, rowIndex) => {
    const seatId = `${String.fromCharCode(65 + colIndex)}${rowIndex + 1}`;
    return userChoices.includes(seatId);
  };

  //ấn tiếp tục

  const handleSubmit = () => {
    console.log(seatState.userClass + " class: " + userChoices);
    if (userChoices.length < customers.length) {
      console.log("chọn thiếu");
      return;
    }
    const reqData = customers.map((customer, index) => ({
      ...customer,
      seatNumber: { ...customer.seatNumber, [status]: userChoices[index] },
    }));
    dispatch(addCustomer(reqData));
    if (status === "outbound") {
      if (flight.selectedOutboundFlight.flight.flightType === "round-trip") {
        setStatus("inbound");
      } else navigate("/preview");
    } else navigate("/preview");
  };

  return (
    <div className="m-auto mb-5 mt-5 p-5 place-items-center relative bg-indigo-50">
      <Typography variant="h3" textAlign={"center"} gutterBottom>
        Chọn chỗ ngồi{" "}
        {status === "outbound" ? "chuyến bay đi" : "chuyến bay về"}
      </Typography>
      <div className="place-items-center">
        {/* ghế hạng nhất */}
        <div className="flex flex-col justify-center ml-5 mr-5">
          <Typography variant="body1" align="center" gutterBottom>
            Hạng nhất
          </Typography>
          <div
            className="grid gap-x-1 items-center "
            style={{
              gridTemplateColumns: `30px repeat(${seatMap.airplane?.firstClassCol}, 30px)`,
            }}
          >
            {/* hiển thị id của các cột */}
            <div></div>
            {Array.from({ length: seatMap.airplane?.firstClassCol }).map(
              (_, index) => (
                <div className="text-center font-bold">
                  {String.fromCharCode(65 + index)}
                </div>
              )
            )}
            {/* Hiển thị id các hàng và các seat */}
            {Array.from({ length: seatMap.airplane?.firstClassRow }).map(
              (_, rowIndex) => (
                <>
                  <div className="text-center font-bold">{rowIndex + 1}</div>
                  {Array.from({ length: seatMap.airplane?.firstClassCol }).map(
                    (_, colIndex) => (
                      <Button
                        key={`seat-${colIndex}-${rowIndex}`}
                        variant={
                          seatState.seatIsTakenFirst.includes(
                            `${String.fromCharCode(65 + colIndex)}${
                              rowIndex + 1
                            }`
                          )
                            ? "contained"
                            : isSeatSelected(colIndex, rowIndex) &&
                              seatState.userClass === "first"
                            ? "contained"
                            : "outlined"
                        }
                        color={
                          seatState.seatIsTakenFirst.includes(
                            `${String.fromCharCode(65 + colIndex)}${
                              rowIndex + 1
                            }`
                          )
                            ? "inherit"
                            : isSeatSelected(colIndex, rowIndex) &&
                              seatState.userClass === "first"
                            ? "primary"
                            : "default"
                        }
                        sx={{
                          width: "30px",
                          height: "30px",
                          margin: "2px",
                          minWidth: "20px",
                          padding: 0,
                          borderRadius: "50%",
                          fontSize: "0.7rem",
                        }}
                        onClick={() => {
                          if (
                            !seatState.seatIsTakenFirst.includes(
                              `${String.fromCharCode(65 + colIndex)}${
                                rowIndex + 1
                              }`
                            )
                          ) {
                            if (seatState.userClass === "first")
                              handleSeatChange(colIndex, rowIndex);
                          }
                        }}
                      >
                        {/* hiển thị seat id */}
                        {String.fromCharCode(65 + colIndex)}
                        {rowIndex + 1}
                      </Button>
                    )
                  )}
                </>
              )
            )}
          </div>
        </div>

        {/* <Divider variant="middle" flexItem className="bg-black" */}

        {/* ghế thương gia */}
        <div className="flex flex-col justify-center mt-5 mb-5">
          <Typography variant="body1" align="center" gutterBottom>
            Hạng thương gia
          </Typography>
          <div
            className="grid gap-x-1 items-center "
            style={{
              gridTemplateColumns: `30px repeat(${seatMap.airplane?.businessCol}, 30px)`,
            }}
          >
            {/* hiển thị id của các cột */}
            <div></div>
            {Array.from({ length: seatMap.airplane?.businessCol }).map(
              (_, index) => (
                <div className="text-center font-bold">
                  {String.fromCharCode(65 + index)}
                </div>
              )
            )}
            {/* Hiển thị id các hàng và các seat */}
            {Array.from({ length: seatMap.airplane?.businessRow }).map(
              (_, rowIndex) => (
                <>
                  <div className="text-center font-bold">{rowIndex + 1}</div>
                  {Array.from({ length: seatMap.airplane?.businessCol }).map(
                    (_, colIndex) => (
                      <Button
                        key={`seat-${colIndex}-${rowIndex}`}
                        variant={
                          seatState.seatIsTakenBussiness.includes(
                            `${String.fromCharCode(65 + colIndex)}${
                              rowIndex + 1
                            }`
                          )
                            ? "contained"
                            : isSeatSelected(colIndex, rowIndex) &&
                              seatState.userClass === "bussiness"
                            ? "contained"
                            : "outlined"
                        }
                        color={
                          seatState.seatIsTakenBussiness.includes(
                            `${String.fromCharCode(65 + colIndex)}${
                              rowIndex + 1
                            }`
                          )
                            ? "inherit"
                            : isSeatSelected(colIndex, rowIndex) &&
                              seatState.userClass === "bussiness"
                            ? "primary"
                            : "default"
                        }
                        sx={{
                          width: "30px",
                          height: "30px",
                          margin: "2px",
                          minWidth: "20px",
                          padding: 0,
                          borderRadius: "50%",
                          fontSize: "0.7rem",
                        }}
                        onClick={() => {
                          if (
                            !seatState.seatIsTakenBussiness.includes(
                              `${String.fromCharCode(65 + colIndex)}${
                                rowIndex + 1
                              }`
                            )
                          ) {
                            if (seatState.userClass === "bussiness")
                              handleSeatChange(colIndex, rowIndex);
                          }
                        }}
                      >
                        {/* hiển thị seat id */}
                        {String.fromCharCode(65 + colIndex)}
                        {rowIndex + 1}
                      </Button>
                    )
                  )}
                </>
              )
            )}
          </div>
        </div>

        {/* <Divider variant="middle" flexItem className="bg-black" /> */}

        {/* ghế phổ thông */}
        <div className="flex flex-col justify-center mt-5 mb-5">
          <Typography variant="body1" align="center" gutterBottom>
            Hạng phổ thông
          </Typography>
          <div
            className="grid gap-x-1 items-center "
            style={{
              gridTemplateColumns: `30px repeat(${seatMap.airplane?.economyCol}, 30px)`,
            }}
          >
            {/* hiển thị id của các cột */}
            <div></div>
            {Array.from({ length: seatMap.airplane?.economyCol }).map(
              (_, index) => (
                <div className="text-center font-bold">
                  {String.fromCharCode(65 + index)}
                </div>
              )
            )}
            {/* Hiển thị id các hàng và các seat */}
            {Array.from({ length: seatMap.airplane?.economyRow }).map(
              (_, rowIndex) => (
                <>
                  <div className="text-center font-bold">{rowIndex + 1}</div>
                  {Array.from({ length: seatMap.airplane?.economyCol }).map(
                    (_, colIndex) => (
                      <Button
                        key={`seat-${colIndex}-${rowIndex}`}
                        variant={
                          seatState.seatIsTakenEconomy.includes(
                            `${String.fromCharCode(65 + colIndex)}${
                              rowIndex + 1
                            }`
                          )
                            ? "contained"
                            : isSeatSelected(colIndex, rowIndex) &&
                              seatState.userClass === "economy"
                            ? "contained"
                            : "outlined"
                        }
                        color={
                          seatState.seatIsTakenEconomy.includes(
                            `${String.fromCharCode(65 + colIndex)}${
                              rowIndex + 1
                            }`
                          )
                            ? "inherit"
                            : isSeatSelected(colIndex, rowIndex) &&
                              seatState.userClass === "economy"
                            ? "primary"
                            : "default"
                        }
                        sx={{
                          width: "30px",
                          height: "30px",
                          margin: "2px",
                          minWidth: "20px",
                          padding: 0,
                          borderRadius: "50%",
                          fontSize: "0.7rem",
                        }}
                        onClick={() => {
                          if (
                            !seatState.seatIsTakenEconomy.includes(
                              `${String.fromCharCode(65 + colIndex)}${
                                rowIndex + 1
                              }`
                            )
                          ) {
                            if (seatState.userClass === "economy")
                              handleSeatChange(colIndex, rowIndex);
                          }
                        }}
                      >
                        {/* hiển thị seat id */}
                        {String.fromCharCode(65 + colIndex)}
                        {rowIndex + 1}
                      </Button>
                    )
                  )}
                </>
              )
            )}
          </div>
        </div>
      </div>

      <div className="m-5 flex">
        <strong>Ghế đã chọn (hạng {seatState.userClassVIE}): </strong>
        <p>{userChoices.length === 0 ? "Chưa chọn" : userChoices.join(", ")}</p>
      </div>

      <Button
        sx={{
          background: "linear-gradient(to right, #B993D6, #8CA6DB)",
        }}
        className="mt-5"
        variant="contained"
        onClick={handleSubmit}
      >
        Tiếp tục
      </Button>
      {/* <Alert severity="error" className="mt-5">
        This is an error Alert.
      </Alert> */}
      <div className="absolute top-24 left-3 flex flex-col gap-1">
        <div>
          <Button
            className=""
            variant={"contained"}
            color={"primary"}
            sx={{
              width: "30px",
              height: "30px",
              margin: "2px",
              minWidth: "20px",
              padding: 0,
              borderRadius: "50%",
              fontSize: "0.7rem",
            }}
          >
            A
          </Button>
          <label> Ghế bạn chọn</label>
        </div>

        <div>
          <Button
            className=""
            variant={"contained"}
            color={"inherit"}
            sx={{
              width: "30px",
              height: "30px",
              margin: "2px",
              minWidth: "20px",
              padding: 0,
              borderRadius: "50%",
              fontSize: "0.7rem",
            }}
          >
            B
          </Button>
          <label> Đã có người chọn</label>
        </div>

        <div>
          <Button
            className=""
            variant={"outlined"}
            color={"default"}
            sx={{
              width: "30px",
              height: "30px",
              margin: "2px",
              minWidth: "20px",
              padding: 0,
              borderRadius: "50%",
              fontSize: "0.7rem",
            }}
          >
            C
          </Button>
          <label> Chưa chọn</label>
        </div>
      </div>
    </div>
  );
};

export default Seat;
