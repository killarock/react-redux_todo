import moment from 'moment';

export default function createTodo(title) {
  return {
    id: Date.now(),
    title,
    date: moment().format('MMM Do YY')
  };
}
