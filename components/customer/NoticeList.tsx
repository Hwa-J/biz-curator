import React, { useState } from 'react';
import CustomWriteModal from '../modals/CustomWriteModal';
import { createPortal } from 'react-dom';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import axiosInstance from '@/apis/config';
import CustomerDeleteModals from '../modals/CustomModal';

interface Item {
  id: number;
  title: string;
  content: string;
  isFixed: boolean;
  date: string;
}
interface ItemListProps {
  data: Item[];
}



// const fetchNotices = async (lastArticleId: number, size: number): Promise<Item[]> => {
//         const response = await fetch(`api/notices?lastArticleId=${lastArticleId}&size=${size}`)
//         console.log(response);
//         const data = await response.json();
//         return data;
//     }

export default function NoticeList({ data }: ItemListProps) {
  const [selectIndex, setSelectIndex] = useState<number | null>(null);
  const [writeOpenModal, setWriteOpenModal] = useState<boolean>(false);

  const listClick = (index: number) => {
    setSelectIndex(selectIndex === index ? null : index);
  } // 항목을 클릭했을때 호출되는 함수이고 index를 찾아서 클릭이 된다.

  const writeModal = () => {
    setSelectIndex(null); //리스트를 클릭해서 상세정보가 나온상태에서 글쓰기를 누르면 item이 있는걸로 간주하기때문에 사용
    setWriteOpenModal(true);
  };
  const onEditClick = (index: number) => {
    setWriteOpenModal(true);
    console.log(setSelectIndex(index));
  };

  const onDeleteClick = async (index: number) => {
    try {
      const id = data[index].id;

      await deleteNoticeMutation.mutateAsync(id);
    } catch (error) {
      console.log('삭제 실패', error);
    }
  }; //

  //interceptor.ts에 저장되어있는 axiosInstance 서버주소를통해 delete주소로 보낸다
  //토큰값을 임의로 저장해놓았음
  const deleteNoticeMutation = useMutation((id: number) =>
    axiosInstance.delete(`/api/notices/${id}`));



  return (
    <>
      <div className="relative">
        <div className="opacity-0 md:opacity-100 md:flex md:justify-between md:px-10 md:py-4 md:border-black md:border-y md:mt-4">
          <span>번호</span>
          <span>제목</span>
          <span>작성일</span>
        </div>
        {data?.map((data, index) => (
          <div key={index}>
            <div
              className="pt-5 pb-5 border-b cursor-pointer relative md:ml-auto mt-4"
              onClick={() => listClick(index)}
            >
              <span className="ml-3 text-sm md:text-base md:ml-12">{data.title}</span>
              <span className="absolute top-5 right-2 text-[#999]">{data.date}</span>
            </div>
            {selectIndex === index && (
              <div className="bg-[#fafafa] break-words py-9 px-5 text-xs">
                <div>
                  <h3 className="md:block md:ml-8 md:mb-6">● {data.title}</h3>
                  <span className="md:ml-5 inline-block py-7">{data.content}</span>
                  <span>감사합니다.</span>
                </div>
                <button
                  className="rounded-lg mt-12 border-[#999] border px-[14px] py-[6px] mr-2"
                  type="button"
                  onClick={() => onEditClick(index)}
                >
                  수정
                </button>
                <button
                  className="rounded-lg mt-12 border-[#999] border px-[14px] py-[6px]"
                  onClick={() => onDeleteClick(index)}
                >
                  삭제
                </button>
              </div>
            )}
          </div>
        ))}
        <button onClick={writeModal} className="absolute top-2 right-2 rounded-lg border px-[14px] py-[6px] text-xs">
          글쓰기
        </button>
      </div>
      {/* writeOpenModal이 true이면 createportal로 모달 렌더링 */}
      {writeOpenModal &&
        createPortal(
          <CustomWriteModal
            setWriteOpenModal={setWriteOpenModal}
            item={selectIndex !== null ? data[selectIndex] : undefined} // 수정할 아이템 전달
          />,
          document.body,
        )}
    </>
  );
}