import Link from 'next/link'
import ListPost from './ListPost';
import posts from '../../posts';
import format from 'date-fns/format';

const formatDate = (str) => {
  const date = new Date(str);
  return format(date, 'DD MMM YYYY');
}

export default (props) => {
  const { date, title, id, keywords } = props.data;
  return <li className="Post">
    <Link title={keywords.join(' ')} href={{pathname: 'post', query: { name: id } }}>{title}</Link>
    <i>{formatDate(date)}</i>
    <style jsx>{`
      a {
        color: #333;
      }

      i {
        color: #ccc;
      }
      `}</style>
  </li>
}