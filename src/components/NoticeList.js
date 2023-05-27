import Notice from './Notice';
import { notice } from '@/data/notice';

export default function NoticeList() {
  return (
    <div className="-my-8 divide-y-2 divide-gray-100">
      {notice.map((props, index) => (
        <Notice key={index} {...props} />
      ))}
    </div>
  );
}
