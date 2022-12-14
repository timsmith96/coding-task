import { DateTime } from 'luxon';
import styles from './BirthdayInfo.module.css';

const BirthdayInfo = (data) => {
  const { firstName, dateOfBirth } = data.user;
  const currentDate = DateTime.now();
  const ISOdateOfBirth = DateTime.fromISO(dateOfBirth);
  const daysSinceBirth = currentDate.diff(ISOdateOfBirth, 'days');
  let greeting;
  // create next birthday DateTime object with month/day from user DOB, and begin with current year, then update later if necessary
  let nextBirthday = DateTime.fromObject({
    day: ISOdateOfBirth.day,
    month: ISOdateOfBirth.month,
    year: currentDate.year,
  });
  if (
    currentDate.day === ISOdateOfBirth.day &&
    currentDate.month === ISOdateOfBirth.month
  ) {
    greeting = <p>Happy Birthday, {firstName}!</p>;
    // if the current day and month is past the user's DOB day and month, need to add 1 to the current year - their next birthday will be next calendar year
  } else if (
    currentDate.day > ISOdateOfBirth.day &&
    currentDate.month > ISOdateOfBirth.month
  ) {
    nextBirthday = nextBirthday.plus({ years: 1 });
    const daysToBirthday = currentDate.diff(nextBirthday, 'days');
    greeting = (
      <p>
        There are {Math.ceil(Math.abs(daysToBirthday.days))} days until your
        next birthday.
      </p>
    );
  }

  return (
    <div className={styles.birthday_info}>
      <p>
        Hi, <strong>{firstName}</strong>
      </p>
      <p>
        You were born {Math.floor(daysSinceBirth.days).toLocaleString()} days
        ago.
      </p>
      {greeting}
    </div>
  );
};

export default BirthdayInfo;
