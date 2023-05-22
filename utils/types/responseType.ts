export interface NoticePostType {
  [x: string]: any;
  id: number;
  title: string;
  content: string;
  date: string;
  isFixed: boolean;
  previousId?: number;
  nextId?: number;
}
