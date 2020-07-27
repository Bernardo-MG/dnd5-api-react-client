import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { readCharClass, readCharClassList } from 'domain/actions';

import { selectCharClass, selectCharClassList } from 'domain/selectors';

export function useCharClassList() {
   const dispatch = useDispatch();
   const load = () => dispatch(readCharClassList());

   useEffect(() => {
      load();
   }, []);

   return useSelector(selectCharClassList);
}

export function useCharClass(id) {
   const dispatch = useDispatch();
   const load = () => dispatch(readCharClass(id));

   useEffect(() => {
      load();
   }, []);

   return useSelector(selectCharClass(id));
}
