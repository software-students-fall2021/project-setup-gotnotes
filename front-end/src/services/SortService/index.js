//TODO sorting algorithm should be implemented

export const sortResults = (sortParam, items) => {
  const sortedItems = items.forEach((i, j) => {
    switch (sortParam) {
      case "alpha-inc":
        break;
      case "alpha-desc":
        break;
      case "latest":
        break;
      case "course-inc":
        break;
      case "course-desc":
        break;
      case "student-inc":
        break;
      case "student-desc":
        break;
      case "like-inc":
        break;
      case "like-desc":
        break;
      default:
        break;
    }
  });

  // note from apuya: for some reason, says that arrow function returns, so this functionality was temporarily commented out. just replace above when real fix.
  //   const sortedItems = items.sort((i, j) => {
  //     switch (sortParam) {
  //       case "alpha-inc":
  //         break;
  //       case "alpha-desc":
  //         break;
  //       case "latest":
  //         break;
  //       case "course-inc":
  //         break;
  //       case "course-desc":
  //         break;
  //       case "student-inc":
  //         break;
  //       case "student-desc":
  //         break;
  //       case "like-inc":
  //         break;
  //       case "like-desc":
  //         break;
  //       default:
  //         break;
  //     }
  //   });
  return sortedItems;
};
