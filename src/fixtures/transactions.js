import moment from "moment";
import { shuffle } from "lodash";
import users from "./users";

const names = users.map(({ userProfile: { displayName } }) => displayName);
const transactionTypes = ["withdrawal", "deposit"];

const fixtureTransactions = (howMany = 25) => {
  let list = [];

  for (var i = 0; i < howMany; i++) {
    const month = moment(i % 12 || 1, "MM").format("MMM");
    const day = Math.floor(Math.random() * 29) || 1;
    const name = shuffle(names)[0];
    const amount = Math.floor(Math.random() * 100);
    const kind = shuffle(transactionTypes)[0];

    list.push({
      date: {
        month,
        day
      },
      imageUrl: "/images/male_2.jpg",
      name,
      amount,
      kind,
      memo: "Movin' tokens...",
      profile: "one@two.com"
    });
  }

  return list;
};

const transactions = fixtureTransactions(25);

export default transactions;
