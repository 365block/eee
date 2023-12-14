import React from "react";

import { Img, Text } from "components";

const EightListtbody = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center w-10">
          <Img
            className="h-5 w-5"
            src="images/img_icroundmylocation.svg"
            alt="icroundmylocati"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-10">
          <Img
            className="h-5 w-5"
            src="images/img_search_blue_gray_900.svg"
            alt="search"
          />
        </div>
        <Text
          className="text-blue_gray-900 text-center text-sm w-auto"
          size="txtNanumSquareacR14Bluegray900"
        >
          {props?.text1}
        </Text>
        <Text
          className="text-blue_gray-900 text-sm w-auto"
          size="txtNanumSquareacR14Bluegray900"
        >
          {props?.text2}
        </Text>
        <Text
          className="text-blue_gray-900 text-center text-sm w-auto"
          size="txtNanumSquareacR14Bluegray900"
        >
          {props?.text3}
        </Text>
        <Text
          className="text-blue_gray-900 text-center text-sm w-auto"
          size="txtNanumSquareacR14Bluegray900"
        >
          {props?.text4}
        </Text>
        <Text
          className="flex-1 text-blue_gray-900 text-sm w-auto"
          size="txtNanumSquareacR14Bluegray900"
        >
          {props?.text5}
        </Text>
        <Text
          className="flex-1 text-blue_gray-900 text-sm w-auto"
          size="txtNanumSquareacR14Bluegray900"
        >
          {props?.text6}
        </Text>
        <Text
          className="flex-1 text-blue_gray-900 text-sm w-auto"
          size="txtNanumSquareacR14Bluegray900"
        >
          {props?.text7}
        </Text>
      </div>
    </>
  );
};

EightListtbody.defaultProps = {
  text1: "41460-100357028",
  text2: "경기도 용인시 처인구 남사읍 북리 759-1번지",
  text3: "Greater Seoul",
  text4: "Suburban East",
  text5: "경기도",
  text6: "경기도",
  text7: "경기도",
};

export default EightListtbody;
