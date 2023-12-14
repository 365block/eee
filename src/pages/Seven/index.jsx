import React from "react";

import { Button, Img, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const SevenPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-nanumsquareac items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-end px-5 w-full">
          <header className="bg-white-A700 border-b border-gray-300 border-solid flex h-16 md:h-auto items-center justify-between px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 h-full items-center justify-between w-full">
              <div className="flex md:flex-col flex-row md:gap-5 h-16 md:h-auto items-center justify-start">
                <div className="flex flex-row h-16 md:h-auto items-center justify-center">
                  <div className="border-b-4 border-blue_gray-900 border-solid flex flex-row gap-1 h-16 md:h-auto items-center justify-center w-[161px]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_roadmapfill.svg"
                      alt="roadmapfill"
                    />
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtNanumSquareacB16"
                    >
                      지도보기
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1 h-16 md:h-auto items-center justify-center w-[161px]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_gridline.svg"
                      alt="gridline"
                    />
                    <Text
                      className="text-base text-gray-500 w-auto"
                      size="txtNanumSquareacR16"
                    >
                      표 테이블
                    </Text>
                  </div>
                </div>
                <div className="h-[31px] w-full"></div>
              </div>
              <div className="flex md:flex-1 md:flex-col flex-row gap-5 items-center justify-center w-auto md:w-full">
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 h-10 md:h-auto items-center justify-start px-3 rounded w-[500px] sm:w-full">
                  <Text
                    className="flex-1 text-gray-500 text-sm w-auto"
                    size="txtNanumSquareacR14"
                  >
                    건물명, 투자자(소유자), 자산운용사, 주소, 임차인
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_feathericons.svg"
                    alt="feathericons"
                  />
                </div>
                <div className="flex flex-row gap-2 items-center justify-center w-auto">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[120px]"
                    leftIcon={
                      <Img
                        className="h-5 mr-1"
                        src="images/img_layoutmasonryline.svg"
                        alt="layout-masonry-line"
                      />
                    }
                    shape="square"
                    color="blue_gray_900"
                    size="xs"
                    variant="fill"
                  >
                    <div className="font-bold leading-[normal] text-center text-xs">
                      지적편집도
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[120px]"
                    leftIcon={
                      <Img
                        className="h-5 mr-1"
                        src="images/img_editcircleline.svg"
                        alt="edit-circle-line"
                      />
                    }
                    shape="square"
                    color="blue_gray_900"
                    size="xs"
                    variant="fill"
                  >
                    <div className="font-bold leading-[normal] text-center text-xs">
                      반경
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="flex md:flex-col flex-row md:gap-5 h-full items-start justify-start w-full">
            <Sidebar1 className="!sticky !w-[366px] bg-gray-100 border-gray-300 border-r border-solid flex h-screen md:hidden justify-start overflow-auto md:px-5 shadow-bs top-[0]" />
            <div className="bg-blue_gray-900 flex-1 h-[1016px] md:px-5 relative w-full">
              <Img
                className="h-[1016px] m-auto object-cover w-full"
                src="images/img_image1.png"
                alt="imageOne"
              />
              <div className="absolute flex inset-x-[0] mx-auto top-[13%] w-[47%] md:w-full">
                <div className="bg-black-900_33 border-2 border-red-A700 border-solid flex flex-col h-[640px] md:h-auto items-end justify-start my-auto p-[62px] md:px-10 sm:px-5 rounded-[50%] w-[640px]">
                  <div className="flex flex-col h-[420px] sm:h-auto justify-start mb-[52px] mt-11 w-[420px] sm:w-full">
                    <div className="flex flex-row items-start justify-start md:ml-[0] ml-[75px] w-[58%] md:w-full">
                      <Img
                        className="h-9 md:h-auto mb-3.5 mt-[18px] object-cover w-9"
                        src="images/img_redesrks1.png"
                        alt="redesrksOne"
                      />
                      <Img
                        className="h-9 md:h-auto ml-7 mt-8 object-cover w-9"
                        src="images/img_tentotwenty.png"
                        alt="tentotwenty"
                      />
                      <Img
                        className="h-9 md:h-auto mb-8 ml-[104px] object-cover w-9"
                        src="images/img_fivetoten.png"
                        alt="fivetoten"
                      />
                    </div>
                    <Img
                      className="h-9 md:h-auto md:ml-[0] ml-[43px] mt-[52px] object-cover w-9"
                      src="images/img_threetofive.png"
                      alt="threetofive"
                    />
                    <Img
                      className="h-9 md:h-auto md:ml-[0] ml-[188px] mt-[7px] object-cover w-9"
                      src="images/img_overthetwenty.png"
                      alt="overthetwenty"
                    />
                    <div className="flex flex-row items-start justify-between mt-1 w-full">
                      <Img
                        className="h-9 md:h-auto object-cover w-9"
                        src="images/img_preparing.png"
                        alt="preparing"
                      />
                      <Img
                        className="h-[217px]"
                        src="images/img_group4.svg"
                        alt="groupFour"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col gap-3 items-center justify-center mb-8 ml-[-59px] mt-auto p-3 rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px] shadow-bs1 w-[140px] z-[1]">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-gray-700 text-xs w-auto"
                      size="txtNanumSquareacR12"
                    >
                      총반경
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xs w-auto"
                      size="txtNanumSquareacB12"
                    >
                      <span className="text-blue-800 font-nanumsquareac text-left font-bold">
                        39.7
                      </span>
                      <span className="text-blue_gray-900 font-nanumsquareac text-left font-normal">
                        km
                      </span>
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[116px] rounded-[18px]"
                    leftIcon={
                      <Img
                        className="h-5 mr-2"
                        src="images/img_television.svg"
                        alt="television"
                      />
                    }
                    color="blue_gray_100"
                    size="xs"
                    variant="outline"
                  >
                    <div className="font-bold leading-[normal] text-left text-xs">
                      지우기
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SevenPage;
