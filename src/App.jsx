import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { selectIsModalShown, selectOpenedContact } from './redux/selectors';
import { useAuth } from './hooks/userAuth';
import { Loader } from './components/Loader/Loader';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { SearchAppBar } from './components/SearchAppBar/SearchAppBar';
import { EditContactModal } from './components/EditContactModal/EditContactModal';
import Home from './pages/Home';

const Contacts = lazy(() => import('./pages/Contacts'));
const Register = lazy(() => import('./pages/Register'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isModalShown = useSelector(selectIsModalShown);
  const openedContact = useSelector(selectOpenedContact);
  const { isRefreshing } = useAuth();

  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<SearchAppBar />}>
          <Route
            path={`/contacts`}
            element={<PrivateRoute component={<Contacts />} redirect={'/login'} />}
          />
        </Route>
        <Route path={`/`} element={<PublicRoute component={<Home />} />} />
        <Route path={`/login`} element={<PublicRoute component={<Home />} />} />
        <Route path={`/register`} element={<PublicRoute component={<Register />} />} />
        <Route path="*" element={<PublicRoute component={<NotFound />} />} />
      </Routes>
      {isModalShown && <EditContactModal openedContact={openedContact} />}
    </Suspense>
  );
};

export default App;
