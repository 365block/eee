
    import React from 'react';

    

    import { Button, Img, Line, List, SelectBox, Text } from "components"
  import EightListtbody from "components/EightListtbody"
  import Sidebar1 from "components/Sidebar1"
  
  

    

    

    const 1OptionsList = [{"label":"Option1","value":"option1"},{"label":"Option2","value":"option2"},{"label":"Option3","value":"option3"}]
const 2OptionsList = [{"label":"Option1","value":"option1"},{"label":"Option2","value":"option2"},{"label":"Option3","value":"option3"}]
const 3OptionsList = [{"label":"Option1","value":"option1"},{"label":"Option2","value":"option2"},{"label":"Option3","value":"option3"}]

    const EightPage = () => {
      

      

      

      return (<><div
  className="bg-white-A700 flex flex-col font-nanumsquareac items-start justify-start mx-auto w-auto sm:w-full md:w-full"
  

  
  ><div
  className="flex flex-col items-end px-5 w-full"
  

  
  ><header
    className="bg-white-A700 border-b border-gray-300 border-solid flex h-16 md:h-auto items-center justify-between px-5 w-full"
    
    
  ><div
  className="flex md:flex-col flex-row md:gap-10 h-full items-center justify-between w-full"
  
  
  ><div
  className="flex md:flex-col flex-row md:gap-5 h-16 md:h-auto items-center justify-start"
  
  
  ><div
  className="flex flex-row h-16 md:h-auto items-center justify-center"
  
  
  ><div
  className="flex flex-row gap-1 h-16 md:h-auto items-center justify-center w-40"
  
  
  ><Img className="h-6 w-6" src="images/img_roadmapline.svg" alt="roadmapline" /><Text
    className="text-base text-gray-500 w-auto"
    size="txtNanumSquareacR16"
    
    
  >지도보기</Text></div><Button
  className="cursor-pointer flex items-center justify-center min-w-[160px]"
    
    leftIcon={<Img className="h-6 mr-1" src="images/img_gridfill.svg" alt="grid-fill" />}shape="square"
color="blue_gray_900"
size="md"
variant="outline"
  ><div className="font-bold leading-[normal] text-base text-left">표 테이블</div></Button></div><div
    className="h-[31px] w-full"
    
    
  ></div></div><div
  className="flex md:flex-1 md:flex-col flex-row gap-5 items-center justify-center w-auto md:w-full"
  
  
  ><div
  className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 h-10 md:h-auto items-center justify-start px-3 rounded w-[500px] sm:w-full"
  
  
  ><Text
    className="flex-1 text-gray-500 text-sm w-auto"
    size="txtNanumSquareacR14"
    
    
  >건물명, 투자자(소유자), 자산운용사, 주소, 임차인</Text><Img className="h-6 w-6" src="images/img_feathericons.svg" alt="feathericons" /></div><div
  className="flex flex-row gap-2 items-center justify-center w-auto"
  
  
  ><Button
  className="cursor-pointer flex items-center justify-center min-w-[120px]"
    
    leftIcon={<Img className="h-5 mr-1" src="images/img_layoutmasonryline.svg" alt="layout-masonry-line" />}shape="square"
color="blue_gray_900"
size="xs"
variant="fill"
  ><div className="font-bold leading-[normal] text-center text-xs">지적편집도</div></Button><Button
  className="cursor-pointer flex items-center justify-center min-w-[120px]"
    
    leftIcon={<Img className="h-5 mr-1" src="images/img_editcircleline.svg" alt="edit-circle-line" />}shape="square"
color="blue_gray_900"
size="xs"
variant="fill"
  ><div className="font-bold leading-[normal] text-center text-xs">반경</div></Button></div></div></div></header></div><div
  className="flex flex-col items-center w-full"
  

  
  ><div
  className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full"
  
  
  ><Sidebar1 className="!sticky !w-[366px] bg-gray-100 border-gray-300 border-r border-solid flex h-screen md:hidden justify-start overflow-auto md:px-5 shadow-bs top-[0]"   /><div
  className="bg-gray-100 flex flex-1 flex-col gap-10 h-[1016px] md:h-auto items-start justify-start max-w-[1554px] p-10 md:px-5 w-full"
  

  
  ><div
  className="flex flex-row md:gap-10 items-center justify-between w-full"
  
  
  ><Text
    className="flex-1 text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
    size="txtNanumSquareacB24"
    
    
  >물류 DB 테이블</Text><div
  className="flex flex-row gap-3 items-center justify-center w-auto"
  
  
  ><Button
  className="border border-red-500 border-solid flex h-11 items-center justify-center w-11"
  
  
  shape="round"
color="white_A700"
size="xs"
variant="fill"
><Img className="h-8" src="images/img_pdf.svg" alt="pdf" /></Button><Button
  className="border border-green-A700 border-solid flex h-11 items-center justify-center w-11"
  
  
  shape="round"
color="white_A700"
size="xs"
variant="fill"
><Img className="h-8" src="images/img_xls.svg" alt="xls" /></Button></div></div><div
  className="flex flex-col items-center justify-start w-full"
  

  
  ><div
  className="border-b-2 border-blue_gray-900 border-solid flex flex-row gap-2 items-center justify-between py-3 w-full"
  
  
  ><Text
    className="flex-1 text-blue_gray-900 text-sm w-auto"
    size="txtNanumSquareacR14Bluegray900"
    
    
  ><span  className="text-blue_gray-900 font-nanumsquareac text-left font-normal" >목록 </span><span  className="text-blue_gray-900 font-nanumsquareac text-left font-bold" >34</span><span  className="text-blue_gray-900 font-nanumsquareac text-left font-normal" >건</span></Text><div
  className="flex flex-row gap-1 items-center justify-center w-auto"
  
  
  ><Img className="h-5 w-5" src="images/img_settings5line.svg" alt="settings5line" /><Text
    className="text-blue_gray-900 text-xs w-auto"
    size="txtNanumSquareacR12Bluegray900"
    
    
  >항목필터설정</Text></div></div><div
  className="flex flex-col items-center justify-start w-full"
  

  
  ><div
  className="bg-gray-200_01 border-b border-gray-300 border-solid flex sm:flex-col flex-row gap-2 items-center justify-center py-3 w-full"
  
  
  ><Text
    className="text-center text-gray-700 text-sm w-auto"
    size="txtNanumSquareacR14Gray700"
    
    
  >Map</Text><Text
    className="text-center text-gray-700 text-sm w-auto"
    size="txtNanumSquareacR14Gray700"
    
    
  >Detail</Text><Text
    className="text-center text-gray-700 text-sm w-auto"
    size="txtNanumSquareacR14Gray700"
    
    
  >관리 허가대장 PK</Text><Text
    className="text-center text-gray-700 text-sm w-auto"
    size="txtNanumSquareacR14Gray700"
    
    
  >대지 위치</Text><Text
    className="text-center text-gray-700 text-sm w-auto"
    size="txtNanumSquareacR14Gray700"
    
    
  >대권역</Text><Text
    className="text-center text-gray-700 text-sm w-auto"
    size="txtNanumSquareacR14Gray700"
    
    
  >권역</Text><SelectBox
className="flex-1 sm:flex-1 leading-[normal] sm:px-5 px-[35px] text-center text-gray-700 text-sm w-[12%] sm:w-full" placeholderClassName="text-gray-700" indicator={<Img className="h-5 w-5" src="images/img_arrowdown.svg" alt="arrow_down" />} isMulti={false} name="frame1834" options={1OptionsList} isSearchable={false} placeholder="주소1"
/><SelectBox
className="flex-1 sm:flex-1 leading-[normal] sm:px-5 px-[35px] text-center text-gray-700 text-sm w-[12%] sm:w-full" placeholderClassName="text-gray-700" indicator={<Img className="h-5 w-5" src="images/img_arrowdown.svg" alt="arrow_down" />} isMulti={false} name="frame1835" options={2OptionsList} isSearchable={false} placeholder="주소2"
/><SelectBox
className="flex-1 sm:flex-1 leading-[normal] sm:px-5 px-[35px] text-center text-gray-700 text-sm w-[12%] sm:w-full" placeholderClassName="text-gray-700" indicator={<Img className="h-5 w-5" src="images/img_arrowdown.svg" alt="arrow_down" />} isMulti={false} name="frame1834_One" options={3OptionsList} isSearchable={false} placeholder="주소3"
/></div><List
    className="flex flex-col gap-px items-center w-full"
    
    orientation="vertical"
    
  ><div
  className="bg-white-A700 border-b border-gray-300 border-solid flex flex-1 md:flex-col flex-row gap-2 items-center justify-center py-3 w-full"
  
  
  ><div
  className="flex flex-col items-center justify-center w-10"
  

  
  ><Img className="h-5 w-5" src="images/img_icroundmylocation.svg" alt="icroundmylocati" /></div><div
  className="flex flex-col items-center justify-center w-10"
  

  
  ><Img className="h-5 w-5" src="images/img_search_blue_gray_900.svg" alt="search" /></div><Text
    className="text-blue_gray-900 text-center text-sm w-auto"
    size="txtNanumSquareacR14Bluegray900"
    
    
  >41460-100357028</Text><Text
    className="text-blue_gray-900 text-sm w-auto"
    size="txtNanumSquareacR14Bluegray900"
    
    
  >경기도 용인시 처인구 남사읍 북리 759-1번지</Text><Text
    className="text-blue_gray-900 text-center text-sm w-auto"
    size="txtNanumSquareacR14Bluegray900"
    
    
  >Greater Seoul</Text><Text
    className="text-blue_gray-900 text-center text-sm w-auto"
    size="txtNanumSquareacR14Bluegray900"
    
    
  >Suburban East</Text><Text
    className="flex-1 text-blue_gray-900 text-sm w-auto"
    size="txtNanumSquareacR14Bluegray900"
    
    
  >경기도</Text><Text
    className="flex-1 text-blue_gray-900 text-sm w-auto"
    size="txtNanumSquareacR14Bluegray900"
    
    
  >경기도</Text><Text
    className="flex-1 text-blue_gray-900 text-sm w-auto"
    size="txtNanumSquareacR14Bluegray900"
    
    
  >경기도</Text></div><EightListtbody className="bg-white-A700 border-b border-gray-300 border-solid flex flex-1 md:flex-col flex-row gap-2 items-center justify-center py-3 w-full"   /><EightListtbody className="bg-white-A700 border-b border-gray-300 border-solid flex flex-1 md:flex-col flex-row gap-2 items-center justify-center py-3 w-full"   /></List></div></div></div></div></div></div></>);
    };

    

    export default EightPage;
  