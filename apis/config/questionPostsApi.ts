import { NoticePostType } from '@/utils/types/responseType';
import { ec2 } from '.';
import { sizeState } from '@/atoms/noticeAtom';

/** 질문글 무한 스크롤 */
export const getInfiniteQuestionPostList = async (lastArticleIdState: number) => {
  const res = await ec2.get(`/api/notices?lastArticleId=${lastArticleIdState}&size=${sizeState}&firstPage=true`);
  const postList = res.data;
  return { postList, nextLastPostId: postList[postList.length - 1]?.itemId, isLast: postList.length < 20 };
};
