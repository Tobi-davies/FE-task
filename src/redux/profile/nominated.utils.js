// // import NomineeList from "../../components/nominee-list/nominee.component";

// export const addNomineeToList = (nomineesList, nomineeToAdd) => {
//   const existingNominee = nomineesList.find(
//     (nominee) => nominee.imdbID === nomineeToAdd.imdbID
//   );

//   if (existingNominee) {
//     return nomineesList.map((nominee) =>
//       nominee.imdbID === nomineeToAdd.imdbID ? nominee : nominee
//     );
//   }

//   return [...nomineesList, { ...nomineeToAdd, quantity: 1 }];
// };

// export const removeNomineeFromList = (nomineesList, nomineeToRemove) => {
//   const existingNominee = nomineesList.find(
//     (nominee) => nominee.imdbID === nomineeToRemove.imdbID
//   );

//   if (existingNominee) {
//     return nomineesList.filter(
//       (nominee) => nominee.imdbID !== nomineeToRemove.imdbID
//     );
//   }

//   return nomineesList;
// };
