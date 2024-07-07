import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ko";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import NavigateBeforeSharpIcon from "@mui/icons-material/NavigateBeforeSharp";
import NavigateNextSharpIcon from "@mui/icons-material/NavigateNextSharp";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { styled } from "@mui/material/styles";

const InputWithCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
        <CustomDatePicker
          name="datepicker"
          disableFuture={true}
          value={selectedDate}
          className="datePickerCustomStyle"
          sx={{
            width: "100%",
            borderRadius: "30px"
          }}
          onChange={(newValue: string) => {
            setSelectedDate(newValue);
          }}
          slots={{
            openPickerIcon: OpenPickerIcon,
            switchViewIcon: NextIconButton,
            leftArrowIcon: LeftArrowIcon,
            rightArrowIcon: RightArrowIcon,
            day: StyledDay
          }}
          PaperProps={{
            sx: {
              "&.Mui-selected, &.Mui-selected:hover": {
                color: "white",
                backgroundColor: "#7467FF"
              },
              "& .MuiPickersDay-root": {
                "&.Mui-selected, &.Mui-selected:hover": {
                  color: "white",
                  backgroundColor: "#7467FF"
                }
              },
              "& .MuiButtonBase-root": {
                "&.Mui-selected, &.Mui-selected:hover": {
                  color: "white",
                  backgroundColor: "#7467FF"
                }
              }
            }
          }}
          slotProps={{
            calendarHeader: {
              sx: {
                backgroundColor: "#6D6D7D",
                marginTop: 0,
                minHeight: "48px"
              }
            },

            layout: {
              sx: {
                color: "#FFFFFF",
                fontFamily: "Pretendard",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "160%",
                "&& .Mui-selected": {
                  backgroundColor: "#7467FF",
                  color: "#FFFFFF"
                },
                "& .Mui-selected": {
                  backgroundColor: "#7467FF",
                  color: "#FFFFFF"
                },
                "& .Mui-selected:active": {
                  backgroundColor: "#7467FF",
                  color: "#FFFFFF"
                },
                "& .Mui-selected:hover": {
                  backgroundColor: "#7467FF",
                  color: "#FFFFFF"
                },
                "& .MuiPickersDay-root:hover": {
                  backgroundColor: "#E6E6ED", // hover한 날짜의 배경 색상
                  color: "#1F1F23" // hover한 날짜의 텍스트 색상
                },

                "& .MuiPickersDay-root:selected": {
                  backgroundColor: "#7467FF"
                },
                "&.Mui-selected, &.Mui-selected:hover": {
                  color: "white",
                  backgroundColor: "#7467FF"
                }
              }
            },

            textField: {
              size: "small",
              placeholder: "2005.05.03 부터",
              sx: {
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#C8C8D6"
                  },
                  "&:hover fieldset": {
                    borderColor: "#7467FF"
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#7467FF"
                  }
                }
              }
            }
          }}
        />
      </LocalizationProvider>
    </>
  );
};
const OpenPickerIcon = styled(CalendarMonthOutlinedIcon)({
  color: "#7467FF"
});
const NextIconButton = styled(ExpandMoreOutlinedIcon)({
  color: "#FFFFFF"
});
const LeftArrowIcon = styled(NavigateBeforeSharpIcon)({
  color: "#FFFFFF"
});
const RightArrowIcon = styled(NavigateNextSharpIcon)({
  color: "#FFFFFF"
});

const CustomDatePicker = styled(DatePicker)({
  //TODO: 추후 이렇게 빼내기
  // "&& .Mui-selected": {
  //   backgroundColor: "#7467FF",
  //   color: "#FFFFFF"
  // },
  // "& .MuiPickersDay-root:hover": {
  //   backgroundColor: "blue", // hover한 날짜의 배경 색상
  //   color: "white" // hover한 날짜의 텍스트 색상
  // },
  // "& .MuiPickersDay-day": {
  //   fontFamily: "Roboto, sans-serif", // 원하는 폰트 지정
  //   fontSize: "10px"
  // },
  // "& .MuiPickersDay-daySelected": {
  //   backgroundColor: "purple" // 선택된 날짜의 배경색을 보라색으로 설정
  // }
});
const StyledDay = styled(PickersDay)(({}) => ({
  borderRadius: "100px",
  color: "#1F1F23",
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "150%" /* 24px */,
  border: "none",

  "&&.Mui-selected": {
    color: "white",
    backgroundColor: "#7467FF"
  },
  "&.Mui-selected, &.Mui-selected:hover, &.Mui-selected:active": {
    color: "white",
    backgroundColor: "#7467FF"
  }
}));

export default InputWithCalendar;
