import { useState } from 'react';
import DatePicker from '../DatePicker';
import { format } from 'date-fns';

interface FormValues4 {
  title: string;
  description: string;
  firstDate: Date | undefined;
  setFirstDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export default function Four({ formValues4 }: { formValues4: FormValues4 }) {
  const { title, description, firstDate, setFirstDate } = formValues4;
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  return (
    <div className="mt-12 gap-y-1.5 flex flex-col">
      <label className="font-bold text-label-md text-main space-y-2">
        4. {title} <span className="text-red">*</span>
        <p className="font-normal text-body-sm">{description}</p>
      </label>
      <div
        onClick={() => setShowCalendar((prev) => !prev)}
        className={`bg-gray-100 px-4 leading-[50px] font-normal ${
          firstDate ? 'text-main' : 'text-gray_01'
        }  text-body-xs rounded-lg h-[50px]`}
      >
        {firstDate ? format(firstDate, 'yyyy-MM-dd') : 'YYYY-MM-DD'}
      </div>
      {showCalendar && <DatePicker date={firstDate} setDate={setFirstDate} setShowCalendar={setShowCalendar} />}
    </div>
  );
}
