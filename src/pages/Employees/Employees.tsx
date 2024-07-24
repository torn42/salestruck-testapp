import { FC, useEffect } from 'react';
import { AppDispatch, RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { EmployeeCard } from '@/components/EmployeeCard';
import { Employee } from '@/types';

import styles from './Employees.module.scss';
import { fetchEmployees } from '@/store/employees/asyncAxtions.ts';

export const Employees: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { employees } = useSelector((state: RootState) => state.employee);
  console.log(employees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  return (
    <>
      <h1>СОТРУДНИКИ</h1>
      <div className={styles.employees}>
        {employees.map((employee: Employee) => <EmployeeCard {...employee} />)}
      </div>
    </>
  );
};