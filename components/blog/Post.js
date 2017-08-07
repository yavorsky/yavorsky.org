import format from 'date-fns/format';

const formatDate = (str) => {
  const date = new Date(str);
  return format(date, 'DD MMM YYYY');
}

export default ({ id }) => {
  const input = require(`../../data/${id}`);

  return <div className="Post">
  </div>
}
