import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function formateDate(dateString: string) {
  const date = new Date(dateString);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the month, day, and year components from the date object
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  // Format the date string
  const formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;
}

function formatTitle(title: string) {
  if (title.length > 65) {
    return title.slice(0, 65) + " ...";
  } else {
    return title;
  }
}

export { formateDate, formatTitle };
