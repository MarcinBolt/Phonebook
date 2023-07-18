import { useDispatch } from 'react-redux';
import { setFilterValue } from '../../redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFiltering = e => {
    const { value } = e.target;
    dispatch(setFilterValue(value));
  };

  return (
    <label className={css.filter__label}>
      <p className={css.filter__labelDescription}>Find contacts by name</p>
      <input className={css.filter__input} type="text" name="filter" onChange={handleFiltering} />
    </label>
  );
};

export default Filter;
