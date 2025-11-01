import {useSelector, useDispatch} from 'react-redux';
import { dispatch, selector } from '../store';


export const useAppDispatch = useDispatch.withTypes<dispatch>();
export const useAppSelector = useSelector.withTypes<selector>();