import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";

const Sidebar1 = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <div className="flex flex-row h-full items-start justify-center w-full">
          <div className="flex flex-1 flex-col h-full items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-white-A700 border-b border-gray-300 border-solid flex flex-row items-center justify-between px-5 py-3 w-full">
                <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_mappinline.svg"
                    alt="mappinline"
                  />
                  <Text
                    className="flex-1 text-blue_gray-900 text-sm w-auto"
                    size="txtNanumSquareacB14"
                  >
                    위치
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_addline.svg"
                  alt="addline"
                />
              </div>
              <div className="bg-white-A700 border-b border-gray-300 border-solid flex flex-row items-center justify-between px-5 py-3 w-full">
                <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_calendar2line.svg"
                    alt="calendar2line"
                  />
                  <Text
                    className="flex-1 text-blue_gray-900 text-sm w-auto"
                    size="txtNanumSquareacB14"
                  >
                    날짜
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_addline.svg"
                  alt="addline_One"
                />
              </div>
              <div className="bg-white-A700 border-b border-gray-300 border-solid flex flex-row items-center justify-between px-5 py-3 w-full">
                <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_ruler2line.svg"
                    alt="ruler2line"
                  />
                  <Text
                    className="flex-1 text-blue_gray-900 text-sm w-auto"
                    size="txtNanumSquareacB14"
                  >
                    면적
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_addline.svg"
                  alt="addline_Two"
                />
              </div>
              <div className="bg-white-A700 border-b border-gray-300 border-solid flex flex-row items-center justify-between px-5 py-3 w-full">
                <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_music.svg"
                    alt="music"
                  />
                  <Text
                    className="flex-1 text-blue_gray-900 text-sm w-auto"
                    size="txtNanumSquareacB14"
                  >
                    용도
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_addline.svg"
                  alt="addline_Three"
                />
              </div>
              <div className="bg-white-A700 border-b border-gray-300 border-solid flex flex-row items-center justify-between px-5 py-3 w-full">
                <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_buildingline.svg"
                    alt="buildingline"
                  />
                  <Text
                    className="flex-1 text-blue_gray-900 text-sm w-auto"
                    size="txtNanumSquareacB14"
                  >
                    회사
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_addline.svg"
                  alt="addline_Four"
                />
              </div>
              <div className="bg-white-A700 border-b border-gray-300 border-solid flex flex-row items-center justify-between px-5 py-3 w-full">
                <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_handcoinline.svg"
                    alt="handcoinline"
                  />
                  <Text
                    className="flex-1 text-blue_gray-900 text-sm w-auto"
                    size="txtNanumSquareacB14"
                  >
                    입/관비
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_addline.svg"
                  alt="addline_Five"
                />
              </div>
              <div className="bg-white-A700 border-b border-gray-300 border-solid flex flex-row items-center justify-between px-5 py-3 w-full">
                <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_temphotline.svg"
                    alt="temphotline"
                  />
                  <Text
                    className="flex-1 text-blue_gray-900 text-sm w-auto"
                    size="txtNanumSquareacB14"
                  >
                    상/저온
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_addline.svg"
                  alt="addline_Six"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center justify-start p-5 w-full">
              <Text
                className="text-base text-blue_gray-900 w-full"
                size="txtKlavikaBold16"
              >
                Summary
              </Text>
              <div className="flex flex-col gap-3 items-center justify-start w-full">
                <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col gap-2 items-center justify-start p-5 rounded-[12px] w-full">
                  <Text
                    className="text-base text-blue_gray-900 w-full"
                    size="txtNanumSquareacB16"
                  >
                    연면적별 건수 집계
                  </Text>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-gray-100 border-gray-300 border-solid border-y flex flex-row items-center justify-between p-2 w-full">
                      <Text
                        className="text-center text-gray-700 text-xs w-auto"
                        size="txtNanumSquareacR12"
                      >
                        연면적(평)
                      </Text>
                      <Text
                        className="flex-1 text-center text-gray-700 text-xs w-auto"
                        size="txtNanumSquareacR12"
                      >
                        인허가
                      </Text>
                      <Text
                        className="flex-1 text-center text-gray-700 text-xs w-auto"
                        size="txtNanumSquareacR12"
                      >
                        착공
                      </Text>
                      <Text
                        className="flex-1 text-center text-gray-700 text-xs w-auto"
                        size="txtNanumSquareacR12"
                      >
                        사용승인
                      </Text>
                    </div>
                    <div className="bg-white-A700 border-b border-gray-300 border-solid flex flex-row items-center justify-center p-2 w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        3천~5천
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-center text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        3
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-center text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        1
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-center text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        3
                      </Text>
                    </div>
                    <div className="bg-white-A700 border-b border-gray-300 border-solid flex flex-row items-center justify-center p-2 w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        5천~1만
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-center text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        1
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-center text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        2
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-center text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        1
                      </Text>
                    </div>
                    <div className="bg-white-A700 border-b border-gray-300 border-solid flex flex-row items-center justify-center p-2 w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        1만~2만
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-center text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        1
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-center text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        1
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-center text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        3
                      </Text>
                    </div>
                    <div className="bg-white-A700 border-b border-blue_gray-900 border-solid flex flex-row items-center justify-center p-2 w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        2만 이상
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-center text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        2
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-center text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        1
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-center text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        3
                      </Text>
                    </div>
                    <div className="bg-white-A700 border-b border-gray-300 border-solid flex flex-row items-center justify-between p-2 w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xs w-auto"
                        size="txtNanumSquareacB12"
                      >
                        합계
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-center text-xs w-auto"
                        size="txtNanumSquareacB12"
                      >
                        7
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-center text-xs w-auto"
                        size="txtNanumSquareacB12"
                      >
                        5
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-center text-xs w-auto"
                        size="txtNanumSquareacB12"
                      >
                        4
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col gap-2 items-center justify-start p-5 rounded-[12px] w-full">
                  <Text
                    className="text-base text-blue_gray-900 w-full"
                    size="txtNanumSquareacB16"
                  >
                    연면적 합산표
                  </Text>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-gray-100 border-gray-300 border-solid border-y flex flex-row items-center justify-between p-2 w-full">
                      <Text
                        className="text-center text-gray-700 text-xs w-auto"
                        size="txtNanumSquareacR12"
                      >
                        연면적(평)
                      </Text>
                      <Text
                        className="flex-1 text-center text-gray-700 text-xs w-auto"
                        size="txtNanumSquareacR12"
                      >
                        인허가
                      </Text>
                      <Text
                        className="flex-1 text-center text-gray-700 text-xs w-auto"
                        size="txtNanumSquareacR12"
                      >
                        착공
                      </Text>
                      <Text
                        className="flex-1 text-center text-gray-700 text-xs w-auto"
                        size="txtNanumSquareacR12"
                      >
                        사용승인
                      </Text>
                    </div>
                    <div className="bg-white-A700 border-b border-gray-300 border-solid flex flex-row items-center justify-between p-2 w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        3천~5천
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-right text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        486,623
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-right text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        486,623
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-right text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        486,623
                      </Text>
                    </div>
                    <div className="bg-white-A700 border-b border-gray-300 border-solid flex flex-row items-center justify-between p-2 w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        5천~1만
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-right text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        486,623
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-right text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        486,623
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-right text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        486,623
                      </Text>
                    </div>
                    <div className="bg-white-A700 border-b border-gray-300 border-solid flex flex-row items-center justify-between p-2 w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        1만~2만
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-right text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        486,623
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-right text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        486,623
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-right text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        486,623
                      </Text>
                    </div>
                    <div className="bg-white-A700 border-b border-blue_gray-900 border-solid flex flex-row items-center justify-between p-2 w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        2만 이상
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-right text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        486,623
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-right text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        486,623
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-right text-xs w-auto"
                        size="txtNanumSquareacR12Bluegray900"
                      >
                        486,623
                      </Text>
                    </div>
                    <div className="bg-white-A700 border-b border-gray-300 border-solid flex flex-row items-center justify-between p-2 w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xs w-auto"
                        size="txtNanumSquareacB12"
                      >
                        합계
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-right text-xs w-auto"
                        size="txtNanumSquareacB12"
                      >
                        486,623
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-right text-xs w-auto"
                        size="txtNanumSquareacB12"
                      >
                        486,623
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-900 text-right text-xs w-auto"
                        size="txtNanumSquareacB12"
                      >
                        486,623
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-300 flex flex-col h-[960px] md:h-auto items-center justify-start pt-[100px] w-1.5">
            <Line className="bg-gray-500 h-16 rounded-[3px] w-1.5" />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center w-[366px] md:w-full">
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[140px]"
            leftIcon={
              <Img
                className="h-6 mr-2"
                src="images/img_loopleftline.svg"
                alt="loop-left-line"
              />
            }
            shape="square"
            color="gray_500"
            size="sm"
            variant="fill"
          >
            <div className="!text-white-A700 font-bold font-nanumsquareac leading-[normal] text-base text-center">
              초기화
            </div>
          </Button>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[226px]"
            leftIcon={
              <Img
                className="h-6 mr-2"
                src="images/img_search.svg"
                alt="search"
              />
            }
            shape="square"
            color="blue_gray_900"
            size="sm"
            variant="fill"
          >
            <div className="font-bold font-nanumsquareac leading-[normal] text-base text-center">
              검색
            </div>
          </Button>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
