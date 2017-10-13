import moment from "moment";
import { shuffle } from "lodash";

const names = [
  "Brian Dawson",
  "Xiao Jun",
  "Juan Pérez",
  "joesmith",
  "Terry Washington",
  "Kim Hyo-jung",
  "Justin Jay",
  "Benjamin Constantine",
  "Aishwarya Balakrishna",
];

const transactionTypes = [
  "withdrawal",
  "deposit"
];

const fixtureTransactions = (howMany = 25) => {
  let list = [];

  for (var i = 0; i < howMany; i++) {
    const month = moment(i % 12 || 1, 'MM').format('MMM');
    const day = Math.floor(Math.random() * 29) || 1;
    const name = shuffle(names)[0];
    const amount = Math.floor(Math.random() * 100);
    const kind = shuffle(transactionTypes)[0];

    list.push({
      date: {
        month,
        day,
      },
      image: {
        src: "/images/male_2.jpg"
      },
      name,
      amount,
      kind,
    });
  }

  return list;
}

const transactions = fixtureTransactions(25);

export default transactions;
