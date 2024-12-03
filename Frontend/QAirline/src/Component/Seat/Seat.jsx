import { Divider, Button, Typography } from "@mui/material";
import { useState } from "react";

const Seat = () => {
  const economyRows = 14;
  const economyCols = 8;
  const bussinessRows = 12;
  const bussinessCols = 6;
  const firstRows = 6;
  const firstCols = 2;

  //hạng của user
  const userClass = "first";

  let userClassVIE;
  switch (userClass) {
    case "first":
      userClassVIE = "nhất";
      break;
    case "bussiness":
      userClassVIE = "thương gia";
      break;
    case "economy":
      userClassVIE = "phổ thông";
      break;
    default:
      break;
  }

  //ghế đã có người chọn
  const seatIsTakenFirst = ["A1", "B1", "A6", "D6"];
  const seatIsTakenBussiness = ["A1", "B1", "C1"];
  const seatIsTakenEconomy = ["A6", "B6", "D6"];

  const [userChoices, setUserChoices] = useState([]);

  //thay đổi khi ấn button chọn ghế
  const handleSeatChange = (colIndex, rowIndex) => {
    const seatID = `${String.fromCharCode(65 + colIndex)}${rowIndex + 1}`;

    if (
      (seatIsTakenFirst.includes(seatID) && userClass === "first") ||
      (seatIsTakenBussiness.includes(seatID) && userClass === "bussiness") ||
      (seatIsTakenEconomy.includes(seatID) && userClass === "economy")
    )
      return;

    if (userChoices.includes(seatID)) {
      setUserChoices(userChoices.filter((choice) => choice !== seatID));
    } else {
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
    console.log(userClass + " class: " + userChoices);
  };

  return (
    <div className="m-auto mb-5 mt-5 p-5 place-items-center relative bg-indigo-50">
      <Typography variant="h3" textAlign={"center"} gutterBottom>
        Chọn chỗ ngồi
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
              gridTemplateColumns: `30px repeat(${firstCols}, 30px)`,
            }}
          >
            {/* hiển thị id của các cột */}
            <div></div>
            {Array.from({ length: firstCols }).map((_, index) => (
              <div className="text-center font-bold">
                {String.fromCharCode(65 + index)}
              </div>
            ))}
            {/* Hiển thị id các hàng và các seat */}
            {Array.from({ length: firstRows }).map((_, rowIndex) => (
              <>
                <div className="text-center font-bold">{rowIndex + 1}</div>
                {Array.from({ length: firstCols }).map((_, colIndex) => (
                  <Button
                    key={`seat-${colIndex}-${rowIndex}`}
                    variant={
                      seatIsTakenFirst.includes(
                        `${String.fromCharCode(65 + colIndex)}${rowIndex + 1}`
                      )
                        ? "contained"
                        : isSeatSelected(colIndex, rowIndex) &&
                          userClass === "first"
                        ? "contained"
                        : "outlined"
                    }
                    color={
                      seatIsTakenFirst.includes(
                        `${String.fromCharCode(65 + colIndex)}${rowIndex + 1}`
                      )
                        ? "inherit"
                        : isSeatSelected(colIndex, rowIndex) &&
                          userClass === "first"
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
                        !seatIsTakenFirst.includes(
                          `${String.fromCharCode(65 + colIndex)}${rowIndex + 1}`
                        )
                      ) {
                        if (userClass === "first")
                          handleSeatChange(colIndex, rowIndex);
                      }
                    }}
                  >
                    {/* hiển thị seat id */}
                    {String.fromCharCode(65 + colIndex)}
                    {rowIndex + 1}
                  </Button>
                ))}
              </>
            ))}
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
              gridTemplateColumns: `30px repeat(${bussinessCols}, 30px)`,
            }}
          >
            {/* hiển thị id của các cột */}
            <div></div>
            {Array.from({ length: bussinessCols }).map((_, index) => (
              <div className="text-center font-bold">
                {String.fromCharCode(65 + index)}
              </div>
            ))}
            {/* Hiển thị id các hàng và các seat */}
            {Array.from({ length: bussinessRows }).map((_, rowIndex) => (
              <>
                <div className="text-center font-bold">{rowIndex + 1}</div>
                {Array.from({ length: bussinessCols }).map((_, colIndex) => (
                  <Button
                    key={`seat-${colIndex}-${rowIndex}`}
                    variant={
                      seatIsTakenBussiness.includes(
                        `${String.fromCharCode(65 + colIndex)}${rowIndex + 1}`
                      )
                        ? "contained"
                        : isSeatSelected(colIndex, rowIndex) &&
                          userClass === "bussiness"
                        ? "contained"
                        : "outlined"
                    }
                    color={
                      seatIsTakenBussiness.includes(
                        `${String.fromCharCode(65 + colIndex)}${rowIndex + 1}`
                      )
                        ? "inherit"
                        : isSeatSelected(colIndex, rowIndex) &&
                          userClass === "bussiness"
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
                        !seatIsTakenBussiness.includes(
                          `${String.fromCharCode(65 + colIndex)}${rowIndex + 1}`
                        )
                      ) {
                        if (userClass === "bussiness")
                          handleSeatChange(colIndex, rowIndex);
                      }
                    }}
                  >
                    {/* hiển thị seat id */}
                    {String.fromCharCode(65 + colIndex)}
                    {rowIndex + 1}
                  </Button>
                ))}
              </>
            ))}
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
              gridTemplateColumns: `30px repeat(${economyCols}, 30px)`,
            }}
          >
            {/* hiển thị id của các cột */}
            <div></div>
            {Array.from({ length: economyCols }).map((_, index) => (
              <div className="text-center font-bold">
                {String.fromCharCode(65 + index)}
              </div>
            ))}
            {/* Hiển thị id các hàng và các seat */}
            {Array.from({ length: economyRows }).map((_, rowIndex) => (
              <>
                <div className="text-center font-bold">{rowIndex + 1}</div>
                {Array.from({ length: economyCols }).map((_, colIndex) => (
                  <Button
                    key={`seat-${colIndex}-${rowIndex}`}
                    variant={
                      seatIsTakenEconomy.includes(
                        `${String.fromCharCode(65 + colIndex)}${rowIndex + 1}`
                      )
                        ? "contained"
                        : isSeatSelected(colIndex, rowIndex) &&
                          userClass === "economy"
                        ? "contained"
                        : "outlined"
                    }
                    color={
                      seatIsTakenEconomy.includes(
                        `${String.fromCharCode(65 + colIndex)}${rowIndex + 1}`
                      )
                        ? "inherit"
                        : isSeatSelected(colIndex, rowIndex) &&
                          userClass === "economy"
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
                        !seatIsTakenEconomy.includes(
                          `${String.fromCharCode(65 + colIndex)}${rowIndex + 1}`
                        )
                      ) {
                        if (userClass === "economy")
                          handleSeatChange(colIndex, rowIndex);
                      }
                    }}
                  >
                    {/* hiển thị seat id */}
                    {String.fromCharCode(65 + colIndex)}
                    {rowIndex + 1}
                  </Button>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="m-5 flex">
        <strong>Ghế đã chọn (hạng {userClassVIE}): </strong>
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
